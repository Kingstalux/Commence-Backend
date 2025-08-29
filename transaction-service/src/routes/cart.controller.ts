import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CartService } from '../app.service';

@Controller('carts')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  findAll() {
    return this.cartService.findAllCarts();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartService.findCartById(id);
  }

  @Post()
  create(@Body() createCartDto: any) {
    return this.cartService.createCart(createCartDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCartDto: any) {
    return this.cartService.updateCart(id, updateCartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartService.deleteCart(id);
  }
}
