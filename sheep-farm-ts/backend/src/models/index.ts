
import { Sequelize } from 'sequelize-typescript';
import config from '../config';
import { Animal } from './animal';
import { HealthRecord } from './healthRecord';
import { User } from './user';
import { Role } from './role';
import { FeedSchedule } from './feedSchedule';

export const sequelize = new Sequelize({
  database: config.db.database,
  dialect: 'postgres',
  username: config.db.username,
  password: config.db.password,
  host: config.db.host,
  port: config.db.port,
  models: [Animal, HealthRecord, User, Role, FeedSchedule],
  logging: false
});

export { Animal, HealthRecord, User, Role, FeedSchedule };
