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
exports.FeatureFlagsController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let FeatureFlagsController = class FeatureFlagsController {
    constructor(client) {
        this.client = client;
    }
    getFeatureFlags() {
        return this.client.send({ cmd: 'admin_get_feature_flags' }, {});
    }
    updateFeatureFlag(flag, data) {
        return this.client.send({ cmd: 'admin_update_feature_flag' }, { flag, ...data });
    }
};
exports.FeatureFlagsController = FeatureFlagsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FeatureFlagsController.prototype, "getFeatureFlags", null);
__decorate([
    (0, common_1.Put)(':flag'),
    __param(0, (0, common_1.Param)('flag')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], FeatureFlagsController.prototype, "updateFeatureFlag", null);
exports.FeatureFlagsController = FeatureFlagsController = __decorate([
    (0, common_1.Controller)('api/admin/feature-flags'),
    __param(0, (0, common_1.Inject)('ADMIN_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], FeatureFlagsController);
//# sourceMappingURL=feature-flags.controller.js.map