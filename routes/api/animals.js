import { Router } from 'express';
import { auth } from '../../config/passport';

const router = Router();

router.post('/', auth, (req, res) => {
  res.send('hello');
});

export default router;
