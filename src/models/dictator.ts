import pool from '../config/db';

const getDictators = async () => {
    const res = await pool.query('SELECT * FROM dictators');
    return res.rows;
};

export default {
    getDictators,
};