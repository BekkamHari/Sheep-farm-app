
import { Router } from 'express';
import { HealthRecord } from '../models/healthRecord';

const router = Router();

// GET /api/health/animal/:animalId
router.get('/animal/:animalId', async (req, res) => {
  const records = await HealthRecord.findAll({ where: { animalId: req.params.animalId } });
  res.json(records);
});

// POST /api/health
router.post('/', async (req, res) => {
  try {
    const r = await HealthRecord.create(req.body);
    res.status(201).json(r);
  } catch (err:any) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
