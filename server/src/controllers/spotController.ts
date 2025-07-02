import { Request, Response } from 'express';
import Spot from '../models/Spot';

export const getNearby = async (req: Request, res: Response) => {
  const { lat, lng, radius = 5000 } = req.query;
  const spots = await Spot.find({
    location: {
      $near: {
        $geometry: { type: 'Point', coordinates: [+lng!, +lat!] },
        $maxDistance: +radius!
      }
    }
  });
  res.json(spots);
};

export const getOne = async (req: Request, res: Response) => {
  const spot = await Spot.findById(req.params.id);
  res.json(spot);
};

export const createSpot = async (req: Request, res: Response) => {
  const spot = await Spot.create(req.body);
  res.status(201).json(spot);
};

export const rateSpot = async (req: Request, res: Response) => {
  const { vibe, uniqueness, safety, crowd } = req.body;
  const spot = await Spot.findById(req.params.id);
  if (!spot) return res.sendStatus(404);

  const r = spot.ratings;
  r.vibe += vibe;
  r.uniqueness += uniqueness;
  r.safety += safety;
  r.crowd += crowd;
  r.count += 1;
  await spot.save();
  res.json(spot);
};

export const commentSpot = async (req: Request, res: Response) => {
  const { body, public: isPublic = true } = req.body;
  const spot = await Spot.findByIdAndUpdate(
    req.params.id,
    { $push: { stories: { body, public: isPublic } } },
    { new: true }
  );
  res.json(spot);
};
