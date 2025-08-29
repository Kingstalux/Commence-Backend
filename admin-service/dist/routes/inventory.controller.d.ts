import { ProductService } from '../app.service';
export declare class InventoryController {
    private readonly productService;
    constructor(productService: ProductService);
    getInventory(data: any): Promise<{
        sku: string;
        quantity: any;
    } | {
        sku?: undefined;
        quantity?: undefined;
    }>;
    updateInventory(data: any): Promise<any>;
}
