
// middlewares/corsMiddleware.ts

import { Request, Response, NextFunction } from 'express';

/**
 * Middleware untuk menangani CORS (Cross-Origin Resource Sharing).
 * Menyediakan pengaturan header untuk memungkinkan permintaan dari domain yang berbeda.
 * @param {Request} req - Objek request yang berisi informasi tentang permintaan HTTP.
 * @param {Response} res - Objek response yang digunakan untuk mengirimkan respons HTTP.
 * @param {NextFunction} next - Fungsi callback untuk melanjutkan ke middleware berikutnya.
 * @returns {void}
 */
export const corsMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  // Menyeting header untuk mengizinkan akses dari semua domain
  res.setHeader('Access-Control-Allow-Origin', '*');  // Bisa disesuaikan dengan domain yang diizinkan
  
  // Menyeting header untuk metode HTTP yang diizinkan
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
  
  // Menyeting header untuk headers yang diizinkan dalam permintaan
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Melanjutkan ke middleware berikutnya
  next();
};
