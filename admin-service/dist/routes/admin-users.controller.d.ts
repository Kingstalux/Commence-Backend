import { AdminUserService } from '../app.service';
export declare class AdminUsersController {
    private readonly adminUserService;
    constructor(adminUserService: AdminUserService);
    getUsers(): Promise<any[]>;
    updateUserRole(data: any): Promise<{
        userId: string;
        role: string;
        updated: boolean;
    }>;
    deleteUser(data: any): Promise<{
        userId: string;
        deleted: boolean;
    }>;
    getUserOrders(data: any): Promise<{
        id: string;
        userId: string;
        amount: number;
        status: string;
    }[]>;
}
