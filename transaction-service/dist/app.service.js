"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = exports.EventService = exports.CartService = exports.NotificationService = exports.TransactionService = exports.OrderService = exports.CheckoutService = exports.ProductCatalogService = exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
let ProductCatalogService = class ProductCatalogService {
    constructor() {
        this.products = [
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
        ];
    }
    async getProducts(filters) {
        let result = [...this.products];
        if (filters?.category) {
            result = result.filter((p) => p.category === filters.category);
        }
        if (filters?.search) {
            result = result.filter((p) => p.name.toLowerCase().includes(filters.search.toLowerCase()));
        }
        return result;
    }
    async getProductById(id) {
        return this.products.find((p) => p.id === id) || null;
    }
    async searchProducts(query) {
        return this.products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.category.toLowerCase().includes(query.toLowerCase()));
    }
    async getCategories() {
        const categories = [...new Set(this.products.map((p) => p.category))];
        return categories;
    }
    async getFeaturedProducts() {
        return this.products.filter((p) => p.featured);
    }
};
exports.ProductCatalogService = ProductCatalogService;
exports.ProductCatalogService = ProductCatalogService = __decorate([
    (0, common_1.Injectable)()
], ProductCatalogService);
let CheckoutService = class CheckoutService {
    async processCheckout(data) {
        const order = {
            id: Date.now().toString(),
            userId: data.userId,
            items: data.items,
            total: data.total,
            status: 'processing',
            paymentMethod: data.paymentMethod,
            createdAt: new Date(),
        };
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return { success: true, order };
    }
    async validateCheckout(data) {
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
};
exports.CheckoutService = CheckoutService;
exports.CheckoutService = CheckoutService = __decorate([
    (0, common_1.Injectable)()
], CheckoutService);
let OrderService = class OrderService {
    constructor() {
        this.orders = [];
    }
    async findAllOrders() {
        return this.orders;
    }
    async getUserOrders(userId) {
        return this.orders.filter((o) => o.userId === userId);
    }
    async findOrderById(id) {
        return this.orders.find((o) => o.id === id) || null;
    }
    async createOrder(data) {
        const order = { id: Date.now().toString(), ...data, createdAt: new Date() };
        this.orders.push(order);
        return order;
    }
    async updateOrder(id, data) {
        const index = this.orders.findIndex((o) => o.id === id);
        if (index > -1) {
            this.orders[index] = { ...this.orders[index], ...data };
            return this.orders[index];
        }
        return null;
    }
    async cancelOrder(id) {
        const order = await this.findOrderById(id);
        if (order) {
            order.status = 'cancelled';
            order.cancelledAt = new Date();
            return order;
        }
        return null;
    }
    async getOrderReceipt(id) {
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
    async refundOrder(id, data) {
        const order = await this.findOrderById(id);
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
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)()
], OrderService);
let TransactionService = class TransactionService {
    constructor() {
        this.transactions = [];
    }
    async getTransactions(userId) {
        if (userId) {
            return this.transactions.filter((t) => t.userId === userId);
        }
        return this.transactions;
    }
    async getTransactionById(id) {
        return this.transactions.find((t) => t.id === id) || null;
    }
    async createTransaction(data) {
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
        const totalAmount = this.transactions.reduce((sum, t) => sum + (t.amount || 0), 0);
        const avgAmount = total > 0 ? totalAmount / total : 0;
        return {
            total,
            totalAmount,
            avgAmount,
            dailyTransactions: this.groupTransactionsByDay(),
            topCategories: this.getTopCategories(),
        };
    }
    async exportTransactions(filters) {
        const csvData = this.transactions
            .map((t) => `${t.id},${t.userId},${t.amount},${t.status},${t.createdAt}`)
            .join('\n');
        return {
            filename: `transactions_${new Date().toISOString().split('T')[0]}.csv`,
            data: csvData,
            downloadUrl: '/exports/transactions.csv',
        };
    }
    groupTransactionsByDay() {
        return {};
    }
    getTopCategories() {
        return [];
    }
};
exports.TransactionService = TransactionService;
exports.TransactionService = TransactionService = __decorate([
    (0, common_1.Injectable)()
], TransactionService);
let NotificationService = class NotificationService {
    async sendOrderConfirmation(data) {
        console.log(`Sending order confirmation to ${data.email} for order ${data.orderId}`);
        return { sent: true, type: 'order_confirmation' };
    }
    async sendShippingUpdate(data) {
        console.log(`Sending shipping update to ${data.email} for order ${data.orderId}`);
        return { sent: true, type: 'shipping_update' };
    }
    async sendDeliveryConfirmation(data) {
        console.log(`Sending delivery confirmation to ${data.email} for order ${data.orderId}`);
        return { sent: true, type: 'delivery_confirmation' };
    }
};
exports.NotificationService = NotificationService;
exports.NotificationService = NotificationService = __decorate([
    (0, common_1.Injectable)()
], NotificationService);
let CartService = class CartService {
    constructor() {
        this.carts = new Map();
    }
    async findAllCarts() {
        return Array.from(this.carts.values());
    }
    async findCartById(id) {
        return this.carts.get(id) || null;
    }
    async findCartByUserId(userId) {
        const carts = Array.from(this.carts.values());
        return carts.find((cart) => cart.userId === userId) || null;
    }
    async createCart(data) {
        const cart = { id: Date.now().toString(), ...data };
        this.carts.set(cart.id, cart);
        return cart;
    }
    async updateCart(id, data) {
        const cart = this.carts.get(id);
        if (cart) {
            const updatedCart = { ...cart, ...data };
            this.carts.set(id, updatedCart);
            return updatedCart;
        }
        return null;
    }
    async deleteCart(id) {
        const cart = this.carts.get(id);
        if (cart) {
            this.carts.delete(id);
            return cart;
        }
        return null;
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)()
], CartService);
let EventService = class EventService {
    constructor() {
        this.events = [];
    }
    async findAllEvents() {
        return this.events;
    }
    async findEventById(id) {
        return this.events.find((e) => e.id === id) || null;
    }
    async createEvent(data) {
        const event = { id: Date.now().toString(), ...data, createdAt: new Date() };
        this.events.push(event);
        return event;
    }
    async logCheckoutEvent(data) {
        return this.createEvent({
            type: 'checkout',
            ...data,
        });
    }
    async logOrderEvent(data) {
        return this.createEvent({
            type: 'order',
            ...data,
        });
    }
};
exports.EventService = EventService;
exports.EventService = EventService = __decorate([
    (0, common_1.Injectable)()
], EventService);
let PaymentService = class PaymentService {
    constructor() {
        this.payments = [];
    }
    async findAllPayments() {
        return this.payments;
    }
    async findPaymentById(id) {
        return this.payments.find((p) => p.id === id) || null;
    }
    async createPayment(data) {
        const payment = {
            id: Date.now().toString(),
            ...data,
            createdAt: new Date(),
        };
        this.payments.push(payment);
        return payment;
    }
    async updatePayment(id, data) {
        const index = this.payments.findIndex((p) => p.id === id);
        if (index > -1) {
            this.payments[index] = { ...this.payments[index], ...data };
            return this.payments[index];
        }
        return null;
    }
    async processPayment(data) {
        const payment = await this.createPayment({
            ...data,
            status: 'processing',
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
        payment.status = 'completed';
        payment.processedAt = new Date();
        return payment;
    }
    async refundPayment(id, amount) {
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
};
exports.PaymentService = PaymentService;
exports.PaymentService = PaymentService = __decorate([
    (0, common_1.Injectable)()
], PaymentService);
//# sourceMappingURL=app.service.js.map