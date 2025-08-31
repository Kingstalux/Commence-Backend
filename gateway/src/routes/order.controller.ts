import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Headers,
  Inject,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('api/orders')
export class OrderController {
  constructor(
    @Inject('TRANSACTION_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Get()
  getOrders(@Headers('authorization') token: string) {
    return this.client.send({ cmd: 'get_orders' }, { token });
  }

  @Get(':id')
  getOrderById(
    @Param('id') id: string,
    @Headers('authorization') token: string,
  ) {
    return this.client.send({ cmd: 'get_order_by_id' }, { id, token });
  }

  @Post()
  createOrder(
    @Body() createOrderDto: any,
    @Headers('authorization') token: string,
  ) {
    return this.client.send(
      { cmd: 'create_order' },
      { ...createOrderDto, token },
    );
  }

  @Post('checkout')
  checkout(@Body() checkoutData: any, @Headers('authorization') token: string) {
    return this.client.send({ cmd: 'checkout' }, { ...checkoutData, token });
  }

  @Post(':id/cancel')
  cancelOrder(
    @Param('id') id: string,
    @Headers('authorization') token: string,
  ) {
    return this.client.send({ cmd: 'cancel_order' }, { id, token });
  }

  @Get(':id/receipt')
  getOrderReceipt(
    @Param('id') id: string,
    @Headers('authorization') token: string,
  ) {
    return this.client.send({ cmd: 'get_order_receipt' }, { id, token });
  }

  @Post(':id/refund')
  refundOrder(
    @Param('id') id: string,
    @Body() data: any,
    @Headers('authorization') token: string,
  ) {
    return this.client.send({ cmd: 'refund_order' }, { id, ...data, token });
  }
}
