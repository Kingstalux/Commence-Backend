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
exports.PaymentController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const app_service_1 = require("../app.service");
let PaymentController = class PaymentController {
    constructor(paymentService) {
        this.paymentService = paymentService;
    }
    findAll() {
        return this.paymentService.findAllPayments();
    }
    findOne(data) {
        return this.paymentService.findPaymentById(data.id);
    }
    create(createPaymentDto) {
        return this.paymentService.createPayment(createPaymentDto);
    }
    processPayment(data) {
        return this.paymentService.processPayment(data);
    }
    refundPayment(data) {
        return this.paymentService.refundPayment(data.id, data.amount);
    }
    update(data) {
        return this.paymentService.updatePayment(data.id, data);
    }
};
exports.PaymentController = PaymentController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get_all_payments' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PaymentController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get_payment_by_id' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaymentController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'create_payment' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaymentController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'process_payment' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaymentController.prototype, "processPayment", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'refund_payment' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaymentController.prototype, "refundPayment", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'update_payment' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaymentController.prototype, "update", null);
exports.PaymentController = PaymentController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.PaymentService])
], PaymentController);
//# sourceMappingURL=payment.controller.js.map