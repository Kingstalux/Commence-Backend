import { Document } from 'mongoose';
export interface IRole extends Document {
    name: string;
}
declare const _default: import("mongoose").Model<IRole, {}, {}, {}, Document<unknown, {}, IRole, {}, {}> & IRole & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
