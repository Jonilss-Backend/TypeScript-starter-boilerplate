
// utils/logger.ts

import winston from 'winston';

// Membuat logger menggunakan Winston dengan dua transportasi (Console dan File)
const logger = winston.createLogger({
  level: 'info', // Level default adalah 'info'
  transports: [
    // Transportasi untuk mencetak log ke console
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(), // Menambahkan warna pada log
        winston.format.simple() // Format sederhana untuk log
      ),
    }),
    // Transportasi untuk menulis log error ke file
    new winston.transports.File({
      filename: 'logs/app.log', // Lokasi file log
      level: 'error', // Hanya mencatat log dengan level error
      format: winston.format.combine(
        winston.format.timestamp(), // Menambahkan timestamp pada setiap log
        winston.format.json() // Format log dalam bentuk JSON
      ),
    }),
  ],
});

/**
 * Mencatat error dengan format yang konsisten.
 * @param {unknown} error - Objek error yang akan dicatat.
 * @param {string} context - Konteks atau deskripsi tempat terjadinya error.
 * @returns {void}
 */
function logError(error: unknown, context: string): void {
  if (error instanceof Error) {
    // Jika error merupakan instance dari Error, log pesan error dan stack trace
    logger.error(`[${context}] ${error.message}`, {
      stack: error.stack, // Menyertakan stack trace untuk debugging
      name: error.name,   // Menyertakan nama error
    });
  } else {
    // Jika error bukan instance dari Error, log sebagai unknown error
    logger.error(`[${context}] Unknown error: ${String(error)}`);
  }
}

export { logger, logError };
