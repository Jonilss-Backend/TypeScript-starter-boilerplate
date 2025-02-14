
// index.ts

import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './app'; // Mengimport aplikasi dari app.ts
import { connectDB } from './config/databaseConfig'; // Fungsi untuk menghubungkan ke database

dotenv.config(); // Memuat variabel environment dari file .env

const PORT = process.env.PORT || 3000;

// Menghubungkan ke database
connectDB().then(() => {
  // Menjalankan server setelah koneksi ke database berhasil
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to connect to the database', err);
  process.exit(1); // Keluar jika gagal koneksi ke database
});
