import { Document, Types } from 'mongoose';
export type UserRoleDocument = UserRole & Document;
export declare class UserRole {
    user_id: Types.ObjectId;
    role_id: Types.ObjectId;
}
export declare const UserRoleSchema: import("mongoose").Schema<UserRole, import("mongoose").Model<UserRole, any, any, any, Document<unknown, any, UserRole, any, {}> & UserRole & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UserRole, Document<unknown, {}, import("mongoose").FlatRecord<UserRole>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<UserRole> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export interface IUserRole extends Document {
    user_id: Types.ObjectId;
    role_id: Types.ObjectId;
}
