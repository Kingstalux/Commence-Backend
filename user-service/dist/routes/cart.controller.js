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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const jwt_1 = require("@nestjs/jwt");
const app_service_1 = require("../app.service");
let CartController = class CartController {
    constructor(cartService, jwtService) {
        this.cartService = cartService;
        this.jwtService = jwtService;
    }
    extractUserIdFromToken(token) {
        try {
            const cleanToken = token.replace(/^Bearer\s+/, '');
            const payload = this.jwtService.verify(cleanToken);
            return payload.sub;
        }
        catch (error) {
            console.error('CartController: Invalid or expired token:', error.message);
            throw new Error('Invalid or expired authentication token');
        }
    }
    getCart(data) {
        const userId = this.extractUserIdFromToken(data.token);
        return this.cartService.getCart(userId);
    }
    addCartItem(data) {
        const userId = this.extractUserIdFromToken(data.token);
        return this.cartService.addCartItem(userId, data);
    }
    updateCartItem(data) {
        const userId = this.extractUserIdFromToken(data.token);
        return this.cartService.updateCartItem(userId, data.itemId, data);
    }
    removeCartItem(data) {
        const userId = this.extractUserIdFromToken(data.token);
        return this.cartService.removeCartItem(userId, data.itemId);
    }
    clearCart(data) {
        const userId = this.extractUserIdFromToken(data.token);
        return this.cartService.clearCart(userId);
    }
    applyDiscount(data) {
        const userId = this.extractUserIdFromToken(data.token);
        return this.cartService.applyDiscount(userId, data.discountCode);
    }
    removeDiscount(data) {
        const userId = this.extractUserIdFromToken(data.token);
        return this.cartService.removeDiscount(userId);
    }
};
exports.CartController = CartController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get_cart' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "getCart", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'add_cart_item' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "addCartItem", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'update_cart_item' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "updateCartItem", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'remove_cart_item' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "removeCartItem", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'clear_cart' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "clearCart", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'apply_discount' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "applyDiscount", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'remove_discount' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "removeDiscount", null);
exports.CartController = CartController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.CartService,
        jwt_1.JwtService])
], CartController);
//# sourceMappingURL=cart.controller.js.map