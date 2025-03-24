import express from 'express';
import sponsorController from '../controllers/sponsorController';

const router = express.Router();

router.get('/', sponsorController.getSponsors);

export default router;