import { Controller, Get, Put, Body, Param, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('inventory')
export class InventoryController {
  constructor(@Inject('ADMIN_SERVICE') private readonly client: ClientProxy) {}

  @Get(':sku')
  getInventory(@Param('sku') sku: string) {
    return this.client.send({ cmd: 'getInventory' }, { sku });
  }

  @Put(':sku')
  updateInventory(@Param('sku') sku: string, @Body() updateInventoryDto: any) {
    return this.client.send({ cmd: 'updateInventory' }, { sku, ...updateInventoryDto });
  }
}
