import { Controller, Get, Put, Body, Param, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('api/admin/feature-flags')
export class FeatureFlagsController {
  constructor(@Inject('ADMIN_SERVICE') private readonly client: ClientProxy) {}

  @Get()
  getFeatureFlags() {
    return this.client.send({ cmd: 'admin_get_feature_flags' }, {});
  }

  @Put(':flag')
  updateFeatureFlag(@Param('flag') flag: string, @Body() data: any) {
    return this.client.send(
      { cmd: 'admin_update_feature_flag' },
      { flag, ...data },
    );
  }
}
