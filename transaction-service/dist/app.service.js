"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = exports.OrderService = exports.EventService = exports.CartService = exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const cart_schema_1 = require("./models/cart.schema");
const event_schema_1 = require("./models/event.schema");
const order_schema_1 = require("./models/order.schema");
const payment_schema_1 = require("./models/payment.schema");
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
let CartService = class CartService {
    async findAllCarts() {
        return cart_schema_1.default.find();
    }
    async findCartById(id) {
        return cart_schema_1.default.findById(id);
    }
    async createCart(data) {
        return cart_schema_1.default.create(data);
    }
    async updateCart(id, data) {
        return cart_schema_1.default.findByIdAndUpdate(id, data, { new: true });
    }
    async deleteCart(id) {
        return cart_schema_1.default.findByIdAndDelete(id);
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)()
], CartService);
let EventService = class EventService {
    async findAllEvents() {
        return event_schema_1.default.find();
    }
    async findEventById(id) {
        return event_schema_1.default.findById(id);
    }
    async createEvent(data) {
        return event_schema_1.default.create(data);
    }
};
exports.EventService = EventService;
exports.EventService = EventService = __decorate([
    (0, common_1.Injectable)()
], EventService);
let OrderService = class OrderService {
    async findAllOrders() {
        return order_schema_1.default.find();
    }
    async findOrderById(id) {
        return order_schema_1.default.findById(id);
    }
    async createOrder(data) {
        return order_schema_1.default.create(data);
    }
    async updateOrder(id, data) {
        return order_schema_1.default.findByIdAndUpdate(id, data, { new: true });
    }
    async deleteOrder(id) {
        return order_schema_1.default.findByIdAndDelete(id);
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)()
], OrderService);
let PaymentService = class PaymentService {
    async findAllPayments() {
        return payment_schema_1.default.find();
    }
    async findPaymentById(id) {
        return payment_schema_1.default.findById(id);
    }
    async createPayment(data) {
        return payment_schema_1.default.create(data);
    }
    async updatePayment(id, data) {
        return payment_schema_1.default.findByIdAndUpdate(id, data, { new: true });
    }
    async deletePayment(id) {
        return payment_schema_1.default.findByIdAndDelete(id);
    }
};
exports.PaymentService = PaymentService;
exports.PaymentService = PaymentService = __decorate([
    (0, common_1.Injectable)()
], PaymentService);
//# sourceMappingURL=app.service.js.map