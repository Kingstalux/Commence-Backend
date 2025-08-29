"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = exports.AdminUserService = exports.SystemService = exports.FeatureFlagService = exports.MediaService = exports.DiscountService = exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
let ProductService = class ProductService {
    constructor() {
        this.products = [];
    }
    async findAllProducts() {
        return this.products;
    }
    async findProductById(id) {
        return this.products.find((p) => p.id === id) || {};
    }
    async createProduct(dto) {
        const product = { id: Date.now().toString(), ...dto };
        this.products.push(product);
        return product;
    }
    async updateProduct(id, dto) {
        const index = this.products.findIndex((p) => p.id === id);
        if (index > -1) {
            this.products[index] = { ...this.products[index], ...dto };
            return this.products[index];
        }
        return {};
    }
    async deleteProduct(id) {
        const index = this.products.findIndex((p) => p.id === id);
        if (index > -1) {
            return this.products.splice(index, 1)[0];
        }
        return {};
    }
    async bulkImportProducts(products) {
        const imported = products.map((p) => ({
            id: Date.now().toString() + Math.random(),
            ...p,
        }));
        this.products.push(...imported);
        return { imported: imported.length, total: this.products.length };
    }
    async getInventory(sku) {
        const product = this.products.find((p) => p.sku === sku);
        return product ? { sku, quantity: product.quantity || 0 } : {};
    }
    async updateInventory(sku, dto) {
        const product = this.products.find((p) => p.sku === sku);
        if (product) {
            product.quantity = dto.quantity;
            return product;
        }
        return {};
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)()
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
        const discount = { id: Date.now().toString(), ...dto };
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