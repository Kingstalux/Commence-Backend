import { PaymentService } from '../app.service';
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    findAll(): Promise<any[]>;
    findOne(data: any): Promise<any>;
    create(createPaymentDto: any): Promise<any>;
    processPayment(data: any): Promise<any>;
    refundPayment(data: any): Promise<any>;
    update(data: any): Promise<any>;
}
