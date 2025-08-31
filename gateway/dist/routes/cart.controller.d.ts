import { ClientProxy } from '@nestjs/microservices';
export declare class CartController {
    private readonly client;
    constructor(client: ClientProxy);
    getCart(token: string): import("rxjs").Observable<any>;
    addCartItem(data: any, token: string): import("rxjs").Observable<any>;
    updateCartItem(itemId: string, data: any, token: string): import("rxjs").Observable<any>;
    removeCartItem(itemId: string, token: string): import("rxjs").Observable<any>;
    clearCart(token: string): import("rxjs").Observable<any>;
    applyDiscount(data: any, token: string): import("rxjs").Observable<any>;
    removeDiscount(token: string): import("rxjs").Observable<any>;
    likeCartItem(itemId: string, data: any, token: string): import("rxjs").Observable<any>;
}
