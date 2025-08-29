import { UserService } from '../app.service';
export declare class RoleController {
    private readonly userService;
    constructor(userService: UserService);
    getRoles(): Promise<(import("mongoose").Document<unknown, {}, import("../models/role.schema").IRole, {}, {}> & import("../models/role.schema").IRole & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    createRole(createRoleDto: any): Promise<import("mongoose").Document<unknown, {}, import("../models/role.schema").IRole, {}, {}> & import("../models/role.schema").IRole & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
