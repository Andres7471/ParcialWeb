import pool from '../config/db';

const getBlackMarketTransactions = async () => {
    const res = await pool.query('SELECT * FROM black_market_transactions');
    return res.rows;
};

export default {
    getBlackMarketTransactions,
};