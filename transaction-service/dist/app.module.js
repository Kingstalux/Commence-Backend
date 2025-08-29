"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const products_controller_1 = require("./routes/products.controller");
const checkout_controller_1 = require("./routes/checkout.controller");
const order_controller_1 = require("./routes/order.controller");
const transactions_controller_1 = require("./routes/transactions.controller");
const notifications_controller_1 = require("./routes/notifications.controller");
const cart_controller_1 = require("./routes/cart.controller");
const event_controller_1 = require("./routes/event.controller");
const payment_controller_1 = require("./routes/payment.controller");
const order_schema_1 = require("./models/order.schema");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost:27017/transactionservice', {
                serverSelectionTimeoutMS: 5000,
                socketTimeoutMS: 45000,
            }),
            mongoose_1.MongooseModule.forFeature([{ name: order_schema_1.Order.name, schema: order_schema_1.OrderSchema }]),
        ],
        controllers: [
            app_controller_1.AppController,
            products_controller_1.ProductsController,
            checkout_controller_1.CheckoutController,
            order_controller_1.OrderController,
            transactions_controller_1.TransactionsController,
            transactions_controller_1.AdminTransactionsController,
            notifications_controller_1.NotificationsController,
            cart_controller_1.CartController,
            event_controller_1.EventController,
            payment_controller_1.PaymentController,
        ],
        providers: [
            app_service_1.AppService,
            app_service_1.ProductCatalogService,
            app_service_1.CheckoutService,
            app_service_1.OrderService,
            app_service_1.TransactionService,
            app_service_1.NotificationService,
            app_service_1.CartService,
            app_service_1.EventService,
            app_service_1.PaymentService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map