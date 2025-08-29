import { ClientProxy } from '@nestjs/microservices';
export declare class SystemController {
    private readonly client;
    constructor(client: ClientProxy);
    getHealth(): import("rxjs").Observable<any>;
    getStatus(): import("rxjs").Observable<any>;
    enableBurstCheckout(): import("rxjs").Observable<any>;
}
