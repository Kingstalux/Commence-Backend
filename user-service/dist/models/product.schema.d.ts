import { Document } from 'mongoose';
export type ProductDocument = ProductModel & Document;
export declare class ProductModel {
    name: string;
    title?: string;
    description: string;
    price: number;
    discountedPrice?: number;
    imageUrl?: string;
    category: string;
    tags: string[];
    inStock: boolean;
    stockCount: number;
    discountPercentage?: number;
}
export declare const ProductSchema: import("mongoose").Schema<ProductModel, import("mongoose").Model<ProductModel, any, any, any, Document<unknown, any, ProductModel, any, {}> & ProductModel & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ProductModel, Document<unknown, {}, import("mongoose").FlatRecord<ProductModel>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<ProductModel> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
