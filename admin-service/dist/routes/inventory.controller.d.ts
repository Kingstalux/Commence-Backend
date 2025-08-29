import { ProductService } from '../app.service';
export declare class InventoryController {
    private readonly productService;
    constructor(productService: ProductService);
    getInventory(sku: string): {};
    updateInventory(sku: string, updateInventoryDto: any): {};
}
