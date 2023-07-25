// app/db/db.js
import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  password: '123456',
  host: 'localhost',
  port: 5432,
  database: 'testing',
});

export default pool;
