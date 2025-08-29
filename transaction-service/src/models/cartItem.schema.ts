import { Schema, model, Document, Types } from 'mongoose';

export interface ICartItem extends Document {
  cart_id: Types.ObjectId;
  product_id: Types.ObjectId;
  qty: number;
  price_snapshot_cents: number;
}

const CartItemSchema = new Schema<ICartItem>({
  cart_id: { type: Schema.Types.ObjectId, ref: 'Cart', required: true },
  product_id: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  qty: { type: Number, required: true },
  price_snapshot_cents: { type: Number, required: true },
});

export default model<ICartItem>('CartItem', CartItemSchema);
