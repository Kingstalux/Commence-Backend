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
exports.CartService = exports.ProductService = exports.PaymentMethodService = exports.UserService = exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const jwt_1 = require("@nestjs/jwt");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("./models/user.schema");
const cart_schema_1 = require("./models/cart.schema");
const product_schema_1 = require("./models/product.schema");
const payment_method_schema_1 = require("./models/payment-method.schema");
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
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
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
                const payload = {
                    sub: user._id.toString(),
                    email: user.email,
                    name: user.name,
                    iat: Math.floor(Date.now() / 1000),
                };
                const token = this.jwtService.sign(payload);
                return {
                    user: {
                        id: user._id,
                        email: user.email,
                        name: user.name,
                        preferences: user.preferences,
                    },
                    token,
                };
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
        try {
            const cleanToken = data.token.replace(/^Bearer\s+/, '');
            const payload = this.jwtService.verify(cleanToken);
            const user = await this.userModel.findById(payload.sub).exec();
            if (!user) {
                throw new Error('User not found');
            }
            const newPayload = {
                sub: user._id.toString(),
                email: user.email,
                name: user.name,
                iat: Math.floor(Date.now() / 1000),
            };
            const newToken = this.jwtService.sign(newPayload);
            return { token: newToken };
        }
        catch (error) {
            console.error('UserService: Error refreshing token:', error);
            throw new Error('Invalid token for refresh');
        }
    }
    async getMe(data) {
        try {
            const cleanToken = data.token.replace(/^Bearer\s+/, '');
            const payload = this.jwtService.verify(cleanToken);
            const user = await this.userModel.findById(payload.sub).exec();
            if (!user) {
                throw new Error('User not found');
            }
            return {
                id: user._id,
                email: user.email,
                name: user.name,
                preferences: user.preferences,
            };
        }
        catch (error) {
            console.error('UserService: Error getting user:', error);
            throw new Error('Invalid token or user not found');
        }
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
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], UserService);
let PaymentMethodService = class PaymentMethodService {
    constructor(paymentMethodModel) {
        this.paymentMethodModel = paymentMethodModel;
    }
    async getUserPaymentMethods(userId) {
        try {
            return await this.paymentMethodModel
                .find({ userId, isActive: true })
                .sort({ isDefault: -1, createdAt: -1 })
                .exec();
        }
        catch (error) {
            console.error('PaymentMethodService: Error getting payment methods:', error);
            throw error;
        }
    }
    async addPaymentMethod(userId, paymentMethodDto) {
        try {
            if (paymentMethodDto.isDefault) {
                await this.paymentMethodModel.updateMany({ userId }, { isDefault: false });
            }
            const paymentMethod = new this.paymentMethodModel({
                userId,
                ...paymentMethodDto,
            });
            return await paymentMethod.save();
        }
        catch (error) {
            console.error('PaymentMethodService: Error adding payment method:', error);
            throw error;
        }
    }
    async updatePaymentMethod(id, updateDto) {
        try {
            return await this.paymentMethodModel
                .findByIdAndUpdate(id, updateDto, { new: true })
                .exec();
        }
        catch (error) {
            console.error('PaymentMethodService: Error updating payment method:', error);
            throw error;
        }
    }
    async deletePaymentMethod(id) {
        try {
            const result = await this.paymentMethodModel
                .findByIdAndUpdate(id, { isActive: false }, { new: true })
                .exec();
            if (!result) {
                throw new Error('Payment method not found');
            }
            return { success: true, deletedId: id };
        }
        catch (error) {
            console.error('PaymentMethodService: Error deleting payment method:', error);
            throw error;
        }
    }
    async setDefaultPaymentMethod(id, userId) {
        try {
            await this.paymentMethodModel.updateMany({ userId }, { isDefault: false });
            const result = await this.paymentMethodModel
                .findOneAndUpdate({ _id: id, userId, isActive: true }, { isDefault: true }, { new: true })
                .exec();
            if (!result) {
                throw new Error('Payment method not found or not owned by user');
            }
            return result;
        }
        catch (error) {
            console.error('PaymentMethodService: Error setting default payment method:', error);
            throw error;
        }
    }
};
exports.PaymentMethodService = PaymentMethodService;
exports.PaymentMethodService = PaymentMethodService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(payment_method_schema_1.PaymentMethod.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PaymentMethodService);
let ProductService = class ProductService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async getProducts(filters) {
        try {
            const query = {};
            if (filters?.category) {
                query.category = filters.category;
            }
            if (filters?.inStock !== undefined) {
                query.inStock = filters.inStock;
            }
            if (filters?.minPrice !== undefined) {
                query.price = { ...query.price, $gte: filters.minPrice };
            }
            if (filters?.maxPrice !== undefined) {
                query.price = { ...query.price, $lte: filters.maxPrice };
            }
            let mongoQuery = this.productModel.find(query);
            if (filters?.search) {
                const searchRegex = new RegExp(filters.search, 'i');
                mongoQuery = this.productModel.find({
                    ...query,
                    $or: [
                        { name: searchRegex },
                        { description: searchRegex },
                        { tags: { $in: [searchRegex] } },
                    ],
                });
            }
            if (filters?.sortBy) {
                switch (filters.sortBy) {
                    case 'price_asc':
                        mongoQuery = mongoQuery.sort({ price: 1 });
                        break;
                    case 'price_desc':
                        mongoQuery = mongoQuery.sort({ price: -1 });
                        break;
                    case 'name_asc':
                        mongoQuery = mongoQuery.sort({ name: 1 });
                        break;
                    case 'name_desc':
                        mongoQuery = mongoQuery.sort({ name: -1 });
                        break;
                    case 'newest':
                        mongoQuery = mongoQuery.sort({ createdAt: -1 });
                        break;
                    default:
                        mongoQuery = mongoQuery.sort({ createdAt: -1 });
                }
            }
            else {
                mongoQuery = mongoQuery.sort({ createdAt: -1 });
            }
            return await mongoQuery.exec();
        }
        catch (error) {
            console.error('ProductService: Error getting products:', error);
            throw error;
        }
    }
    async getProductById(id) {
        try {
            return await this.productModel.findById(id).exec();
        }
        catch (error) {
            console.error('ProductService: Error getting product by ID:', error);
            throw error;
        }
    }
    async searchProducts(query) {
        try {
            const searchRegex = new RegExp(query, 'i');
            return await this.productModel
                .find({
                $or: [
                    { name: searchRegex },
                    { description: searchRegex },
                    { category: searchRegex },
                    { tags: { $in: [searchRegex] } },
                ],
            })
                .exec();
        }
        catch (error) {
            console.error('ProductService: Error searching products:', error);
            throw error;
        }
    }
    async getCategories() {
        try {
            const categories = await this.productModel.distinct('category').exec();
            return categories;
        }
        catch (error) {
            console.error('ProductService: Error getting categories:', error);
            throw error;
        }
    }
    async getFeaturedProducts() {
        try {
            return await this.productModel
                .find({
                discountedPrice: { $exists: true, $ne: null },
                inStock: true,
            })
                .limit(6)
                .exec();
        }
        catch (error) {
            console.error('ProductService: Error getting featured products:', error);
            throw error;
        }
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(product_schema_1.ProductModel.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductService);
let CartService = class CartService {
    constructor(cartModel, productModel) {
        this.cartModel = cartModel;
        this.productModel = productModel;
    }
    async getCart(userId) {
        let cart = await this.cartModel.findOne({ userId }).exec();
        if (!cart) {
            cart = new this.cartModel({
                userId,
                items: [],
                subtotal: 0,
                discountAmount: 0,
            });
            await cart.save();
        }
        cart.subtotal = cart.items.reduce((sum, item) => {
            const price = item.product.discountedPrice || item.product.price;
            return sum + price * item.quantity;
        }, 0);
        await cart.save();
        return cart;
    }
    async addCartItem(userId, itemDto) {
        try {
            const product = await this.productModel
                .findById(itemDto.productId)
                .exec();
            if (!product) {
                throw new Error('Product not found');
            }
            if (!product.inStock) {
                throw new Error('Product is out of stock');
            }
            let cart = await this.cartModel.findOne({ userId }).exec();
            if (!cart) {
                cart = new this.cartModel({
                    userId,
                    items: [],
                    subtotal: 0,
                    discountAmount: 0,
                });
            }
            const existingItemIndex = cart.items.findIndex((item) => item.productId === itemDto.productId);
            if (existingItemIndex >= 0) {
                cart.items[existingItemIndex].quantity += itemDto.quantity || 1;
            }
            else {
                const newItem = {
                    id: `item-${Date.now()}`,
                    productId: itemDto.productId,
                    quantity: itemDto.quantity || 1,
                    addedAt: new Date(),
                    product: {
                        id: product._id.toString(),
                        name: product.name,
                        title: product.title,
                        price: product.price,
                        discountedPrice: product.discountedPrice,
                        imageUrl: product.imageUrl,
                    },
                };
                cart.items.push(newItem);
            }
            cart.subtotal = cart.items.reduce((sum, item) => {
                const price = item.product.discountedPrice || item.product.price;
                return sum + price * item.quantity;
            }, 0);
            await cart.save();
            const addedItem = cart.items.find((item) => item.productId === itemDto.productId);
            return addedItem;
        }
        catch (error) {
            throw error;
        }
    }
    async updateCartItem(userId, itemId, updateDto) {
        try {
            const cart = await this.cartModel.findOne({ userId }).exec();
            if (!cart) {
                throw new Error('Cart not found');
            }
            const itemIndex = cart.items.findIndex((item) => item.id === itemId);
            if (itemIndex === -1) {
                throw new Error('Cart item not found');
            }
            if (updateDto.quantity <= 0) {
                cart.items.splice(itemIndex, 1);
            }
            else {
                cart.items[itemIndex].quantity = updateDto.quantity;
                if (updateDto.liked !== undefined) {
                    cart.items[itemIndex].liked = updateDto.liked;
                }
            }
            cart.subtotal = cart.items.reduce((sum, item) => {
                const price = item.product.discountedPrice || item.product.price;
                return sum + price * item.quantity;
            }, 0);
            await cart.save();
            return updateDto.quantity <= 0 ? null : cart.items[itemIndex];
        }
        catch (error) {
            throw error;
        }
    }
    async removeCartItem(userId, itemId) {
        try {
            const cart = await this.cartModel.findOne({ userId }).exec();
            if (!cart) {
                throw new Error('Cart not found');
            }
            const itemIndex = cart.items.findIndex((item) => item.id === itemId);
            if (itemIndex === -1) {
                throw new Error('Cart item not found');
            }
            cart.items.splice(itemIndex, 1);
            cart.subtotal = cart.items.reduce((sum, item) => {
                const price = item.product.discountedPrice || item.product.price;
                return sum + price * item.quantity;
            }, 0);
            await cart.save();
            return { success: true };
        }
        catch (error) {
            throw error;
        }
    }
    async clearCart(userId) {
        let cart = await this.cartModel.findOne({ userId }).exec();
        if (!cart) {
            cart = new this.cartModel({
                userId,
                items: [],
                subtotal: 0,
                discountAmount: 0,
            });
        }
        else {
            cart.items = [];
            cart.subtotal = 0;
            cart.discountAmount = 0;
            cart.discountCode = undefined;
        }
        await cart.save();
        return cart;
    }
    async applyDiscount(userId, discountCode) {
        const cart = await this.cartModel.findOne({ userId }).exec();
        if (!cart) {
            throw new Error('Cart not found');
        }
        const discountAmount = cart.subtotal * 0.1;
        cart.discountAmount = discountAmount;
        cart.discountCode = discountCode;
        await cart.save();
        return cart;
    }
    async removeDiscount(userId) {
        const cart = await this.cartModel.findOne({ userId }).exec();
        if (!cart) {
            throw new Error('Cart not found');
        }
        cart.discountAmount = 0;
        cart.discountCode = undefined;
        await cart.save();
        return cart;
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(cart_schema_1.Cart.name)),
    __param(1, (0, mongoose_1.InjectModel)(product_schema_1.ProductModel.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], CartService);
//# sourceMappingURL=app.service.js.map