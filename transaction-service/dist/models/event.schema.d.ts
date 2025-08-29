import { Document } from 'mongoose';
export interface IEvent extends Document {
    aggregate: string;
    aggregate_id: string;
    type: string;
    payload: any;
    created_at: Date;
}
declare const _default: import("mongoose").Model<IEvent, {}, {}, {}, Document<unknown, {}, IEvent, {}, {}> & IEvent & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
