import { JwtService } from '@nestjs/jwt';
import { UserService } from '../app.service';
export declare class ProfileController {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    private extractUserIdFromToken;
    updateProfile(data: any): Promise<import("mongoose").Document<unknown, {}, import("../models/user.schema").UserDocument, {}, {}> & import("../models/user.schema").User & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    updatePassword(data: any): Promise<import("mongoose").Document<unknown, {}, import("../models/user.schema").UserDocument, {}, {}> & import("../models/user.schema").User & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    deleteAccount(data: any): Promise<import("mongoose").Document<unknown, {}, import("../models/user.schema").UserDocument, {}, {}> & import("../models/user.schema").User & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getPreferences(data: any): Promise<import("mongoose").Document<unknown, {}, import("../models/user.schema").UserDocument, {}, {}> & import("../models/user.schema").User & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    updatePreferences(data: any): Promise<import("mongoose").Document<unknown, {}, import("../models/user.schema").UserDocument, {}, {}> & import("../models/user.schema").User & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
