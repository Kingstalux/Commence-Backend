import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { OrderService } from '../app.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  findAll() {
    return this.orderService.findAllOrders();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOrderById(id);
  }

  @Post()
  create(@Body() createOrderDto: any) {
    return this.orderService.createOrder(createOrderDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: any) {
    return this.orderService.updateOrder(id, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.deleteOrder(id);
  }
}
