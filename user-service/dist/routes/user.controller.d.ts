import { UserService } from '../app.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("../models/user.schema").UserDocument, {}, {}> & import("../models/user.schema").User & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(data: any): Promise<import("mongoose").Document<unknown, {}, import("../models/user.schema").UserDocument, {}, {}> & import("../models/user.schema").User & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    create(createUserDto: any): Promise<import("mongoose").Document<unknown, {}, import("../models/user.schema").UserDocument, {}, {}> & import("../models/user.schema").User & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(data: any): Promise<import("mongoose").Document<unknown, {}, import("../models/user.schema").UserDocument, {}, {}> & import("../models/user.schema").User & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(data: any): Promise<import("mongoose").Document<unknown, {}, import("../models/user.schema").UserDocument, {}, {}> & import("../models/user.schema").User & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
