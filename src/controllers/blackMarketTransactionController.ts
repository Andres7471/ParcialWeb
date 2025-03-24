import { Request, Response } from 'express';
import blackMarketTransactionModel from '../models/blackMarketTransaction';

const getBlackMarketTransactions = async (req: Request, res: Response) => {
    try {
        const transactions = await blackMarketTransactionModel.getBlackMarketTransactions();
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las transacciones del mercado negro' });
    }
};

export default {
    getBlackMarketTransactions,
};