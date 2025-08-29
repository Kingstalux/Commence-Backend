import { Document, Types } from 'mongoose';
export type PaymentProvider = 'FAKE' | 'STRIPE';
export interface IPayment extends Document {
    order_id: Types.ObjectId;
    provider: PaymentProvider;
    status: string;
    ref: string;
    created_at: Date;
}
declare const _default: import("mongoose").Model<IPayment, {}, {}, {}, Document<unknown, {}, IPayment, {}, {}> & IPayment & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
