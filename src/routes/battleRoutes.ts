import express from 'express';
import battleController from '../controllers/battleController';

const router = express.Router();

router.get('/', battleController.getBattles);

export default router;