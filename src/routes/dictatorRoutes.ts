import express from 'express';
import dictatorController from '../controllers/dictatorController';

const router = express.Router();

router.get('/', dictatorController.getDictators);

export default router;