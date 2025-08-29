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
exports.AdminTransactionsController = exports.TransactionsController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const app_service_1 = require("../app.service");
let TransactionsController = class TransactionsController {
    constructor(transactionService) {
        this.transactionService = transactionService;
    }
    getTransactions(data) {
        return this.transactionService.getTransactions(data.userId);
    }
    getTransactionById(data) {
        return this.transactionService.getTransactionById(data.id);
    }
};
exports.TransactionsController = TransactionsController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get_transactions' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TransactionsController.prototype, "getTransactions", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get_transaction_by_id' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TransactionsController.prototype, "getTransactionById", null);
exports.TransactionsController = TransactionsController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.TransactionService])
], TransactionsController);
let AdminTransactionsController = class AdminTransactionsController {
    constructor(transactionService) {
        this.transactionService = transactionService;
    }
    getAdminTransactions() {
        return this.transactionService.getAdminTransactions();
    }
    getTransactionAnalytics() {
        return this.transactionService.getTransactionAnalytics();
    }
    exportTransactions(data) {
        return this.transactionService.exportTransactions(data.filters);
    }
};
exports.AdminTransactionsController = AdminTransactionsController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'admin_get_transactions' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminTransactionsController.prototype, "getAdminTransactions", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'admin_get_transaction_analytics' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminTransactionsController.prototype, "getTransactionAnalytics", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'admin_export_transactions' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AdminTransactionsController.prototype, "exportTransactions", null);
exports.AdminTransactionsController = AdminTransactionsController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.TransactionService])
], AdminTransactionsController);
//# sourceMappingURL=transactions.controller.js.map