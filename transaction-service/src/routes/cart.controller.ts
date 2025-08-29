import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CartService } from '../app.service';

@Controller()
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @MessagePattern({ cmd: 'get_all_carts' })
  findAll() {
    return this.cartService.findAllCarts();
  }

  @MessagePattern({ cmd: 'get_cart_by_id' })
  findOne(data: any) {
    return this.cartService.findCartById(data.id);
  }

  @MessagePattern({ cmd: 'get_cart_by_user_id' })
  findByUserId(data: any) {
    return this.cartService.findCartByUserId(data.userId);
  }

  @MessagePattern({ cmd: 'create_cart' })
  create(createCartDto: any) {
    return this.cartService.createCart(createCartDto);
  }

  @MessagePattern({ cmd: 'update_cart' })
  update(data: any) {
    return this.cartService.updateCart(data.id, data);
  }

  @MessagePattern({ cmd: 'delete_cart' })
  remove(data: any) {
    return this.cartService.deleteCart(data.id);
  }
}
