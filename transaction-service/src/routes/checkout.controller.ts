import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CheckoutService } from '../app.service';

@Controller()
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}

  @MessagePattern({ cmd: 'process_checkout' })
  processCheckout(data: any) {
    return this.checkoutService.processCheckout(data);
  }

  @MessagePattern({ cmd: 'validate_checkout' })
  validateCheckout(data: any) {
    return this.checkoutService.validateCheckout(data);
  }
}
