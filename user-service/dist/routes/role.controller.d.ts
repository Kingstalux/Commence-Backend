import { UserService } from '../app.service';
export declare class RoleController {
    private readonly userService;
    constructor(userService: UserService);
    getRoles(): Promise<(import("mongoose").Document<unknown, {}, import("../models/user.schema").UserDocument, {}, {}> & import("../models/user.schema").User & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    createRole(createRoleDto: any): Promise<import("mongoose").Document<unknown, {}, import("../models/user.schema").UserDocument, {}, {}> & import("../models/user.schema").User & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
