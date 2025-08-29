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
const microservices_1 = require("@nestjs/microservices");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_controller_1 = require("./routes/user.controller");
const auth_controller_1 = require("./routes/auth.controller");
const profile_controller_1 = require("./routes/profile.controller");
const role_controller_1 = require("./routes/role.controller");
const product_controller_1 = require("./routes/product.controller");
const inventory_controller_1 = require("./routes/inventory.controller");
const discount_controller_1 = require("./routes/discount.controller");
const media_controller_1 = require("./routes/media.controller");
const cart_controller_1 = require("./routes/cart.controller");
const order_controller_1 = require("./routes/order.controller");
const payment_controller_1 = require("./routes/payment.controller");
const event_controller_1 = require("./routes/event.controller");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'USER_SERVICE',
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: ['amqp://localhost:5672'],
                        queue: 'user_queue',
                        queueOptions: { durable: false },
                    },
                },
                {
                    name: 'ADMIN_SERVICE',
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: ['amqp://localhost:5672'],
                        queue: 'admin_queue',
                        queueOptions: { durable: false },
                    },
                },
                {
                    name: 'TRANSACTION_SERVICE',
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: ['amqp://localhost:5672'],
                        queue: 'transaction_queue',
                        queueOptions: { durable: false },
                    },
                },
            ]),
        ],
        controllers: [
            app_controller_1.AppController,
            user_controller_1.UserController,
            auth_controller_1.AuthController,
            profile_controller_1.ProfileController,
            role_controller_1.RoleController,
            product_controller_1.ProductController,
            inventory_controller_1.InventoryController,
            discount_controller_1.DiscountController,
            media_controller_1.MediaController,
            cart_controller_1.CartController,
            order_controller_1.OrderController,
            payment_controller_1.PaymentController,
            event_controller_1.EventController,
        ],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map