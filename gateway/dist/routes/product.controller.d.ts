import { ClientProxy } from '@nestjs/microservices';
export declare class ProductController {
    private readonly client;
    constructor(client: ClientProxy);
    getProducts(filters: any): import("rxjs").Observable<any>;
    getFeaturedProducts(): import("rxjs").Observable<any>;
    getCategories(): import("rxjs").Observable<any>;
    searchProducts(query: string): import("rxjs").Observable<any>;
    getProductById(id: string): import("rxjs").Observable<any>;
}
export declare class AdminProductController {
    private readonly client;
    constructor(client: ClientProxy);
    getAdminProducts(): import("rxjs").Observable<any>;
    getAdminProduct(id: string): import("rxjs").Observable<any>;
    createProduct(createProductDto: any): import("rxjs").Observable<any>;
    updateProduct(id: string, updateProductDto: any): import("rxjs").Observable<any>;
    deleteProduct(id: string): import("rxjs").Observable<any>;
    bulkImportProducts(data: any): import("rxjs").Observable<any>;
}
