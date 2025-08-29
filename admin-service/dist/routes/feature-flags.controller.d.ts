import { FeatureFlagService } from '../app.service';
export declare class FeatureFlagsController {
    private readonly featureFlagService;
    constructor(featureFlagService: FeatureFlagService);
    getFeatureFlags(): Promise<{
        [k: string]: boolean;
    }>;
    updateFeatureFlag(data: any): Promise<{
        flag: string;
        value: boolean;
    }>;
}
