import { JwtService } from '@nestjs/jwt';
import { CartService } from '../app.service';
export declare class CartController {
    private readonly cartService;
    private readonly jwtService;
    constructor(cartService: CartService, jwtService: JwtService);
    private extractUserIdFromToken;
    getCart(data: any): Promise<import("mongoose").Document<unknown, {}, import("../models/cart.schema").CartDocument, {}, {}> & import("../models/cart.schema").Cart & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    addCartItem(data: any): Promise<import("../models/cart.schema").CartItem>;
    updateCartItem(data: any): Promise<import("../models/cart.schema").CartItem>;
    removeCartItem(data: any): Promise<{
        success: boolean;
    }>;
    clearCart(data: any): Promise<import("mongoose").Document<unknown, {}, import("../models/cart.schema").CartDocument, {}, {}> & import("../models/cart.schema").Cart & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    applyDiscount(data: any): Promise<import("mongoose").Document<unknown, {}, import("../models/cart.schema").CartDocument, {}, {}> & import("../models/cart.schema").Cart & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    removeDiscount(data: any): Promise<import("mongoose").Document<unknown, {}, import("../models/cart.schema").CartDocument, {}, {}> & import("../models/cart.schema").Cart & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
