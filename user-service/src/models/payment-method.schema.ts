import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PaymentMethodDocument = PaymentMethod & Document;

@Schema({ timestamps: true })
export class PaymentMethod {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({
    required: true,
    enum: ['card', 'bank', 'paypal', 'apple_pay', 'google_pay'],
  })
  type: string;

  @Prop({ required: true })
  last4: string;

  @Prop({ required: true })
  brand: string; // visa, mastercard, amex, etc.

  @Prop()
  expiryMonth?: number;

  @Prop()
  expiryYear?: number;

  @Prop()
  cardholderName?: string;

  @Prop({ default: false })
  isDefault: boolean;

  @Prop({ required: true })
  token: string; // Token from payment processor (Stripe, etc.)

  @Prop({
    type: {
      street: String,
      city: String,
      state: String,
      postalCode: String,
      country: String,
    },
    required: false,
  })
  billingAddress?: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };

  @Prop({ default: true })
  isActive: boolean;
}

export const PaymentMethodSchema = SchemaFactory.createForClass(PaymentMethod);

// Index for efficient querying
PaymentMethodSchema.index({ userId: 1 });
PaymentMethodSchema.index({ userId: 1, isDefault: 1 });
