import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CartDocument = Cart & Document;
export type CartItemDocument = CartItem & Document;

@Schema({ _id: false })
export class Product {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  title?: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  discountedPrice?: number;

  @Prop()
  imageUrl?: string;
}

const ProductSchema = SchemaFactory.createForClass(Product);

@Schema({ _id: false })
export class CartItem {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  productId: string;

  @Prop({ required: true, default: 1 })
  quantity: number;

  @Prop({ default: false })
  liked?: boolean;

  @Prop({ default: Date.now })
  addedAt: Date;

  @Prop({ type: ProductSchema, required: true })
  product: Product;
}

const CartItemSchema = SchemaFactory.createForClass(CartItem);

@Schema({ timestamps: true })
export class Cart {
  @Prop({ required: true })
  userId: string;

  @Prop({ type: [CartItemSchema], default: [] })
  items: CartItem[];

  @Prop({ default: 0 })
  subtotal: number;

  @Prop({ default: 0 })
  discountAmount: number;

  @Prop()
  discountCode?: string;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
