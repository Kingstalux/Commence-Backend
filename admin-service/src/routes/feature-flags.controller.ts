import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { FeatureFlagService } from '../app.service';

@Controller()
export class FeatureFlagsController {
  constructor(private readonly featureFlagService: FeatureFlagService) {}

  @MessagePattern({ cmd: 'admin_get_feature_flags' })
  getFeatureFlags() {
    return this.featureFlagService.getFeatureFlags();
  }

  @MessagePattern({ cmd: 'admin_update_feature_flag' })
  updateFeatureFlag(data: any) {
    return this.featureFlagService.updateFeatureFlag(data.flag, data.value);
  }
}
