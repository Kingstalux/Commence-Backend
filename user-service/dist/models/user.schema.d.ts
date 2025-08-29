import { Document } from 'mongoose';
export interface IUser extends Document {
    email: string;
    password: string;
    name?: string;
}
declare const _default: import("mongoose").Model<IUser, {}, {}, {}, Document<unknown, {}, IUser, {}, {}> & IUser & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
