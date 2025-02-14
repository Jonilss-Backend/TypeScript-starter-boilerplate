
// middlewares/errorHandlingMiddleware.ts

import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';

export const errorHandlingMiddleware = (err: unknown, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    logger.error(`Error: ${err.message}`, { stack: err.stack });
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
  } else {
    logger.error('Unknown error');
    res.status(500).json({ message: 'Unknown error occurred' });
  }
};
