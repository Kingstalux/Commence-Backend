import { Controller, Get, Post, Put, Delete, Body, Param, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('payments')
export class PaymentController {
  constructor(@Inject('TRANSACTION_SERVICE') private readonly client: ClientProxy) {}

  @Get()
  findAll() {
    return this.client.send({ cmd: 'findAllPayments' }, {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.client.send({ cmd: 'findPaymentById' }, { id });
  }

  @Post()
  create(@Body() createPaymentDto: any) {
    return this.client.send({ cmd: 'createPayment' }, createPaymentDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePaymentDto: any) {
    return this.client.send({ cmd: 'updatePayment' }, { id, ...updatePaymentDto });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.client.send({ cmd: 'deletePayment' }, { id });
  }
}
