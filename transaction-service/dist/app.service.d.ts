import { Model, Types } from 'mongoose';
import { Order, OrderDocument } from './models/order.schema';
export declare class AppService {
    getHello(): string;
}
export declare class ProductCatalogService {
    private products;
    getProducts(filters?: any): Promise<{
        id: string;
        name: string;
        price: number;
        category: string;
        featured: boolean;
    }[]>;
    getProductById(id: string): Promise<{
        id: string;
        name: string;
        price: number;
        category: string;
        featured: boolean;
    }>;
    searchProducts(query: string): Promise<{
        id: string;
        name: string;
        price: number;
        category: string;
        featured: boolean;
    }[]>;
    getCategories(): Promise<string[]>;
    getFeaturedProducts(): Promise<{
        id: string;
        name: string;
        price: number;
        category: string;
        featured: boolean;
    }[]>;
}
export declare class CheckoutService {
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
export declare class OrderService {
    private orderModel;
    constructor(orderModel: Model<OrderDocument>);
    findAllOrders(): Promise<(import("mongoose").Document<unknown, {}, OrderDocument, {}, {}> & Order & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    getUserOrders(userId: string): Promise<(import("mongoose").Document<unknown, {}, OrderDocument, {}, {}> & Order & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOrderById(id: string): Promise<import("mongoose").Document<unknown, {}, OrderDocument, {}, {}> & Order & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    createOrder(data: any): Promise<import("mongoose").Document<unknown, {}, OrderDocument, {}, {}> & Order & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    createOrderFromCheckout(data: any): Promise<{
        orderId: string;
        status: string;
        message: string;
        estimatedDelivery: string;
        trackingNumber: string;
        user_id: Types.ObjectId;
        total_cents: number;
        currency: string;
        created_at: Date;
        _id: unknown;
        $locals: Record<string, unknown>;
        $op: "save" | "validate" | "remove" | null;
        $where: Record<string, unknown>;
        baseModelName?: string;
        collection: import("mongoose").Collection;
        db: import("mongoose").Connection;
        errors?: import("mongoose").Error.ValidationError;
        id?: any;
        isNew: boolean;
        schema: import("mongoose").Schema;
        __v: number;
    }>;
    updateOrder(id: string, data: any): Promise<import("mongoose").Document<unknown, {}, OrderDocument, {}, {}> & Order & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    cancelOrder(id: string): Promise<import("mongoose").Document<unknown, {}, OrderDocument, {}, {}> & Order & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getOrderReceipt(id: string): Promise<{
        receiptNumber: string;
        downloadUrl: string;
        user_id: Types.ObjectId;
        total_cents: number;
        currency: string;
        status: import("./models/order.schema").OrderStatus;
        created_at: Date;
        _id: unknown;
        $locals: Record<string, unknown>;
        $op: "save" | "validate" | "remove" | null;
        $where: Record<string, unknown>;
        baseModelName?: string;
        collection: import("mongoose").Collection;
        db: import("mongoose").Connection;
        errors?: import("mongoose").Error.ValidationError;
        id?: any;
        isNew: boolean;
        schema: import("mongoose").Schema;
        __v: number;
    }>;
    refundOrder(id: string, data: any): Promise<import("mongoose").Document<unknown, {}, OrderDocument, {}, {}> & Order & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
export declare class TransactionService {
    private transactions;
    getTransactions(userId?: string): Promise<any[]>;
    getTransactionById(id: string): Promise<any>;
    createTransaction(data: any): Promise<any>;
    getAdminTransactions(): Promise<any[]>;
    getTransactionAnalytics(): Promise<{
        total: number;
        totalAmount: any;
        avgAmount: number;
        dailyTransactions: {};
        topCategories: any[];
    }>;
    exportTransactions(filters: any): Promise<{
        filename: string;
        data: string;
        downloadUrl: string;
    }>;
    private groupTransactionsByDay;
    private getTopCategories;
}
export declare class NotificationService {
    sendOrderConfirmation(data: any): Promise<{
        sent: boolean;
        type: string;
    }>;
    sendShippingUpdate(data: any): Promise<{
        sent: boolean;
        type: string;
    }>;
    sendDeliveryConfirmation(data: any): Promise<{
        sent: boolean;
        type: string;
    }>;
}
export declare class CartService {
    private carts;
    findAllCarts(): Promise<any[]>;
    findCartById(id: string): Promise<any>;
    findCartByUserId(userId: string): Promise<any>;
    createCart(data: any): Promise<any>;
    updateCart(id: string, data: any): Promise<any>;
    deleteCart(id: string): Promise<any>;
}
export declare class EventService {
    private events;
    findAllEvents(): Promise<any[]>;
    findEventById(id: string): Promise<any>;
    createEvent(data: any): Promise<any>;
    logCheckoutEvent(data: any): Promise<any>;
    logOrderEvent(data: any): Promise<any>;
}
export declare class PaymentService {
    private payments;
    findAllPayments(): Promise<any[]>;
    findPaymentById(id: string): Promise<any>;
    createPayment(data: any): Promise<any>;
    updatePayment(id: string, data: any): Promise<any>;
    processPayment(data: any): Promise<any>;
    refundPayment(id: string, amount: number): Promise<any>;
}
