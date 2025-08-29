import { Schema, model, Document, Types } from 'mongoose';

export type PaymentProvider = 'FAKE' | 'STRIPE';

export interface IPayment extends Document {
  order_id: Types.ObjectId;
  provider: PaymentProvider;
  status: string;
  ref: string;
  created_at: Date;
}

const PaymentSchema = new Schema<IPayment>({
  order_id: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
  provider: { type: String, enum: ['FAKE', 'STRIPE'], required: true },
  status: { type: String, required: true },
  ref: { type: String },
  created_at: { type: Date, default: Date.now },
});

export default model<IPayment>('Payment', PaymentSchema);
