
// services/user.service.ts

import { User, IUser } from '../models/user'; // Mengimpor IUser dari model User
import { logError } from '../utils/logger';

class UserService {
  /**
   * Creates a new user in the database.
   * @param userData The user data to be saved.
   * @returns The created user document.
   */
  async createUser(userData: { username: string; email: string; password: string }): Promise<IUser> {  // Menggunakan Promise<IUser>
    try {
      const user = new User(userData);
      await user.save();
      return user as IUser;  // Memastikan hasil dikembalikan sebagai IUser
    } catch (error: unknown) {
      logError(error, 'UserService.createUser');
      throw error; // Rethrow to be handled by controller
    }
  }

  /**
   * Retrieves a user by their MongoDB _id.
   * @param userId The MongoDB _id of the user.
   * @returns The user document.
   */
  async getUserById(userId: string): Promise<IUser | null> {  // Menggunakan Promise<IUser | null> untuk mencakup kemungkinan user tidak ditemukan
    try {
      const user = await User.findById(userId);  // Menggunakan _id untuk pencarian
      if (!user) {
        throw new Error('User not found');
      }
      return user as IUser;  // Memastikan hasil dikembalikan sebagai IUser
    } catch (error: unknown) {
      logError(error, 'UserService.getUserById');
      throw error; // Rethrow to be handled by controller
    }
  }

  /**
   * Updates a user's data.
   * @param userId The MongoDB _id of the user.
   * @param userData The new data to update.
   * @returns The updated user document.
   */
  async updateUser(userId: string, userData: Partial<{ username: string; email: string; password: string }>): Promise<IUser | null> {  // Menambahkan Promise<IUser | null> untuk hasil
    try {
      const user = await User.findByIdAndUpdate(userId, userData, { new: true });
      if (!user) {
        throw new Error('User not found');
      }
      return user as IUser;  // Memastikan hasil dikembalikan sebagai IUser
    } catch (error: unknown) {
      logError(error, 'UserService.updateUser');
      throw error; // Rethrow to be handled by controller
    }
  }

  /**
   * Deletes a user by their MongoDB _id.
   * @param userId The MongoDB _id of the user.
   * @returns The deleted user document.
   */
  async deleteUser(userId: string): Promise<IUser | null> {  // Menambahkan Promise<IUser | null> untuk hasil
    try {
      const user = await User.findByIdAndDelete(userId);  // Menggunakan _id untuk penghapusan
      if (!user) {
        throw new Error('User not found');
      }
      return user as IUser;  // Memastikan hasil dikembalikan sebagai IUser
    } catch (error: unknown) {
      logError(error, 'UserService.deleteUser');
      throw error; // Rethrow to be handled by controller
    }
  }
}

export default new UserService();
