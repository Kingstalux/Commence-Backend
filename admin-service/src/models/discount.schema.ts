import { Schema, model, Document } from 'mongoose';

export type DiscountType = 'PERCENT' | 'FIXED';

export interface IDiscount extends Document {
  code: string;
  type: DiscountType;
  value: number;
  starts_at: Date;
  ends_at: Date;
  constraints: any;
}

const DiscountSchema = new Schema<IDiscount>({
  code: { type: String, required: true, unique: true },
  type: { type: String, enum: ['PERCENT', 'FIXED'], required: true },
  value: { type: Number, required: true },
  starts_at: { type: Date },
  ends_at: { type: Date },
  constraints: { type: Schema.Types.Mixed },
});

export default model<IDiscount>('Discount', DiscountSchema);
