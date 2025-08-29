import { Document, Types } from 'mongoose';
export type CartStatus = 'ACTIVE' | 'CHECKED_OUT';
export interface ICart extends Document {
    user_id: Types.ObjectId;
    status: CartStatus;
    created_at: Date;
    updated_at: Date;
}
declare const _default: import("mongoose").Model<ICart, {}, {}, {}, Document<unknown, {}, ICart, {}, {}> & ICart & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
