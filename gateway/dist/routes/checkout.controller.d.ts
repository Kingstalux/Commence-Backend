import { ClientProxy } from '@nestjs/microservices';
export declare class CheckoutController {
    private readonly client;
    constructor(client: ClientProxy);
    processCheckout(data: any): import("rxjs").Observable<any>;
    validateCheckout(data: any): import("rxjs").Observable<any>;
}
