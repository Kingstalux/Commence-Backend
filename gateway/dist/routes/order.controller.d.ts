import { ClientProxy } from '@nestjs/microservices';
export declare class OrderController {
    private readonly client;
    constructor(client: ClientProxy);
    findAll(): import("rxjs").Observable<any>;
    findOne(id: string): import("rxjs").Observable<any>;
    create(createOrderDto: any): import("rxjs").Observable<any>;
    update(id: string, updateOrderDto: any): import("rxjs").Observable<any>;
    remove(id: string): import("rxjs").Observable<any>;
}
