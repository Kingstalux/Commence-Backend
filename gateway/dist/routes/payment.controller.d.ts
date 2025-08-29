import { ClientProxy } from '@nestjs/microservices';
export declare class PaymentController {
    private readonly client;
    constructor(client: ClientProxy);
    findAll(): import("rxjs").Observable<any>;
    findOne(id: string): import("rxjs").Observable<any>;
    create(createPaymentDto: any): import("rxjs").Observable<any>;
    update(id: string, updatePaymentDto: any): import("rxjs").Observable<any>;
    remove(id: string): import("rxjs").Observable<any>;
}
