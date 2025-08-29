
import { Injectable } from '@nestjs/common';
import Cart from './models/cart.schema';
import Event from './models/event.schema';
import Order from './models/order.schema';
import Payment from './models/payment.schema';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class CartService {
  async findAllCarts() {
    return Cart.find();
  }
  async findCartById(id: string) {
    return Cart.findById(id);
  }
  async createCart(data: any) {
    return Cart.create(data);
  }
  async updateCart(id: string, data: any) {
    return Cart.findByIdAndUpdate(id, data, { new: true });
  }
  async deleteCart(id: string) {
    return Cart.findByIdAndDelete(id);
  }
}

@Injectable()
export class EventService {
  async findAllEvents() {
    return Event.find();
  }
  async findEventById(id: string) {
    return Event.findById(id);
  }
  async createEvent(data: any) {
    return Event.create(data);
  }
}

@Injectable()
export class OrderService {
  async findAllOrders() {
    return Order.find();
  }
  async findOrderById(id: string) {
    return Order.findById(id);
  }
  async createOrder(data: any) {
    return Order.create(data);
  }
  async updateOrder(id: string, data: any) {
    return Order.findByIdAndUpdate(id, data, { new: true });
  }
  async deleteOrder(id: string) {
    return Order.findByIdAndDelete(id);
  }
}

@Injectable()
export class PaymentService {
  async findAllPayments() {
    return Payment.find();
  }
  async findPaymentById(id: string) {
    return Payment.findById(id);
  }
  async createPayment(data: any) {
    return Payment.create(data);
  }
  async updatePayment(id: string, data: any) {
    return Payment.findByIdAndUpdate(id, data, { new: true });
  }
  async deletePayment(id: string) {
    return Payment.findByIdAndDelete(id);
  }
}
