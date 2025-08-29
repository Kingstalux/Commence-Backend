import { ClientProxy } from '@nestjs/microservices';
export declare class InventoryController {
    private readonly client;
    constructor(client: ClientProxy);
    getInventory(sku: string): import("rxjs").Observable<any>;
    updateInventory(sku: string, updateInventoryDto: any): import("rxjs").Observable<any>;
}
