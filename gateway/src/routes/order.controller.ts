import { Controller, Get, Post, Put, Delete, Body, Param, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('orders')
export class OrderController {
  constructor(@Inject('TRANSACTION_SERVICE') private readonly client: ClientProxy) {}

  @Get()
  findAll() {
    return this.client.send({ cmd: 'findAllOrders' }, {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.client.send({ cmd: 'findOrderById' }, { id });
  }

  @Post()
  create(@Body() createOrderDto: any) {
    return this.client.send({ cmd: 'createOrder' }, createOrderDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: any) {
    return this.client.send({ cmd: 'updateOrder' }, { id, ...updateOrderDto });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.client.send({ cmd: 'deleteOrder' }, { id });
  }
}
