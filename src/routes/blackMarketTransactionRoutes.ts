import express from 'express';
import blackMarketTransactionController from '../controllers/blackMarketTransactionController';

const router = express.Router();

router.get('/', blackMarketTransactionController.getBlackMarketTransactions);

export default router;