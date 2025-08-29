export declare class ProductService {
    private products;
    findAllProducts(): Promise<any[]>;
    findProductById(id: string): Promise<any>;
    createProduct(dto: any): Promise<any>;
    updateProduct(id: string, dto: any): Promise<any>;
    deleteProduct(id: string): Promise<any>;
    bulkImportProducts(products: any[]): Promise<{
        imported: number;
        total: number;
    }>;
    getInventory(sku: string): Promise<{
        sku: string;
        quantity: any;
    } | {
        sku?: undefined;
        quantity?: undefined;
    }>;
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
export declare class AppService {
    getHello(): string;
}
