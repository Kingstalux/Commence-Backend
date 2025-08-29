import { Document, Types } from 'mongoose';
export interface IOrderItem extends Document {
    order_id: Types.ObjectId;
    product_id: Types.ObjectId;
    qty: number;
    price_snapshot_cents: number;
}
declare const _default: import("mongoose").Model<IOrderItem, {}, {}, {}, Document<unknown, {}, IOrderItem, {}, {}> & IOrderItem & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
