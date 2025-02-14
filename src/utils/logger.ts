
// utils/logger.ts

import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
    new winston.transports.File({
      filename: 'logs/app.log',
      level: 'error',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
    }),
  ],
});

/**
 * Log an error with a consistent format.
 * @param error The error object to log.
 * @param context An optional context to describe where the error occurred.
 */
function logError(error: unknown, context: string) {
  if (error instanceof Error) {
    logger.error(`[${context}] ${error.message}`, {
      stack: error.stack,
      name: error.name,
    });
  } else {
    logger.error(`[${context}] Unknown error: ${String(error)}`);
  }
}

export { logger, logError };
