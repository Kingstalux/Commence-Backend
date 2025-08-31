import { AnalyticsService } from '../app.service';
export declare class AnalyticsController {
    private readonly analyticsService;
    constructor(analyticsService: AnalyticsService);
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
    getRecentActivity(data: {
        limit?: number;
    }): Promise<({
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
    logActivity(data: {
        type: string;
        message: string;
        user: string;
        metadata?: any;
    }): Promise<{
        id: string;
        type: string;
        message: string;
        timestamp: Date;
        user: string;
        metadata: any;
    }>;
}
