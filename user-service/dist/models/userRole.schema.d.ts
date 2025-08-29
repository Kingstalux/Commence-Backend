import { Document, Types } from 'mongoose';
export interface IUserRole extends Document {
    user_id: Types.ObjectId;
    role_id: Types.ObjectId;
}
declare const _default: import("mongoose").Model<IUserRole, {}, {}, {}, Document<unknown, {}, IUserRole, {}, {}> & IUserRole & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
