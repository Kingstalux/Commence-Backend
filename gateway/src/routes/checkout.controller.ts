import { Controller, Post, Body, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('api/checkout')
export class CheckoutController {
  constructor(
    @Inject('TRANSACTION_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Post('process')
  processCheckout(@Body() data: any) {
    return this.client.send({ cmd: 'process_checkout' }, data);
  }

  @Post('validate')
  validateCheckout(@Body() data: any) {
    return this.client.send({ cmd: 'validate_checkout' }, data);
  }
}
