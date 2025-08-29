import { ProductService } from '../app.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    findAll(): any[];
    findOne(id: string): {};
    create(createProductDto: any): {};
    update(id: string, updateProductDto: any): {};
    remove(id: string): {};
}
