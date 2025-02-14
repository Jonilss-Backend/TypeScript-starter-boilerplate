
// routes/index.ts

import { Router } from 'express';
import userRoutes from './userRoutes';

const router = Router();

/**
 * Menyusun rute utama dan merujuk ke rute-rute terkait user.
 * @route /api
 * @param {Object} req - Request object yang berisi parameter untuk akses API.
 * @param {Object} res - Response object yang digunakan untuk mengirimkan respons ke client.
 * @returns {Object} Menyediakan akses ke rute-rute yang telah didefinisikan pada `userRoutes`.
 */
router.use('/api', userRoutes);

export default router;
