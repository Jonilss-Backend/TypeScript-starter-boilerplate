
// app.ts

import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';  
import routes from './routes';  // Pastikan routes sudah ada
import { errorHandlingMiddleware } from './middlewares/errorHandling.middleware';  // Penanganan error kustom
import { loggingMiddleware } from './middlewares/logging.middleware';  // Middleware untuk logging
import { corsMiddleware } from './middlewares/cors.middleware';  // Middleware untuk CORS
//import { authMiddleware } from './middlewares/auth.middleware';  // Middleware untuk autentikasi

/**
 * Menginisialisasi aplikasi Express.
 * @param {Application} app - Aplikasi Express yang digunakan untuk mengatur server dan middleware.
 * @returns {void}
 */
const app: Application = express();

/**
 * Menyertakan middleware untuk aplikasi Express.
 * @param {Function} corsMiddleware - Middleware untuk menangani permintaan lintas domain (CORS).
 * @param {Function} bodyParser.json - Middleware untuk parsing body request dalam format JSON.
 * @param {Function} bodyParser.urlencoded - Middleware untuk parsing body request dengan form URL encoded.
 * @param {Function} loggingMiddleware - Middleware untuk mencatat log dari request dan response.
 * @param {Function} errorHandlingMiddleware - Middleware untuk menangani error global pada aplikasi.
 */
app.use(corsMiddleware);  // CORS middleware
app.use(bodyParser.json());  // Parsing request body sebagai JSON
app.use(bodyParser.urlencoded({ extended: true }));  // Parsing form data
app.use(loggingMiddleware);  // Custom logging middleware
//app.use(authMiddleware);  // Autentikasi untuk semua rute

// Routes
/**
 * Menyertakan rute-rute yang ada di aplikasi.
 * @param {Router} routes - Rute-rute aplikasi yang dikelompokkan dan dikelola secara terpisah.
 */
app.use(routes);

// Error handling middleware
/**
 * Menangani error yang mungkin terjadi selama request-response cycle.
 * @param {Function} errorHandlingMiddleware - Middleware untuk penanganan error global aplikasi.
 */
app.use(errorHandlingMiddleware);  // Penanganan error global

export default app;
