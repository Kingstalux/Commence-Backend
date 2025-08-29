import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type OrderStatus = 'PENDING' | 'PAID' | 'FAILED';
export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user_id: Types.ObjectId;

  @Prop({ required: true })
  total_cents: number;

  @Prop({ required: true })
  currency: string;

  @Prop({ enum: ['PENDING', 'PAID', 'FAILED'], default: 'PENDING' })
  status: OrderStatus;

  @Prop({ default: Date.now })
  created_at: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
