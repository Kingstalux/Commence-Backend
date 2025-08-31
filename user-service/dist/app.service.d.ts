import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { User, UserDocument } from './models/user.schema';
import { Cart, CartDocument } from './models/cart.schema';
import { ProductModel, ProductDocument } from './models/product.schema';
import { PaymentMethod, PaymentMethodDocument } from './models/payment-method.schema';
import { RoleDocument } from './models/role.schema';
import { UserRoleDocument } from './models/userRole.schema';
export declare class AppService {
    getHello(): string;
}
export declare class UserService {
    private userModel;
    private roleModel;
    private userRoleModel;
    private jwtService;
    constructor(userModel: Model<UserDocument>, roleModel: Model<RoleDocument>, userRoleModel: Model<UserRoleDocument>, jwtService: JwtService);
    findAllUsers(): Promise<(import("mongoose").Document<unknown, {}, UserDocument, {}, {}> & User & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findUserById(id: string): Promise<import("mongoose").Document<unknown, {}, UserDocument, {}, {}> & User & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    createUser(data: any): Promise<import("mongoose").Document<unknown, {}, UserDocument, {}, {}> & User & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    updateUser(id: string, data: any): Promise<import("mongoose").Document<unknown, {}, UserDocument, {}, {}> & User & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    deleteUser(id: string): Promise<import("mongoose").Document<unknown, {}, UserDocument, {}, {}> & User & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findUserRoles(userId: string): Promise<(import("mongoose").Document<unknown, {}, UserDocument, {}, {}> & User & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findSessions(userId: string): Promise<(import("mongoose").Document<unknown, {}, UserDocument, {}, {}> & User & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    signup(signupDto: any): Promise<import("mongoose").Document<unknown, {}, UserDocument, {}, {}> & User & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    login(loginDto: any): Promise<{
        user: {
            id: unknown;
            email: string;
            name: string;
            preferences: any;
        };
        token: string;
    }>;
    logout(data: any): Promise<{
        token: any;
        logged_out: boolean;
    }>;
    refreshToken(data: any): Promise<{
        token: string;
    }>;
    getMe(data: any): Promise<{
        id: unknown;
        email: string;
        name: string;
        role: string;
        preferences: any;
    }>;
    getProfile(id: string): Promise<import("mongoose").Document<unknown, {}, UserDocument, {}, {}> & User & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    updateProfile(id: string, updateProfileDto: any): Promise<import("mongoose").Document<unknown, {}, UserDocument, {}, {}> & User & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    updatePassword(data: any): Promise<import("mongoose").Document<unknown, {}, UserDocument, {}, {}> & User & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    deleteAccount(id: string): Promise<import("mongoose").Document<unknown, {}, UserDocument, {}, {}> & User & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getUserPreferences(id: string): Promise<import("mongoose").Document<unknown, {}, UserDocument, {}, {}> & User & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    updateUserPreferences(id: string, preferences: any): Promise<import("mongoose").Document<unknown, {}, UserDocument, {}, {}> & User & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getRoles(): Promise<(import("mongoose").Document<unknown, {}, UserDocument, {}, {}> & User & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    createRole(createRoleDto: any): Promise<import("mongoose").Document<unknown, {}, UserDocument, {}, {}> & User & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
export declare class PaymentMethodService {
    private paymentMethodModel;
    constructor(paymentMethodModel: Model<PaymentMethodDocument>);
    getUserPaymentMethods(userId: string): Promise<(import("mongoose").Document<unknown, {}, PaymentMethodDocument, {}, {}> & PaymentMethod & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    addPaymentMethod(userId: string, paymentMethodDto: any): Promise<import("mongoose").Document<unknown, {}, PaymentMethodDocument, {}, {}> & PaymentMethod & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    updatePaymentMethod(id: string, updateDto: any): Promise<import("mongoose").Document<unknown, {}, PaymentMethodDocument, {}, {}> & PaymentMethod & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    deletePaymentMethod(id: string): Promise<{
        success: boolean;
        deletedId: string;
    }>;
    setDefaultPaymentMethod(id: string, userId: string): Promise<import("mongoose").Document<unknown, {}, PaymentMethodDocument, {}, {}> & PaymentMethod & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
export declare class ProductService {
    private productModel;
    constructor(productModel: Model<ProductDocument>);
    getProducts(filters?: any): Promise<(import("mongoose").Document<unknown, {}, ProductDocument, {}, {}> & ProductModel & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    getProductById(id: string): Promise<import("mongoose").Document<unknown, {}, ProductDocument, {}, {}> & ProductModel & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    searchProducts(query: string): Promise<(import("mongoose").Document<unknown, {}, ProductDocument, {}, {}> & ProductModel & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    getCategories(): Promise<string[]>;
    getFeaturedProducts(): Promise<(import("mongoose").Document<unknown, {}, ProductDocument, {}, {}> & ProductModel & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
}
export declare class CartService {
    private cartModel;
    private productModel;
    constructor(cartModel: Model<CartDocument>, productModel: Model<ProductDocument>);
    getCart(userId: string): Promise<import("mongoose").Document<unknown, {}, CartDocument, {}, {}> & Cart & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    addCartItem(userId: string, itemDto: any): Promise<import("./models/cart.schema").CartItem>;
    updateCartItem(userId: string, itemId: string, updateDto: any): Promise<import("./models/cart.schema").CartItem>;
    removeCartItem(userId: string, itemId: string): Promise<{
        success: boolean;
    }>;
    clearCart(userId: string): Promise<import("mongoose").Document<unknown, {}, CartDocument, {}, {}> & Cart & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    applyDiscount(userId: string, discountCode: string): Promise<import("mongoose").Document<unknown, {}, CartDocument, {}, {}> & Cart & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    removeDiscount(userId: string): Promise<import("mongoose").Document<unknown, {}, CartDocument, {}, {}> & Cart & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
