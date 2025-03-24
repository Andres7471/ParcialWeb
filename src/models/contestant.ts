import pool from '../config/db';

const getContestants = async () => {
    const res = await pool.query('SELECT * FROM contestants');
    return res.rows;
};

export default {
    getContestants,
};