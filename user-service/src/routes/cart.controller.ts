import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CartService } from '../app.service';

@Controller()
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @MessagePattern({ cmd: 'get_cart' })
  getCart(data: any) {
    return this.cartService.getCart(data.userId);
  }

  @MessagePattern({ cmd: 'add_cart_item' })
  addCartItem(data: any) {
    return this.cartService.addCartItem(data.userId, data);
  }

  @MessagePattern({ cmd: 'update_cart_item' })
  updateCartItem(data: any) {
    return this.cartService.updateCartItem(data.userId, data.itemId, data);
  }

  @MessagePattern({ cmd: 'remove_cart_item' })
  removeCartItem(data: any) {
    return this.cartService.removeCartItem(data.userId, data.itemId);
  }

  @MessagePattern({ cmd: 'clear_cart' })
  clearCart(data: any) {
    return this.cartService.clearCart(data.userId);
  }

  @MessagePattern({ cmd: 'apply_discount' })
  applyDiscount(data: any) {
    return this.cartService.applyDiscount(data.userId, data.discountCode);
  }

  @MessagePattern({ cmd: 'remove_discount' })
  removeDiscount(data: any) {
    return this.cartService.removeDiscount(data.userId);
  }
}
