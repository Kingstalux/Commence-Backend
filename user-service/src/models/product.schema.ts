import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = ProductModel & Document;

@Schema({ timestamps: true })
export class ProductModel {
  @Prop({ required: true })
  name: string;

  @Prop()
  title?: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  discountedPrice?: number;

  @Prop()
  imageUrl?: string;

  @Prop({ required: true })
  category: string;

  @Prop({ type: [String], default: [] })
  tags: string[];

  @Prop({ default: true })
  inStock: boolean;

  @Prop({ default: 0 })
  stockCount: number;

  @Prop()
  discountPercentage?: number;
}

export const ProductSchema = SchemaFactory.createForClass(ProductModel);
