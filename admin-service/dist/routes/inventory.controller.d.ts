import { ProductService } from '../app.service';
export declare class InventoryController {
    private readonly productService;
    constructor(productService: ProductService);
    getInventory(data: any): Promise<any>;
    updateInventory(data: any): Promise<any>;
}
