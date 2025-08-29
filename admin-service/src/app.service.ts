
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  findAllProducts() { return []; }
  findProductById(id: string) { return {}; }
  createProduct(dto: any) { return {}; }
  updateProduct(id: string, dto: any) { return {}; }
  deleteProduct(id: string) { return {}; }
  getInventory(sku: string) { return {}; }
  updateInventory(sku: string, dto: any) { return {}; }
}

@Injectable()
export class DiscountService {
  findAllDiscounts() { return []; }
  findDiscountById(id: string) { return {}; }
  createDiscount(dto: any) { return {}; }
  updateDiscount(id: string, dto: any) { return {}; }
  deleteDiscount(id: string) { return {}; }
}

@Injectable()
export class MediaService {
  findAllMedia() { return []; }
  findMediaById(id: string) { return {}; }
  createMedia(dto: any) { return {}; }
  updateMedia(id: string, dto: any) { return {}; }
  deleteMedia(id: string) { return {}; }
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
