export declare class AppService {
    getHello(): string;
}
export declare class CartService {
    findAllCarts(): Promise<(import("mongoose").Document<unknown, {}, import("./models/cart.schema").ICart, {}, {}> & import("./models/cart.schema").ICart & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findCartById(id: string): Promise<import("mongoose").Document<unknown, {}, import("./models/cart.schema").ICart, {}, {}> & import("./models/cart.schema").ICart & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    createCart(data: any): Promise<import("mongoose").Document<unknown, {}, import("./models/cart.schema").ICart, {}, {}> & import("./models/cart.schema").ICart & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    updateCart(id: string, data: any): Promise<import("mongoose").Document<unknown, {}, import("./models/cart.schema").ICart, {}, {}> & import("./models/cart.schema").ICart & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    deleteCart(id: string): Promise<import("mongoose").Document<unknown, {}, import("./models/cart.schema").ICart, {}, {}> & import("./models/cart.schema").ICart & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
export declare class EventService {
    findAllEvents(): Promise<(import("mongoose").Document<unknown, {}, import("./models/event.schema").IEvent, {}, {}> & import("./models/event.schema").IEvent & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findEventById(id: string): Promise<import("mongoose").Document<unknown, {}, import("./models/event.schema").IEvent, {}, {}> & import("./models/event.schema").IEvent & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    createEvent(data: any): Promise<import("mongoose").Document<unknown, {}, import("./models/event.schema").IEvent, {}, {}> & import("./models/event.schema").IEvent & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
export declare class OrderService {
    findAllOrders(): Promise<(import("mongoose").Document<unknown, {}, import("./models/order.schema").IOrder, {}, {}> & import("./models/order.schema").IOrder & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOrderById(id: string): Promise<import("mongoose").Document<unknown, {}, import("./models/order.schema").IOrder, {}, {}> & import("./models/order.schema").IOrder & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    createOrder(data: any): Promise<import("mongoose").Document<unknown, {}, import("./models/order.schema").IOrder, {}, {}> & import("./models/order.schema").IOrder & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    updateOrder(id: string, data: any): Promise<import("mongoose").Document<unknown, {}, import("./models/order.schema").IOrder, {}, {}> & import("./models/order.schema").IOrder & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    deleteOrder(id: string): Promise<import("mongoose").Document<unknown, {}, import("./models/order.schema").IOrder, {}, {}> & import("./models/order.schema").IOrder & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
export declare class PaymentService {
    findAllPayments(): Promise<(import("mongoose").Document<unknown, {}, import("./models/payment.schema").IPayment, {}, {}> & import("./models/payment.schema").IPayment & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findPaymentById(id: string): Promise<import("mongoose").Document<unknown, {}, import("./models/payment.schema").IPayment, {}, {}> & import("./models/payment.schema").IPayment & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    createPayment(data: any): Promise<import("mongoose").Document<unknown, {}, import("./models/payment.schema").IPayment, {}, {}> & import("./models/payment.schema").IPayment & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    updatePayment(id: string, data: any): Promise<import("mongoose").Document<unknown, {}, import("./models/payment.schema").IPayment, {}, {}> & import("./models/payment.schema").IPayment & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    deletePayment(id: string): Promise<import("mongoose").Document<unknown, {}, import("./models/payment.schema").IPayment, {}, {}> & import("./models/payment.schema").IPayment & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
