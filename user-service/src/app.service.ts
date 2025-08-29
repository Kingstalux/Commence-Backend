
import { Injectable } from '@nestjs/common';
import User from './models/user.schema';
import Role from './models/role.schema';
import UserRole from './models/userRole.schema';
import Session from './models/session.schema';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class UserService {
  async findAllUsers() {
    return User.find();
  }
  async findUserById(id: string) {
    return User.findById(id);
  }
  async createUser(data: any) {
    return User.create(data);
  }
  async updateUser(id: string, data: any) {
    return User.findByIdAndUpdate(id, data, { new: true });
  }
  async deleteUser(id: string) {
    return User.findByIdAndDelete(id);
  }
  async findUserRoles(userId: string) {
    return UserRole.find({ user_id: userId }).populate('role_id');
  }
  async findSessions(userId: string) {
    return Session.find({ user_id: userId });
  }

  // Auth methods
  async signup(signupDto: any) {
    // Basic signup logic, should hash password in production
    return User.create(signupDto);
  }
  async login(loginDto: any) {
    // Basic login logic, should verify password in production
    return User.findOne({ email: loginDto.email, password: loginDto.password });
  }

  // Profile methods
  async getProfile(id: string) {
    return User.findById(id);
  }
  async updateProfile(id: string, updateProfileDto: any) {
    return User.findByIdAndUpdate(id, updateProfileDto, { new: true });
  }

  // Role methods
  async getRoles() {
    return Role.find();
  }
  async createRole(createRoleDto: any) {
    return Role.create(createRoleDto);
  }
}
