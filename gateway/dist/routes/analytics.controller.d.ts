import { ClientProxy } from '@nestjs/microservices';
export declare class AnalyticsController {
    private readonly client;
    constructor(client: ClientProxy);
    getDashboardAnalytics(): import("rxjs").Observable<any>;
    getRecentActivity(limit?: string): import("rxjs").Observable<any>;
    logActivity(data: {
        type: string;
        message: string;
        user: string;
        metadata?: any;
    }): import("rxjs").Observable<any>;
}
