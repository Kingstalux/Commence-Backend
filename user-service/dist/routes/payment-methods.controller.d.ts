import { JwtService } from '@nestjs/jwt';
import { PaymentMethodService } from '../app.service';
export declare class PaymentMethodsController {
    private readonly paymentMethodService;
    private readonly jwtService;
    constructor(paymentMethodService: PaymentMethodService, jwtService: JwtService);
    private extractUserIdFromToken;
    getPaymentMethods(data: any): Promise<(import("mongoose").Document<unknown, {}, import("../models/payment-method.schema").PaymentMethodDocument, {}, {}> & import("../models/payment-method.schema").PaymentMethod & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    addPaymentMethod(data: any): Promise<import("mongoose").Document<unknown, {}, import("../models/payment-method.schema").PaymentMethodDocument, {}, {}> & import("../models/payment-method.schema").PaymentMethod & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    updatePaymentMethod(data: any): Promise<import("mongoose").Document<unknown, {}, import("../models/payment-method.schema").PaymentMethodDocument, {}, {}> & import("../models/payment-method.schema").PaymentMethod & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    deletePaymentMethod(data: any): Promise<{
        success: boolean;
        deletedId: string;
    }>;
    setDefaultPaymentMethod(data: any): Promise<import("mongoose").Document<unknown, {}, import("../models/payment-method.schema").PaymentMethodDocument, {}, {}> & import("../models/payment-method.schema").PaymentMethod & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
