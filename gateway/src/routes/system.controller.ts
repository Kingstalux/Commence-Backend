import { Controller, Get, Post, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('api/admin/system')
export class SystemController {
  constructor(@Inject('ADMIN_SERVICE') private readonly client: ClientProxy) {}

  @Get('health')
  getHealth() {
    return this.client.send({ cmd: 'admin_system_health' }, {});
  }

  @Get('status')
  getStatus() {
    return this.client.send({ cmd: 'admin_system_status' }, {});
  }

  @Post('burst-checkout')
  enableBurstCheckout() {
    return this.client.send({ cmd: 'admin_enable_burst_checkout' }, {});
  }
}
