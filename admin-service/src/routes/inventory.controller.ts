import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ProductService } from '../app.service';

@Controller()
export class InventoryController {
  constructor(private readonly productService: ProductService) {}

  @MessagePattern({ cmd: 'admin_get_inventory' })
  getInventory(data: any) {
    return this.productService.getInventory(data.sku);
  }

  @MessagePattern({ cmd: 'admin_update_inventory' })
  updateInventory(data: any) {
    return this.productService.updateInventory(data.sku, data);
  }
}
