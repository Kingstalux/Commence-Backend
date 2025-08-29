import { Document, Types } from 'mongoose';
export interface IMedia extends Document {
    product_id: Types.ObjectId;
    url: string;
    alt_text: string;
    position: number;
}
declare const _default: import("mongoose").Model<IMedia, {}, {}, {}, Document<unknown, {}, IMedia, {}, {}> & IMedia & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
