import { Model } from 'mongoose';
import { IUserRole } from '../models/userRole.schema';
import { IRole } from '../models/role.schema';

export class RoleUtils {
  constructor(
    private userRoleModel: Model<IUserRole>,
    private roleModel: Model<IRole>,
  ) {}

  /**
   * Check if a user has a specific role
   */
  async hasRole(userId: string, roleName: string): Promise<boolean> {
    try {
      // Find the role by name
      const role = await this.roleModel.findOne({ name: roleName }).exec();
      if (!role) {
        return false;
      }

      // Check if user has this role
      const userRole = await this.userRoleModel
        .findOne({
          user_id: userId,
          role_id: role._id,
        })
        .exec();

      return !!userRole;
    } catch (error) {
      console.error('RoleUtils: Error checking user role:', error);
      return false;
    }
  }

  /**
   * Check if a user is an admin
   */
  async isAdmin(userId: string): Promise<boolean> {
    return this.hasRole(userId, 'admin');
  }

  /**
   * Get all roles for a user
   */
  async getUserRoles(userId: string): Promise<string[]> {
    try {
      const userRoles = await this.userRoleModel
        .find({ user_id: userId })
        .populate('role_id')
        .exec();

      return userRoles.map((ur) => (ur.role_id as any).name);
    } catch (error) {
      console.error('RoleUtils: Error getting user roles:', error);
      return [];
    }
  }

  /**
   * Add a role to a user
   */
  async addRoleToUser(userId: string, roleName: string): Promise<boolean> {
    try {
      const role = await this.roleModel.findOne({ name: roleName }).exec();
      if (!role) {
        throw new Error(`Role '${roleName}' not found`);
      }

      // Check if user already has this role
      const existingUserRole = await this.userRoleModel
        .findOne({
          user_id: userId,
          role_id: role._id,
        })
        .exec();

      if (existingUserRole) {
        return true; // User already has this role
      }

      // Add the role
      await this.userRoleModel.create({
        user_id: userId,
        role_id: role._id,
      });

      return true;
    } catch (error) {
      console.error('RoleUtils: Error adding role to user:', error);
      return false;
    }
  }

  /**
   * Remove a role from a user
   */
  async removeRoleFromUser(userId: string, roleName: string): Promise<boolean> {
    try {
      const role = await this.roleModel.findOne({ name: roleName }).exec();
      if (!role) {
        return true; // Role doesn't exist, consider it removed
      }

      await this.userRoleModel
        .deleteOne({
          user_id: userId,
          role_id: role._id,
        })
        .exec();

      return true;
    } catch (error) {
      console.error('RoleUtils: Error removing role from user:', error);
      return false;
    }
  }
}
