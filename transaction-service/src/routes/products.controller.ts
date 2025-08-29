import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ProductCatalogService } from '../app.service';

@Controller()
export class ProductsController {
  constructor(private readonly productCatalogService: ProductCatalogService) {}

  @MessagePattern({ cmd: 'get_products' })
  getProducts(filters: any) {
    return this.productCatalogService.getProducts(filters);
  }

  @MessagePattern({ cmd: 'get_featured_products' })
  getFeaturedProducts() {
    return this.productCatalogService.getFeaturedProducts();
  }

  @MessagePattern({ cmd: 'get_categories' })
  getCategories() {
    return this.productCatalogService.getCategories();
  }

  @MessagePattern({ cmd: 'search_products' })
  searchProducts(data: any) {
    return this.productCatalogService.searchProducts(data.query);
  }

  @MessagePattern({ cmd: 'get_product_by_id' })
  getProductById(data: any) {
    return this.productCatalogService.getProductById(data.id);
  }
}
