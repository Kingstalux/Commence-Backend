import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PaymentMethodService } from '../app.service';

@Controller()
export class PaymentMethodsController {
  constructor(private readonly paymentMethodService: PaymentMethodService) {}

  @MessagePattern({ cmd: 'get_payment_methods' })
  getPaymentMethods(data: any) {
    return this.paymentMethodService.getUserPaymentMethods(data.userId);
  }

  @MessagePattern({ cmd: 'add_payment_method' })
  addPaymentMethod(data: any) {
    return this.paymentMethodService.addPaymentMethod(data.userId, data);
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
    return this.paymentMethodService.setDefaultPaymentMethod(
      data.id,
      data.userId,
    );
  }
}
