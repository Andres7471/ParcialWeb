import { Request, Response } from 'express';
import contestantModel from '../models/contestant';

const getContestants = async (req: Request, res: Response) => {
    try {
        const contestants = await contestantModel.getContestants();
        res.json(contestants);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los concursantes' });
    }
};

export default {
    getContestants,
};