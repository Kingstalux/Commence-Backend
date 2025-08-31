import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Headers,
  Inject,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('api/cart')
export class CartController {
  constructor(@Inject('USER_SERVICE') private readonly client: ClientProxy) {}

  @Get()
  getCart(@Headers('authorization') token: string) {
    return this.client.send({ cmd: 'get_cart' }, { token });
  }

  @Post('items')
  addCartItem(@Body() data: any, @Headers('authorization') token: string) {
    return this.client.send({ cmd: 'add_cart_item' }, { ...data, token });
  }

  @Put('items/:id')
  updateCartItem(
    @Param('id') itemId: string,
    @Body() data: any,
    @Headers('authorization') token: string,
  ) {
    return this.client.send(
      { cmd: 'update_cart_item' },
      { itemId, ...data, token },
    );
  }

  @Delete('items/:id')
  removeCartItem(
    @Param('id') itemId: string,
    @Headers('authorization') token: string,
  ) {
    return this.client.send({ cmd: 'remove_cart_item' }, { itemId, token });
  }

  @Delete('clear')
  clearCart(@Headers('authorization') token: string) {
    return this.client.send({ cmd: 'clear_cart' }, { token });
  }

  @Post('discount')
  applyDiscount(@Body() data: any, @Headers('authorization') token: string) {
    return this.client.send({ cmd: 'apply_discount' }, { ...data, token });
  }

  @Delete('discount')
  removeDiscount(@Headers('authorization') token: string) {
    return this.client.send({ cmd: 'remove_discount' }, { token });
  }

  @Post('items/:id/like')
  likeCartItem(
    @Param('id') itemId: string,
    @Body() data: any,
    @Headers('authorization') token: string,
  ) {
    return this.client.send(
      { cmd: 'like_cart_item' },
      { itemId, ...data, token },
    );
  }
}
