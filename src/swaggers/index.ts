
// swaggers/index.ts

import swaggerJsDoc from 'swagger-jsdoc';

/**
 * Opsi konfigurasi untuk Swagger.
 * @param swaggerOptions Opsi yang digunakan untuk mendefinisikan Swagger API.
 * @returns swaggerSpec Swagger specification yang sudah di-generate.
 */
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Dokumentasi API untuk aplikasi Anda',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
  },
  apis: ['./src/swaggers/docs/*.swagger.ts'],
};

/**
 * Menghasilkan spesifikasi Swagger berdasarkan opsi yang diberikan.
 * @param swaggerOptions Opsi konfigurasi Swagger yang digunakan untuk menghasilkan spesifikasi.
 * @returns swaggerSpec Objek yang berisi spesifikasi Swagger.
 */
const swaggerSpec = swaggerJsDoc(swaggerOptions);

export default swaggerSpec;
