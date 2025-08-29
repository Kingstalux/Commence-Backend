import { ClientProxy } from '@nestjs/microservices';
export declare class CartController {
    private readonly client;
    constructor(client: ClientProxy);
    findAll(): import("rxjs").Observable<any>;
    findOne(id: string): import("rxjs").Observable<any>;
    create(createCartDto: any): import("rxjs").Observable<any>;
    update(id: string, updateCartDto: any): import("rxjs").Observable<any>;
    remove(id: string): import("rxjs").Observable<any>;
}
