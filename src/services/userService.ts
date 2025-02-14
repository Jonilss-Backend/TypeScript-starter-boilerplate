
// services/userService.ts

import { User } from '../models/user';
import { logError } from '../utils/logger';

class UserService {
  async createUser(userData: { username: string; email: string; password: string }) {
    try {
      const user = new User(userData);
      await user.save();
      return user;
    } catch (error: unknown) {
      logError(error, 'UserService.createUser');
      throw error; // Rethrow to be handled by controller
    }
  }

  async getUserById(userId: string) {
    try {
      const user = await User.findOne({ userId });
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (error: unknown) {
      logError(error, 'UserService.getUserById');
      throw error; // Rethrow to be handled by controller
    }
  }

  async updateUser(userId: string, userData: Partial<{ username: string; email: string; password: string }>) {
    try {
      const user = await User.findOneAndUpdate({ userId }, userData, { new: true });
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (error: unknown) {
      logError(error, 'UserService.updateUser');
      throw error; // Rethrow to be handled by controller
    }
  }

  async deleteUser(userId: string) {
    try {
      const user = await User.findOneAndDelete({ userId });
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (error: unknown) {
      logError(error, 'UserService.deleteUser');
      throw error; // Rethrow to be handled by controller
    }
  }
}

export default new UserService();
