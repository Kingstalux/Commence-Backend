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
const jwt_1 = require("@nestjs/jwt");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_controller_1 = require("./routes/auth.controller");
const profile_controller_1 = require("./routes/profile.controller");
const role_controller_1 = require("./routes/role.controller");
const user_controller_1 = require("./routes/user.controller");
const payment_methods_controller_1 = require("./routes/payment-methods.controller");
const products_controller_1 = require("./routes/products.controller");
const cart_controller_1 = require("./routes/cart.controller");
const user_schema_1 = require("./models/user.schema");
const cart_schema_1 = require("./models/cart.schema");
const product_schema_1 = require("./models/product.schema");
const payment_method_schema_1 = require("./models/payment-method.schema");
const role_schema_1 = require("./models/role.schema");
const userRole_schema_1 = require("./models/userRole.schema");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost:27017/userservice', {
                serverSelectionTimeoutMS: 5000,
                socketTimeoutMS: 45000,
            }),
            mongoose_1.MongooseModule.forFeature([
                { name: user_schema_1.User.name, schema: user_schema_1.UserSchema },
                { name: cart_schema_1.Cart.name, schema: cart_schema_1.CartSchema },
                { name: product_schema_1.ProductModel.name, schema: product_schema_1.ProductSchema },
                { name: payment_method_schema_1.PaymentMethod.name, schema: payment_method_schema_1.PaymentMethodSchema },
                { name: role_schema_1.Role.name, schema: role_schema_1.RoleSchema },
                { name: userRole_schema_1.UserRole.name, schema: userRole_schema_1.UserRoleSchema },
            ]),
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET || 'your-default-secret-key',
                signOptions: {
                    expiresIn: process.env.JWT_EXPIRES_IN || '24h',
                    issuer: 'commence-user-service',
                },
            }),
        ],
        controllers: [
            app_controller_1.AppController,
            auth_controller_1.AuthController,
            profile_controller_1.ProfileController,
            role_controller_1.RoleController,
            user_controller_1.UserController,
            payment_methods_controller_1.PaymentMethodsController,
            products_controller_1.ProductsController,
            cart_controller_1.CartController,
        ],
        providers: [
            app_service_1.AppService,
            app_service_1.UserService,
            app_service_1.PaymentMethodService,
            app_service_1.ProductService,
            app_service_1.CartService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map