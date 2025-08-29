import { DiscountService } from '../app.service';
export declare class DiscountController {
    private readonly discountService;
    constructor(discountService: DiscountService);
    findAll(): Promise<any[]>;
    findOne(data: any): Promise<any>;
    create(createDiscountDto: any): Promise<any>;
    update(data: any): Promise<any>;
    remove(data: any): Promise<any>;
    validateCode(data: any): Promise<{
        valid: boolean;
        discount: any;
    } | {
        valid: boolean;
        discount?: undefined;
    }>;
}
