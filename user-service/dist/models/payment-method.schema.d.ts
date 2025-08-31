import { Document, Types } from 'mongoose';
export type PaymentMethodDocument = PaymentMethod & Document;
export declare class PaymentMethod {
    userId: Types.ObjectId;
    type: string;
    last4: string;
    brand: string;
    expiryMonth?: number;
    expiryYear?: number;
    cardholderName?: string;
    isDefault: boolean;
    token: string;
    billingAddress?: {
        street: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };
    isActive: boolean;
}
export declare const PaymentMethodSchema: import("mongoose").Schema<PaymentMethod, import("mongoose").Model<PaymentMethod, any, any, any, Document<unknown, any, PaymentMethod, any, {}> & PaymentMethod & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PaymentMethod, Document<unknown, {}, import("mongoose").FlatRecord<PaymentMethod>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<PaymentMethod> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
