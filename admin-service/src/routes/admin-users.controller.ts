import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AdminUserService } from '../app.service';

@Controller()
export class AdminUsersController {
  constructor(private readonly adminUserService: AdminUserService) {}

  @MessagePattern({ cmd: 'admin_get_users' })
  getUsers() {
    return this.adminUserService.getUsers();
  }

  @MessagePattern({ cmd: 'admin_update_user_role' })
  updateUserRole(data: any) {
    return this.adminUserService.updateUserRole(data.id, data.role);
  }

  @MessagePattern({ cmd: 'admin_delete_user' })
  deleteUser(data: any) {
    return this.adminUserService.deleteUser(data.id);
  }

  @MessagePattern({ cmd: 'admin_get_user_orders' })
  getUserOrders(data: any) {
    return this.adminUserService.getUserOrders(data.id);
  }
}
