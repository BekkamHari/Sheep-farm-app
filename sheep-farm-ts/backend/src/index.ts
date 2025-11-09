
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from './config';
import { sequelize } from './models';
import authRoutes from './routes/auth';
import animalsRoutes from './routes/animals';
import healthRoutes from './routes/health';
import feedRoutes from './routes/feed';
import { authMiddleware } from './middleware/auth';
import { startFeedScheduler } from './services/feedScheduler';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/animals', authMiddleware, animalsRoutes);
app.use('/api/health', authMiddleware, healthRoutes);
app.use('/api/feed', authMiddleware, feedRoutes);

app.get('/', (req, res) => res.json({ ok: true, service: 'sheep-farm-backend-ts' }));

async function start(){
  await sequelize.sync();
  // Start feed scheduler after DB ready
  startFeedScheduler();
  app.listen(config.port, () => {
    console.log(`Backend listening on port ${config.port}`);
  });
}

start().catch(err => {
  console.error('Failed to start', err);
  process.exit(1);
});
