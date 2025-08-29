import { DiscountService } from '../app.service';
export declare class DiscountController {
    private readonly discountService;
    constructor(discountService: DiscountService);
    findAll(): any[];
    findOne(id: string): {};
    create(createDiscountDto: any): {};
    update(id: string, updateDiscountDto: any): {};
    remove(id: string): {};
}
