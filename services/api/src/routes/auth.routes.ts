import { Router } from 'express';

const router = Router();

router.post('/login', (req, res) => {
  res.json({ success: true, message: 'Login endpoint' });
});

router.post('/register', (req, res) => {
  res.json({ success: true, message: 'Register endpoint' });
});

router.post('/refresh', (req, res) => {
  res.json({ success: true, message: 'Refresh token endpoint' });
});

export { router as authRoutes };
