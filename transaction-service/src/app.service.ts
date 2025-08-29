import { Injectable } from '@nestjs/common';
// import Cart from './models/cart.schema';
// import Event from './models/event.schema';
// import Order from './models/order.schema';
// import Payment from './models/payment.schema';

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
  private orders = []; // Mock storage

  async findAllOrders() {
    return this.orders;
  }

  async getUserOrders(userId: string) {
    return this.orders.filter((o) => o.userId === userId);
  }

  async findOrderById(id: string) {
    return this.orders.find((o) => o.id === id) || null;
  }

  async createOrder(data: any) {
    const order = { id: Date.now().toString(), ...data, createdAt: new Date() };
    this.orders.push(order);
    return order;
  }

  async updateOrder(id: string, data: any) {
    const index = this.orders.findIndex((o) => o.id === id);
    if (index > -1) {
      this.orders[index] = { ...this.orders[index], ...data };
      return this.orders[index];
    }
    return null;
  }

  async cancelOrder(id: string) {
    const order: any = await this.findOrderById(id);
    if (order) {
      order.status = 'cancelled';
      order.cancelledAt = new Date();
      return order;
    }
    return null;
  }

  async getOrderReceipt(id: string) {
    const order = this.findOrderById(id);
    if (order) {
      return {
        ...order,
        receiptNumber: `REC-${id}`,
        downloadUrl: `/receipts/${id}.pdf`,
      };
    }
    return null;
  }

  async refundOrder(id: string, data: any) {
    const order: any = await this.findOrderById(id);
    if (order) {
      order.status = 'refunded';
      order.refund = {
        amount: data.amount,
        reason: data.reason,
        refundedAt: new Date(),
      };
      return order;
    }
    return null;
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
