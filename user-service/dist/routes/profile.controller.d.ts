import { UserService } from '../app.service';
export declare class ProfileController {
    private readonly userService;
    constructor(userService: UserService);
    getProfile(id: string): Promise<import("mongoose").Document<unknown, {}, import("../models/user.schema").IUser, {}, {}> & import("../models/user.schema").IUser & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    updateProfile(id: string, updateProfileDto: any): Promise<import("mongoose").Document<unknown, {}, import("../models/user.schema").IUser, {}, {}> & import("../models/user.schema").IUser & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
