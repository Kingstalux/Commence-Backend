import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AnalyticsService } from '../app.service';

@Controller()
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @MessagePattern({ cmd: 'admin_get_analytics' })
  getDashboardAnalytics() {
    return this.analyticsService.getDashboardAnalytics();
  }

  @MessagePattern({ cmd: 'admin_get_recent_activity' })
  getRecentActivity(data: { limit?: number }) {
    const { limit = 10 } = data;
    return this.analyticsService.getRecentActivity(limit);
  }

  @MessagePattern({ cmd: 'admin_log_activity' })
  logActivity(data: {
    type: string;
    message: string;
    user: string;
    metadata?: any;
  }) {
    const { type, message, user, metadata = {} } = data;
    return this.analyticsService.logActivity(type, message, user, metadata);
  }
}
