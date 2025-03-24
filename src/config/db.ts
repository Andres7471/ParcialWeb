import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'lucha_muere',
    password: 'lukecage1244',
    port: 5432,
});

export default pool;