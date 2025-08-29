import { Document, Types } from 'mongoose';
export interface ISession extends Document {
    user_id: Types.ObjectId;
    refresh_token_hash: string;
    expires_at: Date;
    created_at: Date;
}
declare const _default: import("mongoose").Model<ISession, {}, {}, {}, Document<unknown, {}, ISession, {}, {}> & ISession & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
