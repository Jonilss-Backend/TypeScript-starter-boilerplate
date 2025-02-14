
// app.ts

import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';  // Pastikan routes sudah ada
import { errorHandlingMiddleware } from './middlewares/errorHandlingMiddleware';  // Penanganan error kustom
import { loggingMiddleware } from './middlewares/loggingMiddleware';  // Middleware untuk logging
import { corsMiddleware } from './middlewares/corsMiddleware';  // Middleware untuk CORS
//import { authMiddleware } from './middlewares/authMiddleware';  // Middleware untuk autentikasi

const app: Application = express();

// Middleware
app.use(corsMiddleware);  // CORS middleware
app.use(bodyParser.json());  // Parsing request body sebagai JSON
app.use(bodyParser.urlencoded({ extended: true }));  // Parsing form data
app.use(loggingMiddleware);  // Custom logging middleware
//app.use(authMiddleware);  // Autentikasi untuk semua rute

// Routes
app.use(routes);

// Error handling middleware
app.use(errorHandlingMiddleware);  // Penanganan error global

export default app;
