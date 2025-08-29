import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { OrderService } from '../app.service';

@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @MessagePattern({ cmd: 'get_orders' })
  getOrders(data: any) {
    if (data.userId) {
      return this.orderService.getUserOrders(data.userId);
    }
    return this.orderService.findAllOrders();
  }

  @MessagePattern({ cmd: 'get_order_by_id' })
  findOne(data: any) {
    return this.orderService.findOrderById(data.id);
  }

  @MessagePattern({ cmd: 'create_order' })
  create(createOrderDto: any) {
    return this.orderService.createOrder(createOrderDto);
  }

  @MessagePattern({ cmd: 'cancel_order' })
  cancelOrder(data: any) {
    return this.orderService.cancelOrder(data.id);
  }

  @MessagePattern({ cmd: 'get_order_receipt' })
  getOrderReceipt(data: any) {
    return this.orderService.getOrderReceipt(data.id);
  }

  @MessagePattern({ cmd: 'refund_order' })
  refundOrder(data: any) {
    return this.orderService.refundOrder(data.id, data);
  }
}
