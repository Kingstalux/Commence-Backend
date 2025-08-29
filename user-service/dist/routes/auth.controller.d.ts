import { UserService } from '../app.service';
export declare class AuthController {
    private readonly userService;
    constructor(userService: UserService);
    signup(signupDto: any): Promise<import("mongoose").Document<unknown, {}, import("../models/user.schema").IUser, {}, {}> & import("../models/user.schema").IUser & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    login(loginDto: any): Promise<import("mongoose").Document<unknown, {}, import("../models/user.schema").IUser, {}, {}> & import("../models/user.schema").IUser & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
