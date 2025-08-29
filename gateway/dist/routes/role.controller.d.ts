import { ClientProxy } from '@nestjs/microservices';
export declare class RoleController {
    private readonly client;
    constructor(client: ClientProxy);
    getRoles(): import("rxjs").Observable<any>;
    createRole(createRoleDto: any): import("rxjs").Observable<any>;
}
