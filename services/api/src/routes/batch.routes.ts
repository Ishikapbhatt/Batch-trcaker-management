import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ success: true, message: 'Get all batches' });
});

router.post('/', (req, res) => {
  res.json({ success: true, message: 'Create batch' });
});

router.get('/:id', (req, res) => {
  res.json({ success: true, message: 'Get batch by ID' });
});

router.put('/:id', (req, res) => {
  res.json({ success: true, message: 'Update batch' });
});

router.delete('/:id', (req, res) => {
  res.json({ success: true, message: 'Delete batch' });
});

export { router as batchRoutes };
