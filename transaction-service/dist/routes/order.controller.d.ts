import { JwtService } from '@nestjs/jwt';
import { OrderService } from '../app.service';
export declare class OrderController {
    private readonly orderService;
    private readonly jwtService;
    constructor(orderService: OrderService, jwtService: JwtService);
    private extractUserIdFromToken;
    getOrders(data: any): Promise<(import("mongoose").Document<unknown, {}, import("../models/order.schema").OrderDocument, {}, {}> & import("../models/order.schema").Order & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(data: any): Promise<import("mongoose").Document<unknown, {}, import("../models/order.schema").OrderDocument, {}, {}> & import("../models/order.schema").Order & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    create(data: any): Promise<import("mongoose").Document<unknown, {}, import("../models/order.schema").OrderDocument, {}, {}> & import("../models/order.schema").Order & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    checkout(data: any): Promise<{
        orderId: string;
        status: string;
        message: string;
        estimatedDelivery: string;
        trackingNumber: string;
        user_id: import("mongoose").Types.ObjectId;
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
    cancelOrder(data: any): Promise<import("mongoose").Document<unknown, {}, import("../models/order.schema").OrderDocument, {}, {}> & import("../models/order.schema").Order & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getOrderReceipt(data: any): Promise<{
        receiptNumber: string;
        downloadUrl: string;
        user_id: import("mongoose").Types.ObjectId;
        total_cents: number;
        currency: string;
        status: import("../models/order.schema").OrderStatus;
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
    refundOrder(data: any): Promise<import("mongoose").Document<unknown, {}, import("../models/order.schema").OrderDocument, {}, {}> & import("../models/order.schema").Order & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
