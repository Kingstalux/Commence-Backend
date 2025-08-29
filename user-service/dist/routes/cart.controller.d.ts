import { CartService } from '../app.service';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    getCart(data: any): Promise<any>;
    addCartItem(data: any): Promise<any>;
    updateCartItem(data: any): Promise<any>;
    removeCartItem(data: any): Promise<any>;
    clearCart(data: any): Promise<any>;
    applyDiscount(data: any): Promise<any>;
    removeDiscount(data: any): Promise<any>;
}
