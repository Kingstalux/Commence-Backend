import { Schema, model, Document } from 'mongoose';

export interface IProduct extends Document {
  sku: string;
  title: string;
  description: string;
  price_cents: number;
  currency: string;
  stock: number;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}

const ProductSchema = new Schema<IProduct>({
  sku: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String },
  price_cents: { type: Number, required: true },
  currency: { type: String, required: true },
  stock: { type: Number, default: 0 },
  is_active: { type: Boolean, default: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, versionKey: false });

export default model<IProduct>('Product', ProductSchema);
