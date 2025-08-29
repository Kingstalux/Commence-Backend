import { ClientProxy } from '@nestjs/microservices';
export declare class FeatureFlagsController {
    private readonly client;
    constructor(client: ClientProxy);
    getFeatureFlags(): import("rxjs").Observable<any>;
    updateFeatureFlag(flag: string, data: any): import("rxjs").Observable<any>;
}
