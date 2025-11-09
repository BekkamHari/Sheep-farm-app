
import { Router } from 'express';
import { FeedSchedule } from '../models/feedSchedule';

const router = Router();

// GET /api/feed
router.get('/', async (req, res) => {
  const list = await FeedSchedule.findAll();
  res.json(list);
});

// POST /api/feed
router.post('/', async (req, res) => {
  try {
    const f = await FeedSchedule.create(req.body);
    res.status(201).json(f);
  } catch (err:any) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
