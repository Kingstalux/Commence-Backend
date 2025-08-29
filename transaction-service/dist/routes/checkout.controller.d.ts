import { CheckoutService } from '../app.service';
export declare class CheckoutController {
    private readonly checkoutService;
    constructor(checkoutService: CheckoutService);
    processCheckout(data: any): Promise<{
        success: boolean;
        order: {
            id: string;
            userId: any;
            items: any;
            total: any;
            status: string;
            paymentMethod: any;
            createdAt: Date;
        };
    }>;
    validateCheckout(data: any): Promise<{
        valid: boolean;
        errors: any[];
        warnings: any[];
    }>;
}
