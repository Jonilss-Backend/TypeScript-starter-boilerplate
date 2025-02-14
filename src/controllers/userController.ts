
// controllers/userController.ts

import { Request, Response } from 'express';
import userService from '../services/userService';
import { logError } from '../utils/logger';

class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error: unknown) {
      logError(error, 'UserController.createUser');
      res.status(500).json({ message: 'Failed to create user' });
    }
  }

  async getUser(req: Request, res: Response) {
    try {
      const user = await userService.getUserById(req.params.userId);
      res.status(200).json(user);
    } catch (error: unknown) {
      logError(error, 'UserController.getUser');
      res.status(500).json({ message: 'Failed to fetch user' });
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const updatedUser = await userService.updateUser(req.params.userId, req.body);
      res.status(200).json(updatedUser);
    } catch (error: unknown) {
      logError(error, 'UserController.updateUser');
      res.status(500).json({ message: 'Failed to update user' });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const deletedUser = await userService.deleteUser(req.params.userId);
      res.status(200).json(deletedUser);
    } catch (error: unknown) {
      logError(error, 'UserController.deleteUser');
      res.status(500).json({ message: 'Failed to delete user' });
    }
  }
}

export default new UserController();
