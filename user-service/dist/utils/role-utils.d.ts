import { Model } from 'mongoose';
import { IUserRole } from '../models/userRole.schema';
import { IRole } from '../models/role.schema';
export declare class RoleUtils {
    private userRoleModel;
    private roleModel;
    constructor(userRoleModel: Model<IUserRole>, roleModel: Model<IRole>);
    hasRole(userId: string, roleName: string): Promise<boolean>;
    isAdmin(userId: string): Promise<boolean>;
    getUserRoles(userId: string): Promise<string[]>;
    addRoleToUser(userId: string, roleName: string): Promise<boolean>;
    removeRoleFromUser(userId: string, roleName: string): Promise<boolean>;
}
