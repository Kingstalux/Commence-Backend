import { OrderService } from '../app.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    getOrders(data: any): Promise<any[]>;
    findOne(data: any): Promise<any>;
    create(createOrderDto: any): Promise<any>;
    cancelOrder(data: any): Promise<any>;
    getOrderReceipt(data: any): Promise<any>;
    refundOrder(data: any): Promise<any>;
}
