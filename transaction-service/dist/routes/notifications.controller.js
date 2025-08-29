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
exports.NotificationsController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const app_service_1 = require("../app.service");
let NotificationsController = class NotificationsController {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    sendOrderConfirmation(data) {
        return this.notificationService.sendOrderConfirmation(data);
    }
    sendShippingUpdate(data) {
        return this.notificationService.sendShippingUpdate(data);
    }
    sendDeliveryConfirmation(data) {
        return this.notificationService.sendDeliveryConfirmation(data);
    }
};
exports.NotificationsController = NotificationsController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'send_order_confirmation' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NotificationsController.prototype, "sendOrderConfirmation", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'send_shipping_update' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NotificationsController.prototype, "sendShippingUpdate", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'send_delivery_confirmation' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NotificationsController.prototype, "sendDeliveryConfirmation", null);
exports.NotificationsController = NotificationsController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.NotificationService])
], NotificationsController);
//# sourceMappingURL=notifications.controller.js.map