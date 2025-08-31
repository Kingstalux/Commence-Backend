import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { JwtService } from '@nestjs/jwt';
import { CartService } from '../app.service';

@Controller()
export class CartController {
  constructor(
    private readonly cartService: CartService,
    private readonly jwtService: JwtService,
  ) {}

  private extractUserIdFromToken(token: string): string {
    try {
      // Remove 'Bearer ' prefix if present
      const cleanToken = token.replace(/^Bearer\s+/, '');

      // Verify and decode the JWT token
      const payload = this.jwtService.verify(cleanToken);

      // Return the user ID from the 'sub' (subject) field
      return payload.sub;
    } catch (error) {
      console.error('CartController: Invalid or expired token:', error.message);
      throw new Error('Invalid or expired authentication token');
    }
  }

  @MessagePattern({ cmd: 'get_cart' })
  getCart(data: any) {
    const userId = this.extractUserIdFromToken(data.token);
    return this.cartService.getCart(userId);
  }

  @MessagePattern({ cmd: 'add_cart_item' })
  addCartItem(data: any) {
    const userId = this.extractUserIdFromToken(data.token);
    return this.cartService.addCartItem(userId, data);
  }

  @MessagePattern({ cmd: 'update_cart_item' })
  updateCartItem(data: any) {
    const userId = this.extractUserIdFromToken(data.token);
    return this.cartService.updateCartItem(userId, data.itemId, data);
  }

  @MessagePattern({ cmd: 'remove_cart_item' })
  removeCartItem(data: any) {
    const userId = this.extractUserIdFromToken(data.token);
    return this.cartService.removeCartItem(userId, data.itemId);
  }

  @MessagePattern({ cmd: 'clear_cart' })
  clearCart(data: any) {
    const userId = this.extractUserIdFromToken(data.token);
    return this.cartService.clearCart(userId);
  }

  @MessagePattern({ cmd: 'apply_discount' })
  applyDiscount(data: any) {
    const userId = this.extractUserIdFromToken(data.token);
    return this.cartService.applyDiscount(userId, data.discountCode);
  }

  @MessagePattern({ cmd: 'remove_discount' })
  removeDiscount(data: any) {
    const userId = this.extractUserIdFromToken(data.token);
    return this.cartService.removeDiscount(userId);
  }
}
