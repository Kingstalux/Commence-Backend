"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const user_schema_1 = require("./models/user.schema");
const role_schema_1 = require("./models/role.schema");
const userRole_schema_1 = require("./models/userRole.schema");
const session_schema_1 = require("./models/session.schema");
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
let UserService = class UserService {
    async findAllUsers() {
        return user_schema_1.default.find();
    }
    async findUserById(id) {
        return user_schema_1.default.findById(id);
    }
    async createUser(data) {
        return user_schema_1.default.create(data);
    }
    async updateUser(id, data) {
        return user_schema_1.default.findByIdAndUpdate(id, data, { new: true });
    }
    async deleteUser(id) {
        return user_schema_1.default.findByIdAndDelete(id);
    }
    async findUserRoles(userId) {
        return userRole_schema_1.default.find({ user_id: userId }).populate('role_id');
    }
    async findSessions(userId) {
        return session_schema_1.default.find({ user_id: userId });
    }
    async signup(signupDto) {
        return user_schema_1.default.create(signupDto);
    }
    async login(loginDto) {
        return user_schema_1.default.findOne({ email: loginDto.email, password: loginDto.password });
    }
    async getProfile(id) {
        return user_schema_1.default.findById(id);
    }
    async updateProfile(id, updateProfileDto) {
        return user_schema_1.default.findByIdAndUpdate(id, updateProfileDto, { new: true });
    }
    async getRoles() {
        return role_schema_1.default.find();
    }
    async createRole(createRoleDto) {
        return role_schema_1.default.create(createRoleDto);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
//# sourceMappingURL=app.service.js.map