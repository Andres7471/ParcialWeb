import { Request, Response } from 'express';
import dictatorModel from '../models/dictator';

const getDictators = async (req: Request, res: Response) => {
    try {
        const dictators = await dictatorModel.getDictators();
        res.json(dictators);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los dictadores' });
    }
};

export default {
    getDictators,
};