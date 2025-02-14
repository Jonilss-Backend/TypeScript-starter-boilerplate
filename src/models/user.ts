
// models/user.ts

import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema: Schema = new Schema(
  {
    username: { 
      type: String, 
      required: true, 
      unique: true, 
      trim: true 
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: (value: string) => /\S+@\S+\.\S+/.test(value),
        message: 'Please provide a valid email'
      },
    },
    password: { 
      type: String, 
      required: true, 
      minlength: 8 
    },
    isVerified: { 
      type: Boolean, 
      default: false 
    },
  },
  { 
    timestamps: true // Menambahkan createdAt dan updatedAt secara otomatis
  }
);

// Indexing untuk memastikan `email`, dan `username` unik
userSchema.index({ email: 1, username: 1 }, { unique: true });

// Menambahkan method untuk menghapus data sensitif (misalnya password)
userSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password; // Menghapus password dari output JSON
  return user;
};

export const User = mongoose.model<IUser>('User', userSchema);
