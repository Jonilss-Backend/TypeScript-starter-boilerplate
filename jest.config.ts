
// jest.config.ts

import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  preset: 'ts-jest',  // Gunakan ts-jest untuk pengujian TypeScript
  testEnvironment: 'node',  // Set test environment ke Node.js
  collectCoverage: true,  // Mengumpulkan data cakupan kode
  coverageDirectory: 'coverage',  // Tempat laporan cakupan kode disimpan
  transform: {
    '^.+\\.tsx?$': 'ts-jest',  // Menangani file .ts dan .tsx dengan ts-jest
  },
  setupFilesAfterEnv: ['./jest.setup.ts'],  // Mengatur file setup setelah Jest diinisialisasi
  testTimeout: 10000,  // Timeout untuk pengujian jika koneksi database memerlukan waktu lebih lama
};

export default config;
