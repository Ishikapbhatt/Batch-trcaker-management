import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ success: true, message: 'Get all courses' });
});

router.post('/', (req, res) => {
  res.json({ success: true, message: 'Create course' });
});

router.get('/:id', (req, res) => {
  res.json({ success: true, message: 'Get course by ID' });
});

router.put('/:id', (req, res) => {
  res.json({ success: true, message: 'Update course' });
});

router.delete('/:id', (req, res) => {
  res.json({ success: true, message: 'Delete course' });
});

export { router as courseRoutes };
