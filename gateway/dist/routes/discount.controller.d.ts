import { ClientProxy } from '@nestjs/microservices';
export declare class DiscountController {
    private readonly client;
    constructor(client: ClientProxy);
    findAll(): import("rxjs").Observable<any>;
    findOne(id: string): import("rxjs").Observable<any>;
    create(createDiscountDto: any): import("rxjs").Observable<any>;
    update(id: string, updateDiscountDto: any): import("rxjs").Observable<any>;
    remove(id: string): import("rxjs").Observable<any>;
}
