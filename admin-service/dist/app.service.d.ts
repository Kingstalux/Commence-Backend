export declare class ProductService {
    findAllProducts(): any[];
    findProductById(id: string): {};
    createProduct(dto: any): {};
    updateProduct(id: string, dto: any): {};
    deleteProduct(id: string): {};
    getInventory(sku: string): {};
    updateInventory(sku: string, dto: any): {};
}
export declare class DiscountService {
    findAllDiscounts(): any[];
    findDiscountById(id: string): {};
    createDiscount(dto: any): {};
    updateDiscount(id: string, dto: any): {};
    deleteDiscount(id: string): {};
}
export declare class MediaService {
    findAllMedia(): any[];
    findMediaById(id: string): {};
    createMedia(dto: any): {};
    updateMedia(id: string, dto: any): {};
    deleteMedia(id: string): {};
}
export declare class AppService {
    getHello(): string;
}
