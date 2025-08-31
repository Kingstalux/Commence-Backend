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
exports.PaymentMethodsController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const jwt_1 = require("@nestjs/jwt");
const app_service_1 = require("../app.service");
let PaymentMethodsController = class PaymentMethodsController {
    constructor(paymentMethodService, jwtService) {
        this.paymentMethodService = paymentMethodService;
        this.jwtService = jwtService;
    }
    extractUserIdFromToken(token) {
        try {
            const cleanToken = token.replace(/^Bearer\s+/, '');
            const payload = this.jwtService.verify(cleanToken);
            return payload.sub;
        }
        catch (error) {
            console.error('PaymentMethodsController: Invalid or expired token:', error.message);
            throw new Error('Invalid or expired authentication token');
        }
    }
    getPaymentMethods(data) {
        const userId = this.extractUserIdFromToken(data.token);
        return this.paymentMethodService.getUserPaymentMethods(userId);
    }
    addPaymentMethod(data) {
        const userId = this.extractUserIdFromToken(data.token);
        return this.paymentMethodService.addPaymentMethod(userId, data);
    }
    updatePaymentMethod(data) {
        return this.paymentMethodService.updatePaymentMethod(data.id, data);
    }
    deletePaymentMethod(data) {
        return this.paymentMethodService.deletePaymentMethod(data.id);
    }
    setDefaultPaymentMethod(data) {
        const userId = this.extractUserIdFromToken(data.token);
        return this.paymentMethodService.setDefaultPaymentMethod(data.id, userId);
    }
};
exports.PaymentMethodsController = PaymentMethodsController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get_payment_methods' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaymentMethodsController.prototype, "getPaymentMethods", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'add_payment_method' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaymentMethodsController.prototype, "addPaymentMethod", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'update_payment_method' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaymentMethodsController.prototype, "updatePaymentMethod", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'delete_payment_method' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaymentMethodsController.prototype, "deletePaymentMethod", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'set_default_payment_method' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaymentMethodsController.prototype, "setDefaultPaymentMethod", null);
exports.PaymentMethodsController = PaymentMethodsController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.PaymentMethodService,
        jwt_1.JwtService])
], PaymentMethodsController);
//# sourceMappingURL=payment-methods.controller.js.map