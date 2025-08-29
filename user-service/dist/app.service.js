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
exports.CartService = exports.PaymentMethodService = exports.UserService = exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("./models/user.schema");
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
    constructor(userModel) {
        this.userModel = userModel;
    }
    async findAllUsers() {
        try {
            return await this.userModel.find().exec();
        }
        catch (error) {
            console.error('UserService: Error finding users:', error);
            throw error;
        }
    }
    async findUserById(id) {
        try {
            return await this.userModel.findById(id).exec();
        }
        catch (error) {
            console.error('UserService: Error finding user by ID:', error);
            throw error;
        }
    }
    async createUser(data) {
        try {
            const user = new this.userModel(data);
            return await user.save();
        }
        catch (error) {
            console.error('UserService: Error creating user:', error);
            throw error;
        }
    }
    async updateUser(id, data) {
        try {
            return await this.userModel
                .findByIdAndUpdate(id, data, { new: true })
                .exec();
        }
        catch (error) {
            console.error('UserService: Error updating user:', error);
            throw error;
        }
    }
    async deleteUser(id) {
        try {
            return await this.userModel.findByIdAndDelete(id).exec();
        }
        catch (error) {
            console.error('UserService: Error deleting user:', error);
            throw error;
        }
    }
    async findUserRoles(userId) {
        return await this.userModel.find({ _id: userId }).exec();
    }
    async findSessions(userId) {
        return await this.userModel.find({ _id: userId }).exec();
    }
    async signup(signupDto) {
        try {
            const user = new this.userModel(signupDto);
            return await user.save();
        }
        catch (error) {
            console.error('UserService: Error during signup:', error);
            throw error;
        }
    }
    async login(loginDto) {
        try {
            const user = await this.userModel
                .findOne({
                email: loginDto.email,
                password: loginDto.password,
            })
                .exec();
            if (user) {
                const mockSession = {
                    id: Date.now().toString(),
                    user_id: user._id,
                    token: `jwt-token-${Date.now()}`,
                };
                return { user, token: mockSession.token };
            }
            throw new Error('Invalid credentials');
        }
        catch (error) {
            console.error('UserService: Error during login:', error);
            throw error;
        }
    }
    async logout(data) {
        return { token: data.token, logged_out: true };
    }
    async refreshToken(data) {
        const newToken = `new-jwt-token-${Date.now()}`;
        return { token: newToken };
    }
    async getMe(data) {
        return { id: '1', email: 'mock@example.com', name: 'Mock User' };
    }
    async getProfile(id) {
        try {
            return await this.userModel.findById(id).exec();
        }
        catch (error) {
            console.error('UserService: Error getting profile:', error);
            throw error;
        }
    }
    async updateProfile(id, updateProfileDto) {
        try {
            return await this.userModel
                .findByIdAndUpdate(id, updateProfileDto, { new: true })
                .exec();
        }
        catch (error) {
            console.error('UserService: Error updating profile:', error);
            throw error;
        }
    }
    async updatePassword(data) {
        try {
            return await this.userModel
                .findByIdAndUpdate(data.userId, { password: data.newPassword }, { new: true })
                .exec();
        }
        catch (error) {
            console.error('UserService: Error updating password:', error);
            throw error;
        }
    }
    async deleteAccount(id) {
        try {
            return await this.userModel.findByIdAndDelete(id).exec();
        }
        catch (error) {
            console.error('UserService: Error deleting account:', error);
            throw error;
        }
    }
    async getUserPreferences(id) {
        try {
            return await this.userModel.findById(id).exec();
        }
        catch (error) {
            console.error('UserService: Error getting preferences:', error);
            throw error;
        }
    }
    async updateUserPreferences(id, preferences) {
        try {
            return await this.userModel
                .findByIdAndUpdate(id, { preferences }, { new: true })
                .exec();
        }
        catch (error) {
            console.error('UserService: Error updating preferences:', error);
            throw error;
        }
    }
    async getRoles() {
        return await this.userModel.find().exec();
    }
    async createRole(createRoleDto) {
        return await this.userModel.create(createRoleDto);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
let PaymentMethodService = class PaymentMethodService {
    async getUserPaymentMethods(userId) {
        return [
            { id: '1', userId, type: 'card', last4: '1234', isDefault: true },
            { id: '2', userId, type: 'card', last4: '5678', isDefault: false },
        ];
    }
    async addPaymentMethod(userId, paymentMethodDto) {
        return { id: Date.now().toString(), userId, ...paymentMethodDto };
    }
    async updatePaymentMethod(id, updateDto) {
        return { id, ...updateDto };
    }
    async deletePaymentMethod(id) {
        return { success: true };
    }
    async setDefaultPaymentMethod(id, userId) {
        return { id, isDefault: true };
    }
};
exports.PaymentMethodService = PaymentMethodService;
exports.PaymentMethodService = PaymentMethodService = __decorate([
    (0, common_1.Injectable)()
], PaymentMethodService);
let CartService = class CartService {
    constructor() {
        this.carts = new Map();
    }
    async getCart(userId) {
        return this.carts.get(userId) || { items: [], discount: null, total: 0 };
    }
    async addCartItem(userId, itemDto) {
        const cart = this.getCart(userId) || {
            items: [],
            discount: null,
            total: 0,
        };
        cart.items.push({ id: Date.now().toString(), ...itemDto });
        this.carts.set(userId, cart);
        return cart;
    }
    async updateCartItem(userId, itemId, updateDto) {
        const cart = this.carts.get(userId);
        if (cart) {
            const itemIndex = cart.items.findIndex((item) => item.id === itemId);
            if (itemIndex > -1) {
                cart.items[itemIndex] = { ...cart.items[itemIndex], ...updateDto };
                this.carts.set(userId, cart);
            }
        }
        return cart;
    }
    async removeCartItem(userId, itemId) {
        const cart = this.carts.get(userId);
        if (cart) {
            cart.items = cart.items.filter((item) => item.id !== itemId);
            this.carts.set(userId, cart);
        }
        return cart;
    }
    async clearCart(userId) {
        this.carts.set(userId, { items: [], discount: null, total: 0 });
        return this.carts.get(userId);
    }
    async applyDiscount(userId, discountCode) {
        const cart = this.carts.get(userId);
        if (cart) {
            cart.discount = { code: discountCode, amount: 10 };
            this.carts.set(userId, cart);
        }
        return cart;
    }
    async removeDiscount(userId) {
        const cart = this.carts.get(userId);
        if (cart) {
            cart.discount = null;
            this.carts.set(userId, cart);
        }
        return cart;
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)()
], CartService);
//# sourceMappingURL=app.service.js.map