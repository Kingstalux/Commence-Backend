import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { JwtService } from '@nestjs/jwt';
import { OrderService } from '../app.service';

@Controller()
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    private readonly jwtService: JwtService,
  ) {}

  private extractUserIdFromToken(token: string): string {
    try {
      // Remove 'Bearer ' prefix if present
      const cleanToken = token.replace(/^Bearer\s+/, '');

      console.log('OrderController: Attempting to verify token...');

      // Verify and decode the JWT token
      const payload = this.jwtService.verify(cleanToken);

      console.log(
        'OrderController: Token verified successfully, userId:',
        payload.sub,
      );

      // Return the user ID from the 'sub' (subject) field
      return payload.sub;
    } catch (error) {
      console.error(
        'OrderController: Invalid or expired token:',
        error.message,
      );
      console.error(
        'OrderController: Token verification failed for token length:',
        token?.length,
      );
      throw new Error('Invalid or expired authentication token');
    }
  }

  @MessagePattern({ cmd: 'get_orders' })
  getOrders(data: any) {
    if (data.token) {
      const userId = this.extractUserIdFromToken(data.token);
      return this.orderService.getUserOrders(userId);
    }
    return this.orderService.findAllOrders();
  }

  @MessagePattern({ cmd: 'get_order_by_id' })
  findOne(data: any) {
    return this.orderService.findOrderById(data.id);
  }

  @MessagePattern({ cmd: 'create_order' })
  create(data: any) {
    const userId = this.extractUserIdFromToken(data.token);
    return this.orderService.createOrder({ ...data, userId });
  }

  @MessagePattern({ cmd: 'checkout' })
  checkout(data: any) {
    const userId = this.extractUserIdFromToken(data.token);
    return this.orderService.createOrderFromCheckout({ ...data, userId });
  }

  @MessagePattern({ cmd: 'cancel_order' })
  cancelOrder(data: any) {
    return this.orderService.cancelOrder(data.id);
  }

  @MessagePattern({ cmd: 'get_order_receipt' })
  getOrderReceipt(data: any) {
    return this.orderService.getOrderReceipt(data.id);
  }

  @MessagePattern({ cmd: 'refund_order' })
  refundOrder(data: any) {
    return this.orderService.refundOrder(data.id, data);
  }
}
