import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ success: true, message: 'Get all users' });
});

router.post('/', (req, res) => {
  res.json({ success: true, message: 'Create user' });
});

router.get('/:id', (req, res) => {
  res.json({ success: true, message: 'Get user by ID' });
});

router.put('/:id', (req, res) => {
  res.json({ success: true, message: 'Update user' });
});

router.delete('/:id', (req, res) => {
  res.json({ success: true, message: 'Delete user' });
});

export { router as userRoutes };
