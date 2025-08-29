import { Schema, model, Document, Types } from 'mongoose';

export interface IUserRole extends Document {
  user_id: Types.ObjectId;
  role_id: Types.ObjectId;
}

const UserRoleSchema = new Schema<IUserRole>({
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  role_id: { type: Schema.Types.ObjectId, ref: 'Role', required: true },
});

export default model<IUserRole>('UserRole', UserRoleSchema);
