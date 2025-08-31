"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = exports.EventService = exports.CartService = exports.NotificationService = exports.TransactionService = exports.OrderService = exports.CheckoutService = exports.ProductCatalogService = exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const order_schema_1 = require("./models/order.schema");
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
    constructor(orderModel) {
        this.orderModel = orderModel;
    }
    async findAllOrders() {
        return await this.orderModel.find().exec();
    }
    async getUserOrders(userId) {
        return await this.orderModel.find({ user_id: userId }).exec();
    }
    async findOrderById(id) {
        return await this.orderModel.findById(id).exec();
    }
    async createOrder(data) {
        try {
            const order = new this.orderModel({
                user_id: new mongoose_2.Types.ObjectId(data.userId),
                total_cents: Math.round(data.total * 100),
                currency: data.currency || 'USD',
                status: 'PENDING',
            });
            return await order.save();
        }
        catch (error) {
            console.error('OrderService: Error creating order:', error);
            throw new Error(`Failed to create order: ${error.message}`);
        }
    }
    async createOrderFromCheckout(data) {
        try {
            console.log('OrderService: Creating order from checkout with data:', {
                userId: data.userId,
                total: data.total,
                itemsCount: data.items?.length,
                paymentMethodId: data.paymentMethodId,
            });
            const order = await this.createOrder(data);
            const result = {
                ...order.toObject(),
                orderId: order._id.toString(),
                status: 'success',
                message: 'Your order has been placed successfully!',
                estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
                trackingNumber: `TRK${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
            };
            console.log('OrderService: Order created successfully:', result.orderId);
            return result;
        }
        catch (error) {
            console.error('OrderService: Error in createOrderFromCheckout:', error);
            throw new Error(`Checkout failed: ${error.message}`);
        }
    }
    async updateOrder(id, data) {
        return await this.orderModel
            .findByIdAndUpdate(id, data, { new: true })
            .exec();
    }
    async cancelOrder(id) {
        return await this.orderModel
            .findByIdAndUpdate(id, { status: 'FAILED' }, { new: true })
            .exec();
    }
    async getOrderReceipt(id) {
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
    async refundOrder(id, data) {
        return await this.orderModel
            .findByIdAndUpdate(id, {
            status: 'FAILED',
        }, { new: true })
            .exec();
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(order_schema_1.Order.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
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