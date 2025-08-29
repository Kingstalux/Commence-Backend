import { PaymentService } from '../app.service';
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("../models/payment.schema").IPayment, {}, {}> & import("../models/payment.schema").IPayment & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("../models/payment.schema").IPayment, {}, {}> & import("../models/payment.schema").IPayment & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    create(createPaymentDto: any): Promise<import("mongoose").Document<unknown, {}, import("../models/payment.schema").IPayment, {}, {}> & import("../models/payment.schema").IPayment & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, updatePaymentDto: any): Promise<import("mongoose").Document<unknown, {}, import("../models/payment.schema").IPayment, {}, {}> & import("../models/payment.schema").IPayment & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, import("../models/payment.schema").IPayment, {}, {}> & import("../models/payment.schema").IPayment & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
