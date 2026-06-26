import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ success: true, message: 'Get all institutes' });
});

router.post('/', (req, res) => {
  res.json({ success: true, message: 'Create institute' });
});

router.get('/:id', (req, res) => {
  res.json({ success: true, message: 'Get institute by ID' });
});

router.put('/:id', (req, res) => {
  res.json({ success: true, message: 'Update institute' });
});

router.delete('/:id', (req, res) => {
  res.json({ success: true, message: 'Delete institute' });
});

export { router as instituteRoutes };
