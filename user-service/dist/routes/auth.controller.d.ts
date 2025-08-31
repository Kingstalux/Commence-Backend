import { UserService } from '../app.service';
export declare class AuthController {
    private readonly userService;
    constructor(userService: UserService);
    signup(signupDto: any): Promise<import("mongoose").Document<unknown, {}, import("../models/user.schema").UserDocument, {}, {}> & import("../models/user.schema").User & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    login(loginDto: any): Promise<{
        user: {
            id: unknown;
            email: string;
            name: string;
            preferences: any;
        };
        token: string;
    }>;
    logout(data: any): Promise<{
        token: any;
        logged_out: boolean;
    }>;
    refreshToken(data: any): Promise<{
        token: string;
    }>;
    getMe(data: any): Promise<{
        id: unknown;
        email: string;
        name: string;
        preferences: any;
    }>;
}
