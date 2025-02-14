
// middlewares/errorHandlingMiddleware.ts

import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';

/**
 * Middleware untuk menangani error yang terjadi selama proses request-response.
 * Middleware ini mencatat error ke logger dan mengirimkan respons dengan status 500.
 * @param {unknown} err - Error yang terjadi dalam aplikasi, bisa berupa objek atau error lain.
 * @param {Request} req - Objek request yang berisi informasi permintaan HTTP.
 * @param {Response} res - Objek response yang digunakan untuk mengirimkan respons HTTP.
 * @param {NextFunction} next - Fungsi callback untuk melanjutkan ke middleware berikutnya (tidak digunakan dalam middleware ini).
 * @returns {void}
 */
export const errorHandlingMiddleware = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (err instanceof Error) {
    // Mencatat error dan stack trace menggunakan logger
    logger.error(`Error: ${err.message}`, { stack: err.stack });

    // Mengirimkan respons error dengan status 500 dan pesan error
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
  } else {
    // Menangani error yang tidak diketahui
    logger.error('Unknown error');
    res.status(500).json({ message: 'Unknown error occurred' });
  }
};
