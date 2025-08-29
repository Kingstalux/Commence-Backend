import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PaymentService } from '../app.service';

@Controller()
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @MessagePattern({ cmd: 'get_all_payments' })
  findAll() {
    return this.paymentService.findAllPayments();
  }

  @MessagePattern({ cmd: 'get_payment_by_id' })
  findOne(data: any) {
    return this.paymentService.findPaymentById(data.id);
  }

  @MessagePattern({ cmd: 'create_payment' })
  create(createPaymentDto: any) {
    return this.paymentService.createPayment(createPaymentDto);
  }

  @MessagePattern({ cmd: 'process_payment' })
  processPayment(data: any) {
    return this.paymentService.processPayment(data);
  }

  @MessagePattern({ cmd: 'refund_payment' })
  refundPayment(data: any) {
    return this.paymentService.refundPayment(data.id, data.amount);
  }

  @MessagePattern({ cmd: 'update_payment' })
  update(data: any) {
    return this.paymentService.updatePayment(data.id, data);
  }
}
