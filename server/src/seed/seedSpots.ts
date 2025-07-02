import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Spot from '../models/Spot';

dotenv.config();

const data = [
  {
    name: 'Sun Temple Back Gardens',
    description: 'Quiet lawns behind Sun Temple, perfect sunset reflection spot.',
    category: 'Serene',
    location: { type: 'Point', coordinates: [78.2042, 26.2073] },
    images: []
  },
  {
    name: 'Gopachal Jain Caves Viewpoint',
    description: 'Hidden cliff ledge with massive Jain carvings and city view.',
    category: 'Creative',
    location: { type: 'Point', coordinates: [78.1616, 26.2261] },
    images: []
  },
  {
    name: 'Tansen Memorial Courtyard',
    description: 'Historic musician’s resting place; evening tanpura practice by locals.',
    category: 'Romantic',
    location: { type: 'Point', coordinates: [78.1689, 26.2192] },
    images: []
  },
  {
    name: 'Tigra Lake East Embankment',
    description: 'Off-trail rocky embankment away from crowds, stellar dawn view.',
    category: 'Serene',
    location: { type: 'Point', coordinates: [78.2133, 26.2478] },
    images: []
  }
];

(async () => {
  await mongoose.connect(process.env.MONGODB_URI as string);
  await Spot.deleteMany();
  await Spot.insertMany(data);
  console.log('Seeded!');
  process.exit(0);
})();
