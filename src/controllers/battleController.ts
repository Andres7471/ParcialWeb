import { Request, Response } from 'express';
import battleModel from '../models/battle';

const getBattles = async (req: Request, res: Response) => {
    try {
        const battles = await battleModel.getBattles();
        res.json(battles);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las batallas' });
    }
};

export default {
    getBattles,
};