
// routes/userRoutes.ts

import { Router } from 'express';
import userController from '../controllers/userController';

const router = Router();

router.post('/users', userController.createUser);
router.get('/users/:userId', userController.getUser);
router.put('/users/:userId', userController.updateUser);
router.delete('/users/:userId', userController.deleteUser);

export default router;
