import { SystemService } from '../app.service';
export declare class SystemController {
    private readonly systemService;
    constructor(systemService: SystemService);
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
