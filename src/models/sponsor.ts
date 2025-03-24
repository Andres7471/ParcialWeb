import pool from '../config/db';

const getSponsors = async () => {
    const res = await pool.query('SELECT * FROM sponsors');
    return res.rows;
};

export default {
    getSponsors,
};