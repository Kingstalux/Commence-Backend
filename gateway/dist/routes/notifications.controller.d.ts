import { ClientProxy } from '@nestjs/microservices';
export declare class NotificationsController {
    private readonly client;
    constructor(client: ClientProxy);
    sendOrderConfirmation(data: any): import("rxjs").Observable<any>;
    sendShippingUpdate(data: any): import("rxjs").Observable<any>;
    sendDeliveryConfirmation(data: any): import("rxjs").Observable<any>;
}
