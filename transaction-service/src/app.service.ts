import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Order, OrderDocument } from './models/order.schema';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class ProductCatalogService {
  private products = [
    {
      id: '1',
      name: 'Sample Product 1',
      price: 99.99,
      category: 'Electronics',
      featured: true,
    },
    {
      id: '2',
      name: 'Sample Product 2',
      price: 149.99,
      category: 'Clothing',
      featured: false,
    },
    {
      id: '3',
      name: 'Sample Product 3',
      price: 199.99,
      category: 'Electronics',
      featured: true,
    },
  ]; // Mock products

  async getProducts(filters?: any) {
    let result = [...this.products];
    if (filters?.category) {
      result = result.filter((p) => p.category === filters.category);
    }
    if (filters?.search) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(filters.search.toLowerCase()),
      );
    }
    return result;
  }

  async getProductById(id: string) {
    return this.products.find((p) => p.id === id) || null;
  }

  async searchProducts(query: string) {
    return this.products.filter(
      (p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()),
    );
  }

  async getCategories() {
    const categories = [...new Set(this.products.map((p) => p.category))];
    return categories;
  }

  async getFeaturedProducts() {
    return this.products.filter((p) => p.featured);
  }
}

@Injectable()
export class CheckoutService {
  async processCheckout(data: any) {
    // Mock checkout processing
    const order = {
      id: Date.now().toString(),
      userId: data.userId,
      items: data.items,
      total: data.total,
      status: 'processing',
      paymentMethod: data.paymentMethod,
      createdAt: new Date(),
    };

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { success: true, order };
  }

