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

  // Admin product management endpoints
  @MessagePattern({ cmd: 'admin_create_product' })
  createProduct(createProductDto: any) {
    return this.productService.createProduct(createProductDto);
  }

  @MessagePattern({ cmd: 'admin_update_product' })
  updateProduct(data: any) {
    return this.productService.updateProduct(data.id, data);
  }

  @MessagePattern({ cmd: 'admin_delete_product' })
  deleteProduct(data: any) {
    return this.productService.deleteProduct(data.id);
  }

  @MessagePattern({ cmd: 'admin_bulk_import_products' })
  bulkImportProducts(data: any) {
    return this.productService.bulkImportProducts(data.products);
  }

  // Inventory management
  @MessagePattern({ cmd: 'get_inventory' })
  getInventory(data: any) {
    return this.productService.getInventory(data.sku);
  }

  @MessagePattern({ cmd: 'update_inventory' })
  updateInventory(data: any) {
    return this.productService.updateInventory(data.sku, data);
  }
}
