
// index.ts

import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './app'; // Mengimport aplikasi dari app.ts
import { connectDB } from './config/db.config'; // Fungsi untuk menghubungkan ke database

dotenv.config(); // Memuat variabel environment dari file .env

const PORT = process.env.PORT || 3000;

/**
 * Menghubungkan aplikasi ke database dan menjalankan server.
 * @async
 * @function connectAndStartServer
 * @param {string} PORT - Port tempat server akan dijalankan (default: 3000).
 * @returns {void}
 */
connectDB().then(() => {
  /**
   * Menjalankan server Express setelah koneksi ke database berhasil.
   * @param {number} PORT - Port tempat server dijalankan.
   * @returns {void}
   */
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  /**
   * Menangani kegagalan koneksi ke database dan menutup aplikasi jika gagal.
   * @param {Error} err - Error yang terjadi saat koneksi gagal.
   * @returns {void}
   */
  console.error('Failed to connect to the database', err);
  process.exit(1); // Keluar jika gagal koneksi ke database
});
