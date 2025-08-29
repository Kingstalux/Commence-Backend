import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { SystemService } from '../app.service';

@Controller()
export class SystemController {
  constructor(private readonly systemService: SystemService) {}

  @MessagePattern({ cmd: 'admin_system_health' })
  getHealth() {
    return this.systemService.getHealth();
  }

  @MessagePattern({ cmd: 'admin_system_status' })
  getStatus() {
    return this.systemService.getStatus();
  }

  @MessagePattern({ cmd: 'admin_enable_burst_checkout' })
  enableBurstCheckout() {
    return this.systemService.enableBurstCheckout();
  }
}