  async validateCheckout(data: any) {
    // Validate cart items, inventory, prices, etc.
    const validation = {
      valid: true,
      errors: [],
      warnings: [],
    };

    if (!data.items || data.items.length === 0) {
      validation.valid = false;
      validation.errors.push('Cart is empty');
    }

    if (!data.paymentMethod) {
      validation.valid = false;
      validation.errors.push('Payment method required');
    }

    return validation;
  }
}

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}

  async findAllOrders() {
    return await this.orderModel.find().exec();
  }

  async getUserOrders(userId: string) {
    return await this.orderModel.find({ user_id: userId }).exec();
  }

  async findOrderById(id: string) {
    return await this.orderModel.findById(id).exec();
  }

  async createOrder(data: any) {
    try {
      const order = new this.orderModel({
        user_id: new Types.ObjectId(data.userId),
        total_cents: Math.round(data.total * 100), // Convert to cents
        currency: data.currency || 'USD',
        status: 'PENDING',
      });

      return await order.save();
    } catch (error) {
      console.error('OrderService: Error creating order:', error);
      throw new Error(`Failed to create order: ${error.message}`);
    }
  }

  async createOrderFromCheckout(data: any) {
    try {
      console.log('OrderService: Creating order from checkout with data:', {
        userId: data.userId,
        total: data.total,
        itemsCount: data.items?.length,
        paymentMethodId: data.paymentMethodId,
      });

      // Create the order
      const order = await this.createOrder(data);

      // Return order with additional checkout info
      const result = {
        ...order.toObject(),
        orderId: order._id.toString(),
        status: 'success',
        message: 'Your order has been placed successfully!',
        estimatedDelivery: new Date(
          Date.now() + 7 * 24 * 60 * 60 * 1000,
        ).toLocaleDateString(),
        trackingNumber: `TRK${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      };

      console.log('OrderService: Order created successfully:', result.orderId);
      return result;
    } catch (error) {
      console.error('OrderService: Error in createOrderFromCheckout:', error);
      throw new Error(`Checkout failed: ${error.message}`);
    }
  }

  async updateOrder(id: string, data: any) {
    return await this.orderModel
      .findByIdAndUpdate(id, data, { new: true })
      .exec();
  }

  async cancelOrder(id: string) {
    return await this.orderModel
      .findByIdAndUpdate(
        id,
        { status: 'FAILED' }, // Using FAILED instead of cancelled to match schema
        { new: true },
      )
      .exec();
  }

  async getOrderReceipt(id: string) {
    const order = await this.findOrderById(id);
    if (order) {
      return {
        ...order.toObject(),
        receiptNumber: `REC-${id}`,
        downloadUrl: `/receipts/${id}.pdf`,
      };
    }
    return null;
  }

  async refundOrder(id: string, data: any) {
    return await this.orderModel
      .findByIdAndUpdate(
        id,
        {
          status: 'FAILED', // Using FAILED for refunded status to match schema
          // Note: You might want to add a refund field to the schema for proper tracking
        },
        { new: true },
      )
      .exec();
  }
}

@Injectable()
export class TransactionService {
  private transactions = []; // Mock storage

  async getTransactions(userId?: string) {
    if (userId) {
      return this.transactions.filter((t) => t.userId === userId);
    }
    return this.transactions;
  }

  async getTransactionById(id: string) {
    return this.transactions.find((t) => t.id === id) || null;
  }

  async createTransaction(data: any) {
    const transaction = {
      id: Date.now().toString(),
      ...data,
      createdAt: new Date(),
    };
    this.transactions.push(transaction);
    return transaction;
  }

  async getAdminTransactions() {
    return this.transactions;
  }

  async getTransactionAnalytics() {
    const total = this.transactions.length;
    const totalAmount = this.transactions.reduce(
      (sum, t) => sum + (t.amount || 0),
      0,
    );
    const avgAmount = total > 0 ? totalAmount / total : 0;

    return {
      total,
      totalAmount,
      avgAmount,
      dailyTransactions: this.groupTransactionsByDay(),
      topCategories: this.getTopCategories(),
    };
  }

  async exportTransactions(filters: any) {
    // Mock export functionality
    const csvData = this.transactions
      .map((t) => `${t.id},${t.userId},${t.amount},${t.status},${t.createdAt}`)
      .join('\n');

    return {
      filename: `transactions_${new Date().toISOString().split('T')[0]}.csv`,
      data: csvData,
      downloadUrl: '/exports/transactions.csv',
    };
  }

  private groupTransactionsByDay() {
    // Group transactions by day for analytics
    return {};
  }

  private getTopCategories() {
    // Get top transaction categories
    return [];
  }
}

@Injectable()
export class NotificationService {
  async sendOrderConfirmation(data: any) {
    // Mock email/SMS notification
    console.log(
      `Sending order confirmation to ${data.email} for order ${data.orderId}`,
    );
    return { sent: true, type: 'order_confirmation' };
  }

  async sendShippingUpdate(data: any) {
    // Mock shipping notification
    console.log(
      `Sending shipping update to ${data.email} for order ${data.orderId}`,
    );
    return { sent: true, type: 'shipping_update' };
  }

  async sendDeliveryConfirmation(data: any) {
    // Mock delivery notification
    console.log(
      `Sending delivery confirmation to ${data.email} for order ${data.orderId}`,
    );
    return { sent: true, type: 'delivery_confirmation' };
  }
}

@Injectable()
export class CartService {
  private carts = new Map(); // Mock storage

  async findAllCarts() {
    return Array.from(this.carts.values());
  }

  async findCartById(id: string) {
    return this.carts.get(id) || null;
  }

  async findCartByUserId(userId: string) {
    // Find cart by user ID
    const carts = Array.from(this.carts.values());
    return carts.find((cart) => cart.userId === userId) || null;
  }

  async createCart(data: any) {
    const cart = { id: Date.now().toString(), ...data };
    this.carts.set(cart.id, cart);
    return cart;
  }

  async updateCart(id: string, data: any) {
    const cart = this.carts.get(id);
    if (cart) {
      const updatedCart = { ...cart, ...data };
      this.carts.set(id, updatedCart);
      return updatedCart;
    }
    return null;
  }

  async deleteCart(id: string) {
    const cart = this.carts.get(id);
    if (cart) {
      this.carts.delete(id);
      return cart;
    }
    return null;
  }
}

@Injectable()
export class EventService {
  private events = []; // Mock storage

  async findAllEvents() {
    return this.events;
  }

  async findEventById(id: string) {
    return this.events.find((e) => e.id === id) || null;
  }

  async createEvent(data: any) {
    const event = { id: Date.now().toString(), ...data, createdAt: new Date() };
    this.events.push(event);
    return event;
  }

  async logCheckoutEvent(data: any) {
    return this.createEvent({
      type: 'checkout',
      ...data,
    });
  }

  async logOrderEvent(data: any) {
    return this.createEvent({
      type: 'order',
      ...data,
    });
  }
}

@Injectable()
export class PaymentService {
  private payments = []; // Mock storage

  async findAllPayments() {
    return this.payments;
  }

  async findPaymentById(id: string) {
    return this.payments.find((p) => p.id === id) || null;
  }

  async createPayment(data: any) {
    const payment = {
      id: Date.now().toString(),
      ...data,
      createdAt: new Date(),
    };
    this.payments.push(payment);
    return payment;
  }

  async updatePayment(id: string, data: any) {
    const index = this.payments.findIndex((p) => p.id === id);
    if (index > -1) {
      this.payments[index] = { ...this.payments[index], ...data };
      return this.payments[index];
    }
    return null;
  }

  async processPayment(data: any) {
    // Mock payment processing
    const payment = await this.createPayment({
      ...data,
      status: 'processing',
    });

    // Simulate payment processing delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    payment.status = 'completed';
    payment.processedAt = new Date();

    return payment;
  }

  async refundPayment(id: string, amount: number) {
    const payment = this.findPaymentById(id);
    if (payment) {
      const refund = await this.createPayment({
        originalPaymentId: id,
        amount: -amount,
        type: 'refund',
        status: 'completed',
      });
      return refund;
    }
    return null;
  }
}
