import { CartService } from '../app.service';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("../models/cart.schema").ICart, {}, {}> & import("../models/cart.schema").ICart & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("../models/cart.schema").ICart, {}, {}> & import("../models/cart.schema").ICart & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    create(createCartDto: any): Promise<import("mongoose").Document<unknown, {}, import("../models/cart.schema").ICart, {}, {}> & import("../models/cart.schema").ICart & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, updateCartDto: any): Promise<import("mongoose").Document<unknown, {}, import("../models/cart.schema").ICart, {}, {}> & import("../models/cart.schema").ICart & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, import("../models/cart.schema").ICart, {}, {}> & import("../models/cart.schema").ICart & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
