import pool from '../config/db';

const getBattles = async () => {
    const res = await pool.query('SELECT * FROM battles');
    return res.rows;
};

export default {
    getBattles,
};