import { OrderService } from '../app.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("../models/order.schema").IOrder, {}, {}> & import("../models/order.schema").IOrder & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("../models/order.schema").IOrder, {}, {}> & import("../models/order.schema").IOrder & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    create(createOrderDto: any): Promise<import("mongoose").Document<unknown, {}, import("../models/order.schema").IOrder, {}, {}> & import("../models/order.schema").IOrder & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, updateOrderDto: any): Promise<import("mongoose").Document<unknown, {}, import("../models/order.schema").IOrder, {}, {}> & import("../models/order.schema").IOrder & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, import("../models/order.schema").IOrder, {}, {}> & import("../models/order.schema").IOrder & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
