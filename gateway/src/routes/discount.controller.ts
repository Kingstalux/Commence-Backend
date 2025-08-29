import { Controller, Get, Post, Put, Delete, Body, Param, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('discounts')
export class DiscountController {
  constructor(@Inject('ADMIN_SERVICE') private readonly client: ClientProxy) {}

  @Get()
  findAll() {
    return this.client.send({ cmd: 'findAllDiscounts' }, {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.client.send({ cmd: 'findDiscountById' }, { id });
  }

  @Post()
  create(@Body() createDiscountDto: any) {
    return this.client.send({ cmd: 'createDiscount' }, createDiscountDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDiscountDto: any) {
    return this.client.send({ cmd: 'updateDiscount' }, { id, ...updateDiscountDto });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.client.send({ cmd: 'deleteDiscount' }, { id });
  }
}
