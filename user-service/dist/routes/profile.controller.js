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
exports.ProfileController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const jwt_1 = require("@nestjs/jwt");
const app_service_1 = require("../app.service");
let ProfileController = class ProfileController {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    extractUserIdFromToken(token) {
        try {
            const cleanToken = token.replace(/^Bearer\s+/, '');
            const payload = this.jwtService.verify(cleanToken);
            return payload.sub;
        }
        catch (error) {
            console.error('ProfileController: Invalid or expired token:', error.message);
            throw new Error('Invalid or expired authentication token');
        }
    }
    updateProfile(data) {
        const userId = this.extractUserIdFromToken(data.token);
        return this.userService.updateProfile(userId, data);
    }
    updatePassword(data) {
        const userId = this.extractUserIdFromToken(data.token);
        return this.userService.updatePassword({ ...data, userId });
    }
    deleteAccount(data) {
        const userId = this.extractUserIdFromToken(data.token);
        return this.userService.deleteAccount(userId);
    }
    getPreferences(data) {
        const userId = this.extractUserIdFromToken(data.token);
        return this.userService.getUserPreferences(userId);
    }
    updatePreferences(data) {
        const userId = this.extractUserIdFromToken(data.token);
        return this.userService.updateUserPreferences(userId, data.preferences);
    }
};
exports.ProfileController = ProfileController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'update_profile' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "updateProfile", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'update_password' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "updatePassword", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'delete_account' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "deleteAccount", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get_preferences' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "getPreferences", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'update_preferences' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "updatePreferences", null);
exports.ProfileController = ProfileController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.UserService,
        jwt_1.JwtService])
], ProfileController);
//# sourceMappingURL=profile.controller.js.map