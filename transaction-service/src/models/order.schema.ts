import { Schema, model, Document, Types } from 'mongoose';

export type OrderStatus = 'PENDING' | 'PAID' | 'FAILED';

export interface IOrder extends Document {
  user_id: Types.ObjectId;
  total_cents: number;
  currency: string;
  status: OrderStatus;
  created_at: Date;
}

const OrderSchema = new Schema<IOrder>({
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  total_cents: { type: Number, required: true },
  currency: { type: String, required: true },
  status: { type: String, enum: ['PENDING', 'PAID', 'FAILED'], default: 'PENDING' },
  created_at: { type: Date, default: Date.now },
});

export default model<IOrder>('Order', OrderSchema);
