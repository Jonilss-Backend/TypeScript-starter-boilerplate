
// services/__tests__/userService.test.ts

import userService from '../userService';
import { User, IUser } from '../../models/user'; // Mengimpor interface IUser dari model
import mongoose from 'mongoose';

describe('User Service', () => {
  let userId: string;

  // Tes createUser
  it('should create a new user', async () => {
    const userData = {
      username: 'testuser',
      email: 'testuser@example.com',
      password: 'password123',
    };

    const user: IUser = await userService.createUser(userData); // Menambahkan tipe IUser
    expect(user).toHaveProperty('_id');
    expect(user.username).toBe(userData.username);
    expect(user.email).toBe(userData.email);
    expect(user.password).not.toBe(userData.password); // password harus ter-enkripsi
  });

  // Tes getUserById
  it('should retrieve a user by ID', async () => {
    const userData = {
      username: 'retrieveuser',
      email: 'retrieveuser@example.com',
      password: 'password123',
    };
    const user: IUser = await userService.createUser(userData); // Menambahkan tipe IUser
    userId = user._id.toString(); // Menggunakan toString() untuk memastikan menjadi string

    const retrievedUser = await userService.getUserById(userId);
    expect(retrievedUser).toHaveProperty('_id', userId);
    expect(retrievedUser.username).toBe(userData.username);
  });

  // Tes updateUser
  it('should update user data', async () => {
    const updatedData = {
      username: 'updateduser',
      email: 'updateduser@example.com',
    };

    const updatedUser: IUser = await userService.updateUser(userId, updatedData); // Menambahkan tipe IUser
    expect(updatedUser).toHaveProperty('_id', userId);
    expect(updatedUser.username).toBe(updatedData.username);
    expect(updatedUser.email).toBe(updatedData.email);
  });

  // Tes deleteUser
  it('should delete a user by ID', async () => {
    const deletedUser: IUser = await userService.deleteUser(userId); // Menambahkan tipe IUser
    expect(deletedUser).toHaveProperty('_id', userId);

    const findUser = await User.findById(userId);
    expect(findUser).toBeNull();
  });
});
