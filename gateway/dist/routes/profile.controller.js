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
exports.ProfileController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let ProfileController = class ProfileController {
    constructor(client) {
        this.client = client;
    }
    updateProfile(data, token) {
        return this.client.send({ cmd: 'update_profile' }, { ...data, token });
    }
    updatePassword(data, token) {
        return this.client.send({ cmd: 'update_password' }, { ...data, token });
    }
    deleteAccount(token) {
        return this.client.send({ cmd: 'delete_account' }, { token });
    }
    getPreferences(token) {
        return this.client.send({ cmd: 'get_preferences' }, { token });
    }
    updatePreferences(preferences, token) {
        return this.client.send({ cmd: 'update_preferences' }, { preferences, token });
    }
    getPaymentMethods(token) {
        return this.client.send({ cmd: 'get_payment_methods' }, { token });
    }
    addPaymentMethod(data, token) {
        return this.client.send({ cmd: 'add_payment_method' }, { ...data, token });
    }
    updatePaymentMethod(id, data, token) {
        return this.client.send({ cmd: 'update_payment_method' }, { id, ...data, token });
    }
    deletePaymentMethod(id, token) {
        return this.client.send({ cmd: 'delete_payment_method' }, { id, token });
    }
    setDefaultPaymentMethod(id, token) {
        return this.client.send({ cmd: 'set_default_payment_method' }, { id, token });
    }
};
exports.ProfileController = ProfileController;
__decorate([
    (0, common_1.Put)('profile'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Put)('password'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "updatePassword", null);
__decorate([
    (0, common_1.Delete)('account'),
    __param(0, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "deleteAccount", null);
__decorate([
    (0, common_1.Get)('preferences'),
    __param(0, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "getPreferences", null);
__decorate([
    (0, common_1.Put)('preferences'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "updatePreferences", null);
__decorate([
    (0, common_1.Get)('payment-methods'),
    __param(0, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "getPaymentMethods", null);
__decorate([
    (0, common_1.Post)('payment-methods'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "addPaymentMethod", null);
__decorate([
    (0, common_1.Put)('payment-methods/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, String]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "updatePaymentMethod", null);
__decorate([
    (0, common_1.Delete)('payment-methods/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "deletePaymentMethod", null);
__decorate([
    (0, common_1.Put)('payment-methods/:id/default'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "setDefaultPaymentMethod", null);
exports.ProfileController = ProfileController = __decorate([
    (0, common_1.Controller)('api/users'),
    __param(0, (0, common_1.Inject)('USER_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], ProfileController);
//# sourceMappingURL=profile.controller.js.map