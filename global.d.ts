
// global.d.ts

declare global {
  var __MONGO_SERVER__: any; // Tipe 'any' untuk mengatasi kesalahan terkait global.__MONGO_SERVER__
}

export {};
