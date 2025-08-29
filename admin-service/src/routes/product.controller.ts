import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ProductService } from '../app.service';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @MessagePattern({ cmd: 'admin_get_products' })
  findAll() {
    return this.productService.findAllProducts();
  }

  @MessagePattern({ cmd: 'admin_get_product' })
  findOne(data: any) {
    return this.productService.findProductById(data.id);
  }

  @MessagePattern({ cmd: 'admin_create_product' })
  create(createProductDto: any) {
    return this.productService.createProduct(createProductDto);
  }

  @MessagePattern({ cmd: 'admin_update_product' })
  update(data: any) {
    return this.productService.updateProduct(data.id, data);
  }

  @MessagePattern({ cmd: 'admin_delete_product' })
  remove(data: any) {
    return this.productService.deleteProduct(data.id);
  }

  @MessagePattern({ cmd: 'admin_bulk_import_products' })
  bulkImport(data: any) {
    return this.productService.bulkImportProducts(data.products);
  }
}
