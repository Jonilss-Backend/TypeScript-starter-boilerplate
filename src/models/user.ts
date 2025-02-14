
// models/user.ts

import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  userId: string;
  username: string;
  email: string;
  password: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema: Schema = new Schema(
  {
    userId: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true, trim: true },
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
    password: { type: String, required: true, minlength: 8 },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Indexing
userSchema.index({ email: 1, username: 1 }, { unique: true });

// Remove sensitive data from JSON output
userSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

export const User = mongoose.model<IUser>('User', userSchema);
