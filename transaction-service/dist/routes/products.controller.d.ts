import { ProductCatalogService } from '../app.service';
export declare class ProductsController {
    private readonly productCatalogService;
    constructor(productCatalogService: ProductCatalogService);
    getProducts(filters: any): Promise<{
        id: string;
        name: string;
        price: number;
        category: string;
        featured: boolean;
    }[]>;
    getFeaturedProducts(): Promise<{
        id: string;
        name: string;
        price: number;
        category: string;
        featured: boolean;
    }[]>;
    getCategories(): Promise<string[]>;
    searchProducts(data: any): Promise<{
        id: string;
        name: string;
        price: number;
        category: string;
        featured: boolean;
    }[]>;
    getProductById(data: any): Promise<{
        id: string;
        name: string;
        price: number;
        category: string;
        featured: boolean;
    }>;
}
