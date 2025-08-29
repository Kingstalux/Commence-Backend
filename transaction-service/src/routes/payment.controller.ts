import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PaymentService } from '../app.service';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get()
  findAll() {
    return this.paymentService.findAllPayments();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentService.findPaymentById(id);
  }

  @Post()
  create(@Body() createPaymentDto: any) {
    return this.paymentService.createPayment(createPaymentDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePaymentDto: any) {
    return this.paymentService.updatePayment(id, updatePaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentService.deletePayment(id);
  }
}
