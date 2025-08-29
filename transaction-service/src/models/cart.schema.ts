import { Schema, model, Document, Types } from 'mongoose';

export type CartStatus = 'ACTIVE' | 'CHECKED_OUT';

export interface ICart extends Document {
  user_id: Types.ObjectId;
  status: CartStatus;
  created_at: Date;
  updated_at: Date;
}

const CartSchema = new Schema<ICart>({
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['ACTIVE', 'CHECKED_OUT'], default: 'ACTIVE' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, versionKey: false });

export default model<ICart>('Cart', CartSchema);
