import { Document } from 'mongoose';
export type DiscountType = 'PERCENT' | 'FIXED';
export interface IDiscount extends Document {
    code: string;
    type: DiscountType;
    value: number;
    starts_at: Date;
    ends_at: Date;
    constraints: any;
}
declare const _default: import("mongoose").Model<IDiscount, {}, {}, {}, Document<unknown, {}, IDiscount, {}, {}> & IDiscount & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
