
// utils/loggingMiddleware.ts

import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';  // Pastikan Anda sudah mengkonfigurasi logger dengan winston

export const loggingMiddleware = (req: Request, res: Response, next: NextFunction) => {
  logger.info(`Request: ${req.method} ${req.originalUrl}`, {
    method: req.method,
    url: req.originalUrl,
    ip: req.ip,
    body: req.body,
  });
  next();
};
