import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserRoleDocument = UserRole & Document;

@Schema()
export class UserRole {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Role', required: true })
  role_id: Types.ObjectId;
}

export const UserRoleSchema = SchemaFactory.createForClass(UserRole);

// Legacy interface for backward compatibility
export interface IUserRole extends Document {
  user_id: Types.ObjectId;
  role_id: Types.ObjectId;
}
