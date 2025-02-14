
// utils/logging.middleware.ts

import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';  // Pastikan Anda sudah mengkonfigurasi logger dengan winston

/**
 * Middleware untuk mencatat informasi request yang diterima oleh server.
 * Mencatat metode HTTP, URL, IP pengguna, dan body request menggunakan logger.
 * @param {Request} req - Objek request yang berisi informasi tentang permintaan HTTP, seperti metode dan URL.
 * @param {Response} res - Objek response yang digunakan untuk mengirimkan respons HTTP.
 * @param {NextFunction} next - Fungsi callback untuk melanjutkan ke middleware berikutnya setelah pencatatan.
 * @returns {void}
 */
export const loggingMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  // Mencatat informasi tentang request yang diterima
  logger.info(`Request: ${req.method} ${req.originalUrl}`, {
    method: req.method,  // Metode HTTP (GET, POST, PUT, dll.)
    url: req.originalUrl, // URL yang diminta
    ip: req.ip,  // IP pengguna yang mengirimkan permintaan
    body: req.body,  // Body request (jika ada)
  });

  // Melanjutkan ke middleware berikutnya
  next();
};
