import { Router } from 'express';
import {
  getNearby,
  getOne,
  createSpot,
  rateSpot,
  commentSpot
} from '../controllers/spotController';

const router = Router();

router.get('/', getNearby);
router.get('/:id', getOne);
router.post('/', createSpot);
router.post('/:id/rate', rateSpot);
router.post('/:id/comment', commentSpot);

export default router;
