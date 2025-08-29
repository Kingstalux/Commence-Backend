import { PaymentMethodService } from '../app.service';
export declare class PaymentMethodsController {
    private readonly paymentMethodService;
    constructor(paymentMethodService: PaymentMethodService);
    getPaymentMethods(data: any): Promise<{
        id: string;
        userId: string;
        type: string;
        last4: string;
        isDefault: boolean;
    }[]>;
    addPaymentMethod(data: any): Promise<any>;
    updatePaymentMethod(data: any): Promise<any>;
    deletePaymentMethod(data: any): Promise<{
        success: boolean;
    }>;
    setDefaultPaymentMethod(data: any): Promise<{
        id: string;
        isDefault: boolean;
    }>;
}
