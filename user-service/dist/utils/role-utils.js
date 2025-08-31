"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleUtils = void 0;
class RoleUtils {
    constructor(userRoleModel, roleModel) {
        this.userRoleModel = userRoleModel;
        this.roleModel = roleModel;
    }
    async hasRole(userId, roleName) {
        try {
            const role = await this.roleModel.findOne({ name: roleName }).exec();
            if (!role) {
                return false;
            }
            const userRole = await this.userRoleModel
                .findOne({
                user_id: userId,
                role_id: role._id,
            })
                .exec();
            return !!userRole;
        }
        catch (error) {
            console.error('RoleUtils: Error checking user role:', error);
            return false;
        }
    }
    async isAdmin(userId) {
        return this.hasRole(userId, 'admin');
    }
    async getUserRoles(userId) {
        try {
            const userRoles = await this.userRoleModel
                .find({ user_id: userId })
                .populate('role_id')
                .exec();
            return userRoles.map((ur) => ur.role_id.name);
        }
        catch (error) {
            console.error('RoleUtils: Error getting user roles:', error);
            return [];
        }
    }
    async addRoleToUser(userId, roleName) {
        try {
            const role = await this.roleModel.findOne({ name: roleName }).exec();
            if (!role) {
                throw new Error(`Role '${roleName}' not found`);
            }
            const existingUserRole = await this.userRoleModel
                .findOne({
                user_id: userId,
                role_id: role._id,
            })
                .exec();
            if (existingUserRole) {
                return true;
            }
            await this.userRoleModel.create({
                user_id: userId,
                role_id: role._id,
            });
            return true;
        }
        catch (error) {
            console.error('RoleUtils: Error adding role to user:', error);
            return false;
        }
    }
    async removeRoleFromUser(userId, roleName) {
        try {
            const role = await this.roleModel.findOne({ name: roleName }).exec();
            if (!role) {
                return true;
            }
            await this.userRoleModel
                .deleteOne({
                user_id: userId,
                role_id: role._id,
            })
                .exec();
            return true;
        }
        catch (error) {
            console.error('RoleUtils: Error removing role from user:', error);
            return false;
        }
    }
}
exports.RoleUtils = RoleUtils;
//# sourceMappingURL=role-utils.js.map