import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { JwtService } from '@nestjs/jwt';
import { PaymentMethodService } from '../app.service';

@Controller()
export class PaymentMethodsController {
  constructor(
    private readonly paymentMethodService: PaymentMethodService,
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
      console.error(
        'PaymentMethodsController: Invalid or expired token:',
        error.message,
      );
      throw new Error('Invalid or expired authentication token');
    }
  }

  @MessagePattern({ cmd: 'get_payment_methods' })
  getPaymentMethods(data: any) {
    const userId = this.extractUserIdFromToken(data.token);
    return this.paymentMethodService.getUserPaymentMethods(userId);
  }

  @MessagePattern({ cmd: 'add_payment_method' })
  addPaymentMethod(data: any) {
    const userId = this.extractUserIdFromToken(data.token);
    return this.paymentMethodService.addPaymentMethod(userId, data);
  }

  @MessagePattern({ cmd: 'update_payment_method' })
  updatePaymentMethod(data: any) {
    return this.paymentMethodService.updatePaymentMethod(data.id, data);
  }

  @MessagePattern({ cmd: 'delete_payment_method' })
  deletePaymentMethod(data: any) {
    return this.paymentMethodService.deletePaymentMethod(data.id);
  }

  @MessagePattern({ cmd: 'set_default_payment_method' })
  setDefaultPaymentMethod(data: any) {
    const userId = this.extractUserIdFromToken(data.token);
    return this.paymentMethodService.setDefaultPaymentMethod(data.id, userId);
  }
}
