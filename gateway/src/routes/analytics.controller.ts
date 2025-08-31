import { Controller, Get, Post, Body, Query, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('api/admin/analytics')
export class AnalyticsController {
  constructor(@Inject('ADMIN_SERVICE') private readonly client: ClientProxy) {}

  @Get('dashboard')
  getDashboardAnalytics() {
    return this.client.send({ cmd: 'admin_get_analytics' }, {});
  }

  @Get('activity')
  getRecentActivity(@Query('limit') limit?: string) {
    return this.client.send({ cmd: 'admin_get_recent_activity' }, { 
      limit: limit ? parseInt(limit) : 10 
    });
  }

  @Post('activity')
  logActivity(@Body() data: { type: string; message: string; user: string; metadata?: any }) {
    return this.client.send({ cmd: 'admin_log_activity' }, data);
  }
}
