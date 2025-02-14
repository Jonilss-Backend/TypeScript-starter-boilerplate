
// routes/swagger.route.ts

import express, { Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../swaggers/index';

const router = express.Router();

/**
 * Endpoint untuk menampilkan dokumentasi API menggunakan Swagger UI.
 * @param req Request objek dari client yang berisi informasi tentang permintaan.
 * @param res Response objek untuk mengirimkan respon kembali ke client.
 * @returns void Tidak ada nilai yang dikembalikan, karena respon akan dikirim oleh Swagger UI.
 */
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default router;
