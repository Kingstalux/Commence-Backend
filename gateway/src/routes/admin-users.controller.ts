import {
  Controller,
  Get,
  Put,
  Delete,
  Body,
  Param,
  Inject,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('api/admin/users')
export class AdminUsersController {
  constructor(@Inject('ADMIN_SERVICE') private readonly client: ClientProxy) {}

  @Get()
  getUsers() {
    return this.client.send({ cmd: 'admin_get_users' }, {});
  }

  @Put(':id/role')
  updateUserRole(@Param('id') id: string, @Body() data: any) {
    return this.client.send({ cmd: 'admin_update_user_role' }, { id, ...data });
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.client.send({ cmd: 'admin_delete_user' }, { id });
  }

  @Get(':id/orders')
  getUserOrders(@Param('id') id: string) {
    return this.client.send({ cmd: 'admin_get_user_orders' }, { id });
  }
}
