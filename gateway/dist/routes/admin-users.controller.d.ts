import { ClientProxy } from '@nestjs/microservices';
export declare class AdminUsersController {
    private readonly client;
    constructor(client: ClientProxy);
    getUsers(): import("rxjs").Observable<any>;
    updateUserRole(id: string, data: any): import("rxjs").Observable<any>;
    deleteUser(id: string): import("rxjs").Observable<any>;
    getUserOrders(id: string): import("rxjs").Observable<any>;
}
