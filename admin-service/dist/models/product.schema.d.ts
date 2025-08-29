import { Document } from 'mongoose';
export interface IProduct extends Document {
    sku: string;
    title: string;
    description: string;
    price_cents: number;
    currency: string;
    stock: number;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
}
declare const _default: import("mongoose").Model<IProduct, {}, {}, {}, Document<unknown, {}, IProduct, {}, {}> & IProduct & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
