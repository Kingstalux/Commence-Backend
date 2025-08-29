import { ClientProxy } from '@nestjs/microservices';
export declare class ProductController {
    private readonly client;
    constructor(client: ClientProxy);
    findAll(): import("rxjs").Observable<any>;
    findOne(id: string): import("rxjs").Observable<any>;
    create(createProductDto: any): import("rxjs").Observable<any>;
    update(id: string, updateProductDto: any): import("rxjs").Observable<any>;
    remove(id: string): import("rxjs").Observable<any>;
}
