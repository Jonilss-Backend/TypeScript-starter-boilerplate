
// routes/user.routes.ts

import { Router } from 'express';
import userController from '../controllers/user.controller';

const router = Router();

/**
 * Route untuk membuat user baru.
 * @route POST /users
 * @param {Object} req - Request object yang berisi data untuk membuat user baru.
 * @param {Object} res - Response object untuk mengirimkan respons ke client.
 * @returns {Object} User yang telah dibuat atau pesan kesalahan jika gagal.
 */
router.post('/users', userController.createUser);

/**
 * Route untuk mendapatkan informasi user berdasarkan userId.
 * @route GET /users/:userId
 * @param {string} userId - ID user yang digunakan untuk mencari user dalam database.
 * @param {Object} req - Request object yang berisi parameter URL userId.
 * @param {Object} res - Response object untuk mengirimkan respons ke client.
 * @returns {Object} User yang ditemukan atau pesan kesalahan jika user tidak ditemukan.
 */
router.get('/users/:userId', userController.getUser);

/**
 * Route untuk memperbarui informasi user berdasarkan userId.
 * @route PUT /users/:userId
 * @param {string} userId - ID user yang digunakan untuk memperbarui data user.
 * @param {Object} req - Request object yang berisi data untuk memperbarui user.
 * @param {Object} res - Response object untuk mengirimkan respons ke client.
 * @returns {Object} User yang telah diperbarui atau pesan kesalahan jika gagal.
 */
router.put('/users/:userId', userController.updateUser);

/**
 * Route untuk menghapus user berdasarkan userId.
 * @route DELETE /users/:userId
 * @param {string} userId - ID user yang digunakan untuk menghapus user dari database.
 * @param {Object} req - Request object yang berisi parameter URL userId.
 * @param {Object} res - Response object untuk mengirimkan respons ke client.
 * @returns {Object} User yang telah dihapus atau pesan kesalahan jika gagal.
 */
router.delete('/users/:userId', userController.deleteUser);

export default router;
