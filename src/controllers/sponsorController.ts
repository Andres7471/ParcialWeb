import { Request, Response } from 'express';
import sponsorModel from '../models/sponsor';

const getSponsors = async (req: Request, res: Response) => {
    try {
        const sponsors = await sponsorModel.getSponsors();
        res.json(sponsors);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los patrocinadores' });
    }
};

export default {
    getSponsors,
};