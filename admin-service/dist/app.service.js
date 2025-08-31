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
exports.AppService = exports.AnalyticsService = exports.AdminUserService = exports.SystemService = exports.FeatureFlagService = exports.MediaService = exports.DiscountService = exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
let ProductService = class ProductService {
    constructor(userService) {
        this.userService = userService;
    }
    async findAllProducts() {
        return (0, rxjs_1.firstValueFrom)(this.userService.send({ cmd: 'get_products' }, {}));
    }
    async findProductById(id) {
        return (0, rxjs_1.firstValueFrom)(this.userService.send({ cmd: 'get_product_by_id' }, { id }));
    }
    async createProduct(dto) {
        return (0, rxjs_1.firstValueFrom)(this.userService.send({ cmd: 'admin_create_product' }, dto));
    }
    async updateProduct(id, dto) {
        return (0, rxjs_1.firstValueFrom)(this.userService.send({ cmd: 'admin_update_product' }, { id, ...dto }));
    }
    async deleteProduct(id) {
        return (0, rxjs_1.firstValueFrom)(this.userService.send({ cmd: 'admin_delete_product' }, { id }));
    }
    async bulkImportProducts(products) {
        return (0, rxjs_1.firstValueFrom)(this.userService.send({ cmd: 'admin_bulk_import_products' }, { products }));
    }
    async getInventory(sku) {
        return (0, rxjs_1.firstValueFrom)(this.userService.send({ cmd: 'get_inventory' }, { sku }));
    }
    async updateInventory(sku, dto) {
        return (0, rxjs_1.firstValueFrom)(this.userService.send({ cmd: 'update_inventory' }, { sku, ...dto }));
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], ProductService);
let DiscountService = class DiscountService {
    constructor() {
        this.discounts = [];
    }
    async findAllDiscounts() {
        return this.discounts;
    }
    async findDiscountById(id) {
        return this.discounts.find((d) => d.id === id) || {};
    }
    async createDiscount(dto) {
        const discount = { id: Date.now().toString(), active: true, ...dto };
        this.discounts.push(discount);
        return discount;
    }
    async updateDiscount(id, dto) {
        const index = this.discounts.findIndex((d) => d.id === id);
        if (index > -1) {
            this.discounts[index] = { ...this.discounts[index], ...dto };
            return this.discounts[index];
        }
        return {};
    }
    async deleteDiscount(id) {
        const index = this.discounts.findIndex((d) => d.id === id);
        if (index > -1) {
            return this.discounts.splice(index, 1)[0];
        }
        return {};
    }
    async validateDiscountCode(code) {
        const discount = this.discounts.find((d) => d.code === code && d.active);
        return discount ? { valid: true, discount } : { valid: false };
    }
};
exports.DiscountService = DiscountService;
exports.DiscountService = DiscountService = __decorate([
    (0, common_1.Injectable)()
], DiscountService);
let MediaService = class MediaService {
    constructor() {
        this.media = [];
    }
    async findAllMedia() {
        return this.media;
    }
    async findMediaById(id) {
        return this.media.find((m) => m.id === id) || {};
    }
    async createMedia(dto) {
        const mediaItem = { id: Date.now().toString(), ...dto };
        this.media.push(mediaItem);
        return mediaItem;
    }
    async updateMedia(id, dto) {
        const index = this.media.findIndex((m) => m.id === id);
        if (index > -1) {
            this.media[index] = { ...this.media[index], ...dto };
            return this.media[index];
        }
        return {};
    }
    async deleteMedia(id) {
        const index = this.media.findIndex((m) => m.id === id);
        if (index > -1) {
            return this.media.splice(index, 1)[0];
        }
        return {};
    }
};
exports.MediaService = MediaService;
exports.MediaService = MediaService = __decorate([
    (0, common_1.Injectable)()
], MediaService);
let FeatureFlagService = class FeatureFlagService {
    constructor() {
        this.flags = new Map([
            ['burst_checkout_enabled', false],
            ['new_ui_enabled', true],
            ['advanced_analytics', false],
        ]);
    }
    async getFeatureFlags() {
        return Object.fromEntries(this.flags);
    }
    async updateFeatureFlag(flag, value) {
        this.flags.set(flag, value);
        return { flag, value };
    }
};
exports.FeatureFlagService = FeatureFlagService;
exports.FeatureFlagService = FeatureFlagService = __decorate([
    (0, common_1.Injectable)()
], FeatureFlagService);
let SystemService = class SystemService {
    async getHealth() {
        return {
            status: 'healthy',
            timestamp: new Date().toISOString(),
            services: {
                database: 'connected',
                redis: 'connected',
                queue: 'connected',
            },
        };
    }
    async getStatus() {
        return {
            uptime: process.uptime(),
            memory: process.memoryUsage(),
            cpu: process.cpuUsage(),
            version: '1.0.0',
        };
    }
    async enableBurstCheckout() {
        return { enabled: true, mode: 'burst_checkout' };
    }
};
exports.SystemService = SystemService;
exports.SystemService = SystemService = __decorate([
    (0, common_1.Injectable)()
], SystemService);
let AdminUserService = class AdminUserService {
    constructor() {
        this.users = [];
    }
    async getUsers() {
        return this.users;
    }
    async updateUserRole(userId, role) {
        return { userId, role, updated: true };
    }
    async deleteUser(userId) {
        return { userId, deleted: true };
    }
    async getUserOrders(userId) {
        return [
            { id: '1', userId, amount: 100, status: 'completed' },
            { id: '2', userId, amount: 250, status: 'pending' },
        ];
    }
};
exports.AdminUserService = AdminUserService;
exports.AdminUserService = AdminUserService = __decorate([
    (0, common_1.Injectable)()
], AdminUserService);
let AnalyticsService = class AnalyticsService {
    constructor(productService, discountService, userServiceClient) {
        this.productService = productService;
        this.discountService = discountService;
        this.userServiceClient = userServiceClient;
        this.activityLog = [
            {
                id: '1',
                type: 'product_created',
                message: 'New product "Wireless Headphones" added',
                timestamp: new Date(Date.now() - 2 * 60 * 1000),
                user: 'admin@example.com',
                metadata: {
                    productId: 'HEADPHONE-002',
                    productName: 'Wireless Headphones',
                },
            },
            {
                id: '2',
                type: 'discount_activated',
                message: 'Discount code "SAVE20" activated',
                timestamp: new Date(Date.now() - 15 * 60 * 1000),
                user: 'admin@example.com',
                metadata: { discountCode: 'SAVE20', discountValue: 20 },
            },
            {
                id: '3',
                type: 'product_updated',
                message: 'Product "Gaming Mouse" updated',
                timestamp: new Date(Date.now() - 60 * 60 * 1000),
                user: 'admin@example.com',
                metadata: { productId: 'MOUSE-001', productName: 'Gaming Mouse' },
            },
            {
                id: '4',
                type: 'user_registered',
                message: 'New user "john.doe@example.com" registered',
                timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
                user: 'system',
                metadata: { userId: 'user-123', email: 'john.doe@example.com' },
            },
            {
                id: '5',
                type: 'order_completed',
                message: 'Order #ORD-001 completed',
                timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
                user: 'system',
                metadata: { orderId: 'ORD-001', amount: 299.99 },
            },
        ];
    }
    async getDashboardAnalytics() {
        try {
            const userServiceProducts = await (0, rxjs_1.firstValueFrom)(this.userServiceClient.send({ cmd: 'get_products' }, {}));
            const discounts = await this.discountService.findAllDiscounts();
            const totalProducts = Array.isArray(userServiceProducts)
                ? userServiceProducts.length
                : 0;
            const lastMonthProducts = Math.max(0, totalProducts - Math.floor(Math.random() * 3));
            const productGrowth = totalProducts > lastMonthProducts
                ? `+${Math.round(((totalProducts - lastMonthProducts) / Math.max(lastMonthProducts, 1)) * 100)}%`
                : totalProducts === lastMonthProducts
                    ? '0%'
                    : '-';
            const now = new Date();
            const activeDiscounts = discounts.filter((discount) => discount.isActive &&
                (!discount.expiresAt || new Date(discount.expiresAt) > now));
            const expiringSoon = discounts.filter((discount) => discount.isActive &&
                discount.expiresAt &&
                new Date(discount.expiresAt) > now &&
                new Date(discount.expiresAt) <=
                    new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000));
            const totalUsers = 1;
            const lastMonthUsers = 1;
            const userGrowth = '0%';
            return {
                totalProducts: {
                    current: totalProducts,
                    lastMonth: lastMonthProducts,
                    growth: productGrowth,
                },
                activeDiscounts: {
                    current: activeDiscounts.length,
                    expiringSoon: expiringSoon.length,
                },
                totalUsers: {
                    current: totalUsers,
                    lastMonth: lastMonthUsers,
                    growth: userGrowth,
                },
                systemHealth: {
                    percentage: 99.9,
                    status: 'operational',
                    message: 'All systems operational',
                },
            };
        }
        catch (error) {
            console.error('Error getting dashboard analytics:', error);
            return {
                totalProducts: {
                    current: 0,
                    lastMonth: 0,
                    growth: '0%',
                },
                activeDiscounts: {
                    current: 0,
                    expiringSoon: 0,
                },
                totalUsers: {
                    current: 0,
                    lastMonth: 0,
                    growth: '0%',
                },
                systemHealth: {
                    percentage: 95.0,
                    status: 'degraded',
                    message: 'Unable to fetch analytics data',
                },
            };
        }
    }
    async getRecentActivity(limit = 10) {
        return this.activityLog
            .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
            .slice(0, limit)
            .map((activity) => ({
            ...activity,
            timeAgo: this.getTimeAgo(activity.timestamp),
        }));
    }
    async logActivity(type, message, user, metadata = {}) {
        const newActivity = {
            id: Date.now().toString(),
            type,
            message,
            timestamp: new Date(),
            user,
            metadata,
        };
        this.activityLog.unshift(newActivity);
        if (this.activityLog.length > 100) {
            this.activityLog = this.activityLog.slice(0, 100);
        }
        return newActivity;
    }
    getTimeAgo(timestamp) {
        const now = new Date();
        const diffInSeconds = Math.floor((now.getTime() - timestamp.getTime()) / 1000);
        if (diffInSeconds < 60) {
            return `${diffInSeconds} second${diffInSeconds !== 1 ? 's' : ''} ago`;
        }
        else if (diffInSeconds < 3600) {
            const minutes = Math.floor(diffInSeconds / 60);
            return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
        }
        else if (diffInSeconds < 86400) {
            const hours = Math.floor(diffInSeconds / 3600);
            return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
        }
        else {
            const days = Math.floor(diffInSeconds / 86400);
            return `${days} day${days !== 1 ? 's' : ''} ago`;
        }
    }
};
exports.AnalyticsService = AnalyticsService;
exports.AnalyticsService = AnalyticsService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, common_1.Inject)('USER_SERVICE')),
    __metadata("design:paramtypes", [ProductService,
        DiscountService,
        microservices_1.ClientProxy])
], AnalyticsService);
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map