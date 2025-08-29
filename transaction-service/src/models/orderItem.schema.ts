import { Schema, model, Document, Types } from 'mongoose';

export interface IOrderItem extends Document {
  order_id: Types.ObjectId;
  product_id: Types.ObjectId;
  qty: number;
  price_snapshot_cents: number;
}

const OrderItemSchema = new Schema<IOrderItem>({
  order_id: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
  product_id: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  qty: { type: Number, required: true },
  price_snapshot_cents: { type: Number, required: true },
});

export default model<IOrderItem>('OrderItem', OrderItemSchema);
