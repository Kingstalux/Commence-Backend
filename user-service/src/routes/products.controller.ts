import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ProductService } from '../app.service';

@Controller()
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @MessagePattern({ cmd: 'get_products' })
  getProducts(filters: any) {
    return this.productService.getProducts(filters);
  }

  @MessagePattern({ cmd: 'get_featured_products' })
  getFeaturedProducts() {
    return this.productService.getFeaturedProducts();
  }

  @MessagePattern({ cmd: 'get_categories' })
  getCategories() {
    return this.productService.getCategories();
  }

  @MessagePattern({ cmd: 'search_products' })
  searchProducts(data: any) {
    return this.productService.searchProducts(data.query);
  }

  @MessagePattern({ cmd: 'get_product_by_id' })
  getProductById(data: any) {
    return this.productService.getProductById(data.id);
  }
}
