import { ClientProxy } from '@nestjs/microservices';
export declare class ProductService {
    private readonly userService;
    constructor(userService: ClientProxy);
    findAllProducts(): Promise<any>;
    findProductById(id: string): Promise<any>;
    createProduct(dto: any): Promise<any>;
    updateProduct(id: string, dto: any): Promise<any>;
    deleteProduct(id: string): Promise<any>;
    bulkImportProducts(products: any[]): Promise<any>;
    getInventory(sku: string): Promise<any>;
    updateInventory(sku: string, dto: any): Promise<any>;
}
export declare class DiscountService {
    private discounts;
    findAllDiscounts(): Promise<any[]>;
    findDiscountById(id: string): Promise<any>;
    createDiscount(dto: any): Promise<any>;
    updateDiscount(id: string, dto: any): Promise<any>;
    deleteDiscount(id: string): Promise<any>;
    validateDiscountCode(code: string): Promise<{
        valid: boolean;
        discount: any;
    } | {
        valid: boolean;
        discount?: undefined;
    }>;
}
export declare class MediaService {
    private media;
    findAllMedia(): Promise<any[]>;
    findMediaById(id: string): Promise<any>;
    createMedia(dto: any): Promise<any>;
    updateMedia(id: string, dto: any): Promise<any>;
    deleteMedia(id: string): Promise<any>;
}
export declare class FeatureFlagService {
    private flags;
    getFeatureFlags(): Promise<{
        [k: string]: boolean;
    }>;
    updateFeatureFlag(flag: string, value: boolean): Promise<{
        flag: string;
        value: boolean;
    }>;
}
export declare class SystemService {
    getHealth(): Promise<{
        status: string;
        timestamp: string;
        services: {
            database: string;
            redis: string;
            queue: string;
        };
    }>;
    getStatus(): Promise<{
        uptime: number;
        memory: NodeJS.MemoryUsage;
        cpu: NodeJS.CpuUsage;
        version: string;
    }>;
    enableBurstCheckout(): Promise<{
        enabled: boolean;
        mode: string;
    }>;
}
export declare class AdminUserService {
    private users;
    getUsers(): Promise<any[]>;
    updateUserRole(userId: string, role: string): Promise<{
        userId: string;
        role: string;
        updated: boolean;
    }>;
    deleteUser(userId: string): Promise<{
        userId: string;
        deleted: boolean;
    }>;
    getUserOrders(userId: string): Promise<{
        id: string;
        userId: string;
        amount: number;
        status: string;
    }[]>;
}
export declare class AnalyticsService {
    private readonly productService;
    private readonly discountService;
    private readonly userServiceClient;
    constructor(productService: ProductService, discountService: DiscountService, userServiceClient: ClientProxy);
    private activityLog;
    getDashboardAnalytics(): Promise<{
        totalProducts: {
            current: number;
            lastMonth: number;
            growth: string;
        };
        activeDiscounts: {
            current: number;
            expiringSoon: number;
        };
        totalUsers: {
            current: number;
            lastMonth: number;
            growth: string;
        };
        systemHealth: {
            percentage: number;
            status: string;
            message: string;
        };
    }>;
    getRecentActivity(limit?: number): Promise<({
        timeAgo: string;
        id: string;
        type: string;
        message: string;
        timestamp: Date;
        user: string;
        metadata: {
            productId: string;
            productName: string;
            discountCode?: undefined;
            discountValue?: undefined;
            userId?: undefined;
            email?: undefined;
            orderId?: undefined;
            amount?: undefined;
        };
    } | {
        timeAgo: string;
        id: string;
        type: string;
        message: string;
        timestamp: Date;
        user: string;
        metadata: {
            discountCode: string;
            discountValue: number;
            productId?: undefined;
            productName?: undefined;
            userId?: undefined;
            email?: undefined;
            orderId?: undefined;
            amount?: undefined;
        };
    } | {
        timeAgo: string;
        id: string;
        type: string;
        message: string;
        timestamp: Date;
        user: string;
        metadata: {
            userId: string;
            email: string;
            productId?: undefined;
            productName?: undefined;
            discountCode?: undefined;
            discountValue?: undefined;
            orderId?: undefined;
            amount?: undefined;
        };
    } | {
        timeAgo: string;
        id: string;
        type: string;
        message: string;
        timestamp: Date;
        user: string;
        metadata: {
            orderId: string;
            amount: number;
            productId?: undefined;
            productName?: undefined;
            discountCode?: undefined;
            discountValue?: undefined;
            userId?: undefined;
            email?: undefined;
        };
    })[]>;
    logActivity(type: string, message: string, user: string, metadata?: any): Promise<{
        id: string;
        type: string;
        message: string;
        timestamp: Date;
        user: string;
        metadata: any;
    }>;
    private getTimeAgo;
}
export declare class AppService {
    getHello(): string;
}
