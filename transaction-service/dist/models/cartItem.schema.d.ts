import { Document, Types } from 'mongoose';
export interface ICartItem extends Document {
    cart_id: Types.ObjectId;
    product_id: Types.ObjectId;
    qty: number;
    price_snapshot_cents: number;
}
declare const _default: import("mongoose").Model<ICartItem, {}, {}, {}, Document<unknown, {}, ICartItem, {}, {}> & ICartItem & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
