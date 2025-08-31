import { ProductService } from '../app.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    findAll(): Promise<any>;
    findOne(data: any): Promise<any>;
    create(createProductDto: any): Promise<any>;
    update(data: any): Promise<any>;
    remove(data: any): Promise<any>;
    bulkImport(data: any): Promise<any>;
}
