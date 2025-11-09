
import dotenv from 'dotenv';
dotenv.config();
export default {
  port: Number(process.env.PORT || 4000),
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT || 5432),
    database: process.env.DB_NAME || 'sheepfarm',
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'postgres',
    dialect: 'postgres'
  },
  jwtSecret: process.env.JWT_SECRET || 'supersecret'
};
