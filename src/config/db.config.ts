
// config/db.config.ts

import mongoose from 'mongoose';

export const connectDB = async () => {
  const dbUri = process.env.MONGODB_URI || 'mongodb+srv://dio:dbUser@tests.e7gmg.mongodb.net/?retryWrites=true&w=majority&appName=tests';
  try {
    await mongoose.connect(dbUri, {
     //useNewUrlParser: true,
     // useUnifiedTopology: true,
    });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
};
