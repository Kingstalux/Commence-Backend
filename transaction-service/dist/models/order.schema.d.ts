import { Document, Types } from 'mongoose';
export type OrderStatus = 'PENDING' | 'PAID' | 'FAILED';
export interface IOrder extends Document {
    user_id: Types.ObjectId;
    total_cents: number;
    currency: string;
    status: OrderStatus;
    created_at: Date;
}
declare const _default: import("mongoose").Model<IOrder, {}, {}, {}, Document<unknown, {}, IOrder, {}, {}> & IOrder & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
