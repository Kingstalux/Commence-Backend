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
exports.DiscountController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const app_service_1 = require("../app.service");
let DiscountController = class DiscountController {
    constructor(discountService) {
        this.discountService = discountService;
    }
    findAll() {
        return this.discountService.findAllDiscounts();
    }
    findOne(data) {
        return this.discountService.findDiscountById(data.id);
    }
    create(createDiscountDto) {
        return this.discountService.createDiscount(createDiscountDto);
    }
    update(data) {
        return this.discountService.updateDiscount(data.id, data);
    }
    remove(data) {
        return this.discountService.deleteDiscount(data.id);
    }
    validateCode(data) {
        return this.discountService.validateDiscountCode(data.code);
    }
};
exports.DiscountController = DiscountController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'admin_get_discounts' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DiscountController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'admin_get_discount' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DiscountController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'admin_create_discount' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DiscountController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'admin_update_discount' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DiscountController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'admin_delete_discount' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DiscountController.prototype, "remove", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'admin_validate_discount' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DiscountController.prototype, "validateCode", null);
exports.DiscountController = DiscountController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.DiscountService])
], DiscountController);
//# sourceMappingURL=discount.controller.js.map