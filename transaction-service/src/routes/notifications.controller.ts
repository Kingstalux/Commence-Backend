import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { NotificationService } from '../app.service';

@Controller()
export class NotificationsController {
  constructor(private readonly notificationService: NotificationService) {}

  @MessagePattern({ cmd: 'send_order_confirmation' })
  sendOrderConfirmation(data: any) {
    return this.notificationService.sendOrderConfirmation(data);
  }

  @MessagePattern({ cmd: 'send_shipping_update' })
  sendShippingUpdate(data: any) {
    return this.notificationService.sendShippingUpdate(data);
  }

  @MessagePattern({ cmd: 'send_delivery_confirmation' })
  sendDeliveryConfirmation(data: any) {
    return this.notificationService.sendDeliveryConfirmation(data);
  }
}
