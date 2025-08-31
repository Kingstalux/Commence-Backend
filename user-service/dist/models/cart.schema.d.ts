import { Document } from 'mongoose';
export type CartDocument = Cart & Document;
export type CartItemDocument = CartItem & Document;
export declare class Product {
    id: string;
    name: string;
    title?: string;
    price: number;
    discountedPrice?: number;
    imageUrl?: string;
}
export declare class CartItem {
    id: string;
    productId: string;
    quantity: number;
    liked?: boolean;
    addedAt: Date;
    product: Product;
}
export declare class Cart {
    userId: string;
    items: CartItem[];
    subtotal: number;
    discountAmount: number;
    discountCode?: string;
}
export declare const CartSchema: import("mongoose").Schema<Cart, import("mongoose").Model<Cart, any, any, any, Document<unknown, any, Cart, any, {}> & Cart & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Cart, Document<unknown, {}, import("mongoose").FlatRecord<Cart>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Cart> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
