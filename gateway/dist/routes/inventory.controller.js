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
exports.InventoryController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let InventoryController = class InventoryController {
    constructor(client) {
        this.client = client;
    }
    getInventory(sku) {
        return this.client.send({ cmd: 'getInventory' }, { sku });
    }
    updateInventory(sku, updateInventoryDto) {
        return this.client.send({ cmd: 'updateInventory' }, { sku, ...updateInventoryDto });
    }
};
exports.InventoryController = InventoryController;
__decorate([
    (0, common_1.Get)(':sku'),
    __param(0, (0, common_1.Param)('sku')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "getInventory", null);
__decorate([
    (0, common_1.Put)(':sku'),
    __param(0, (0, common_1.Param)('sku')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "updateInventory", null);
exports.InventoryController = InventoryController = __decorate([
    (0, common_1.Controller)('inventory'),
    __param(0, (0, common_1.Inject)('ADMIN_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], InventoryController);
//# sourceMappingURL=inventory.controller.js.map