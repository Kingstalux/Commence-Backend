import { ClientProxy } from '@nestjs/microservices';
export declare class OrderController {
    private readonly client;
    constructor(client: ClientProxy);
    getOrders(token: string): import("rxjs").Observable<any>;
    getOrderById(id: string, token: string): import("rxjs").Observable<any>;
    createOrder(createOrderDto: any, token: string): import("rxjs").Observable<any>;
    cancelOrder(id: string, token: string): import("rxjs").Observable<any>;
    getOrderReceipt(id: string, token: string): import("rxjs").Observable<any>;
    refundOrder(id: string, data: any, token: string): import("rxjs").Observable<any>;
}
