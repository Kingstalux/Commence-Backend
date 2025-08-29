import { CartService } from '../app.service';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    findAll(): Promise<any[]>;
    findOne(data: any): Promise<any>;
    findByUserId(data: any): Promise<any>;
    create(createCartDto: any): Promise<any>;
    update(data: any): Promise<any>;
    remove(data: any): Promise<any>;
}
