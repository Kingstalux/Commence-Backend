export declare class AppService {
    getHello(): string;
}
export declare class UserService {
    findAllUsers(): Promise<(import("mongoose").Document<unknown, {}, import("./models/user.schema").IUser, {}, {}> & import("./models/user.schema").IUser & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findUserById(id: string): Promise<import("mongoose").Document<unknown, {}, import("./models/user.schema").IUser, {}, {}> & import("./models/user.schema").IUser & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    createUser(data: any): Promise<import("mongoose").Document<unknown, {}, import("./models/user.schema").IUser, {}, {}> & import("./models/user.schema").IUser & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    updateUser(id: string, data: any): Promise<import("mongoose").Document<unknown, {}, import("./models/user.schema").IUser, {}, {}> & import("./models/user.schema").IUser & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    deleteUser(id: string): Promise<import("mongoose").Document<unknown, {}, import("./models/user.schema").IUser, {}, {}> & import("./models/user.schema").IUser & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findUserRoles(userId: string): Promise<(import("mongoose").Document<unknown, {}, import("./models/userRole.schema").IUserRole, {}, {}> & import("./models/userRole.schema").IUserRole & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findSessions(userId: string): Promise<(import("mongoose").Document<unknown, {}, import("./models/session.schema").ISession, {}, {}> & import("./models/session.schema").ISession & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    signup(signupDto: any): Promise<import("mongoose").Document<unknown, {}, import("./models/user.schema").IUser, {}, {}> & import("./models/user.schema").IUser & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    login(loginDto: any): Promise<import("mongoose").Document<unknown, {}, import("./models/user.schema").IUser, {}, {}> & import("./models/user.schema").IUser & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getProfile(id: string): Promise<import("mongoose").Document<unknown, {}, import("./models/user.schema").IUser, {}, {}> & import("./models/user.schema").IUser & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    updateProfile(id: string, updateProfileDto: any): Promise<import("mongoose").Document<unknown, {}, import("./models/user.schema").IUser, {}, {}> & import("./models/user.schema").IUser & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getRoles(): Promise<(import("mongoose").Document<unknown, {}, import("./models/role.schema").IRole, {}, {}> & import("./models/role.schema").IRole & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    createRole(createRoleDto: any): Promise<import("mongoose").Document<unknown, {}, import("./models/role.schema").IRole, {}, {}> & import("./models/role.schema").IRole & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
