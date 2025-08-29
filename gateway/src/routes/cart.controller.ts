import { Controller, Get, Post, Put, Delete, Body, Param, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('carts')
export class CartController {
  constructor(@Inject('TRANSACTION_SERVICE') private readonly client: ClientProxy) {}

  @Get()
  findAll() {
    return this.client.send({ cmd: 'findAllCarts' }, {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.client.send({ cmd: 'findCartById' }, { id });
  }

  @Post()
  create(@Body() createCartDto: any) {
    return this.client.send({ cmd: 'createCart' }, createCartDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCartDto: any) {
    return this.client.send({ cmd: 'updateCart' }, { id, ...updateCartDto });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.client.send({ cmd: 'deleteCart' }, { id });
  }
}
