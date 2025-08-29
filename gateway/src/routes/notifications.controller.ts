import { Controller, Post, Body, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('api/notifications')
export class NotificationsController {
  constructor(
    @Inject('TRANSACTION_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Post('order-confirmation')
  sendOrderConfirmation(@Body() data: any) {
    return this.client.send({ cmd: 'send_order_confirmation' }, data);
  }

  @Post('shipping-update')
  sendShippingUpdate(@Body() data: any) {
    return this.client.send({ cmd: 'send_shipping_update' }, data);
  }

  @Post('delivery-confirmation')
  sendDeliveryConfirmation(@Body() data: any) {
    return this.client.send({ cmd: 'send_delivery_confirmation' }, data);
  }
}
