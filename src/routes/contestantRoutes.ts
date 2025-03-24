import express from 'express';
import contestantController from '../controllers/contestantController';

const router = express.Router();

router.get('/', contestantController.getContestants);

export default router;