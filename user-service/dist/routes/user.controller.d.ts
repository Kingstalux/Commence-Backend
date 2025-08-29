import { UserService } from '../app.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("../models/user.schema").IUser, {}, {}> & import("../models/user.schema").IUser & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("../models/user.schema").IUser, {}, {}> & import("../models/user.schema").IUser & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    create(createUserDto: any): Promise<import("mongoose").Document<unknown, {}, import("../models/user.schema").IUser, {}, {}> & import("../models/user.schema").IUser & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, updateUserDto: any): Promise<import("mongoose").Document<unknown, {}, import("../models/user.schema").IUser, {}, {}> & import("../models/user.schema").IUser & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, import("../models/user.schema").IUser, {}, {}> & import("../models/user.schema").IUser & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
