
import { Router } from 'express';
import { Animal } from '../models/animal';

const router = Router();

// GET /api/animals
router.get('/', async (req, res) => {
  const list = await Animal.findAll();
  res.json(list);
});

// POST /api/animals
router.post('/', async (req, res) => {
  try {
    const a = await Animal.create(req.body);
    res.status(201).json(a);
  } catch (err:any) {
    res.status(400).json({ error: err.message });
  }
});

// GET /api/animals/:id
router.get('/:id', async (req, res) => {
  const a = await Animal.findByPk(req.params.id);
  if(!a) return res.status(404).json({ error: 'Not found' });
  res.json(a);
});

export default router;
