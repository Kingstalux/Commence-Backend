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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const app_service_1 = require("../app.service");
let OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    getOrders(data) {
        if (data.userId) {
            return this.orderService.getUserOrders(data.userId);
        }
        return this.orderService.findAllOrders();
    }
    findOne(data) {
        return this.orderService.findOrderById(data.id);
    }
    create(createOrderDto) {
        return this.orderService.createOrder(createOrderDto);
    }
    cancelOrder(data) {
        return this.orderService.cancelOrder(data.id);
    }
    getOrderReceipt(data) {
        return this.orderService.getOrderReceipt(data.id);
    }
    refundOrder(data) {
        return this.orderService.refundOrder(data.id, data);
    }
};
exports.OrderController = OrderController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get_orders' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getOrders", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get_order_by_id' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'create_order' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'cancel_order' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "cancelOrder", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get_order_receipt' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getOrderReceipt", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'refund_order' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "refundOrder", null);
exports.OrderController = OrderController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.OrderService])
], OrderController);
//# sourceMappingURL=order.controller.js.map