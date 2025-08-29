import { ClientProxy } from '@nestjs/microservices';
export declare class DiscountController {
    private readonly client;
    constructor(client: ClientProxy);
    getDiscounts(): import("rxjs").Observable<any>;
    getDiscount(id: string): import("rxjs").Observable<any>;
    createDiscount(createDiscountDto: any): import("rxjs").Observable<any>;
    updateDiscount(id: string, updateDiscountDto: any): import("rxjs").Observable<any>;
    deleteDiscount(id: string): import("rxjs").Observable<any>;
    validateDiscountCode(code: string): import("rxjs").Observable<any>;
}
