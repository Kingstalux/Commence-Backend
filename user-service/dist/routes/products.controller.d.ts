import { ProductService } from '../app.service';
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductService);
    getProducts(filters: any): Promise<(import("mongoose").Document<unknown, {}, import("../models/product.schema").ProductDocument, {}, {}> & import("../models/product.schema").ProductModel & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    getFeaturedProducts(): Promise<(import("mongoose").Document<unknown, {}, import("../models/product.schema").ProductDocument, {}, {}> & import("../models/product.schema").ProductModel & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    getCategories(): Promise<string[]>;
    searchProducts(data: any): Promise<(import("mongoose").Document<unknown, {}, import("../models/product.schema").ProductDocument, {}, {}> & import("../models/product.schema").ProductModel & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    getProductById(data: any): Promise<import("mongoose").Document<unknown, {}, import("../models/product.schema").ProductDocument, {}, {}> & import("../models/product.schema").ProductModel & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    createProduct(createProductDto: any): Promise<import("mongoose").Document<unknown, {}, import("../models/product.schema").ProductDocument, {}, {}> & import("../models/product.schema").ProductModel & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    updateProduct(data: any): Promise<import("mongoose").Document<unknown, {}, import("../models/product.schema").ProductDocument, {}, {}> & import("../models/product.schema").ProductModel & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    deleteProduct(data: any): Promise<{
        success: boolean;
        deletedProduct: import("mongoose").Document<unknown, {}, import("../models/product.schema").ProductDocument, {}, {}> & import("../models/product.schema").ProductModel & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    bulkImportProducts(data: any): Promise<{
        imported: number;
        total: number;
        products: import("mongoose").MergeType<import("mongoose").Document<unknown, {}, import("../models/product.schema").ProductDocument, {}, {}> & import("../models/product.schema").ProductModel & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }, Omit<any, "_id">>[];
    }>;
    getInventory(data: any): Promise<{
        sku: string;
        quantity: number;
    }>;
    updateInventory(data: any): Promise<{
        sku: string;
        quantity: number;
    }>;
}
