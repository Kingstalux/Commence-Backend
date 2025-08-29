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
const product_controller_1 = require("./routes/product.controller");
const inventory_controller_1 = require("./routes/inventory.controller");
const discount_controller_1 = require("./routes/discount.controller");
const media_controller_1 = require("./routes/media.controller");
const feature_flags_controller_1 = require("./routes/feature-flags.controller");
const system_controller_1 = require("./routes/system.controller");
const admin_users_controller_1 = require("./routes/admin-users.controller");
const product_schema_1 = require("./models/product.schema");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost:27017/adminservice', {
                serverSelectionTimeoutMS: 5000,
                socketTimeoutMS: 45000,
            }),
            mongoose_1.MongooseModule.forFeature([{ name: product_schema_1.Product.name, schema: product_schema_1.ProductSchema }]),
        ],
        controllers: [
            app_controller_1.AppController,
            product_controller_1.ProductController,
            inventory_controller_1.InventoryController,
            discount_controller_1.DiscountController,
            media_controller_1.MediaController,
            feature_flags_controller_1.FeatureFlagsController,
            system_controller_1.SystemController,
            admin_users_controller_1.AdminUsersController,
        ],
        providers: [
            app_service_1.AppService,
            app_service_1.ProductService,
            app_service_1.DiscountService,
            app_service_1.MediaService,
            app_service_1.FeatureFlagService,
            app_service_1.SystemService,
            app_service_1.AdminUserService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map