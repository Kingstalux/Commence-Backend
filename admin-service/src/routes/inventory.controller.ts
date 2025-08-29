import { Controller, Get, Put, Body, Param } from '@nestjs/common';
import { ProductService } from '../app.service';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly productService: ProductService) {}

  @Get(':sku')
  getInventory(@Param('sku') sku: string) {
    return this.productService.getInventory(sku);
  }

  @Put(':sku')
  updateInventory(@Param('sku') sku: string, @Body() updateInventoryDto: any) {
    return this.productService.updateInventory(sku, updateInventoryDto);
  }
}
