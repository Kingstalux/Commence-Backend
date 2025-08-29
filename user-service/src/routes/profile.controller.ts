import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserService } from '../app.service';

@Controller()
export class ProfileController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ cmd: 'update_profile' })
  updateProfile(data: any) {
    // Extract user ID from token in a real implementation
    const userId = data.userId || data.id;
    return this.userService.updateProfile(userId, data);
  }

  @MessagePattern({ cmd: 'update_password' })
  updatePassword(data: any) {
    return this.userService.updatePassword(data);
  }

  @MessagePattern({ cmd: 'delete_account' })
  deleteAccount(data: any) {
    // Extract user ID from token in a real implementation
    const userId = data.userId || data.id;
    return this.userService.deleteAccount(userId);
  }

  @MessagePattern({ cmd: 'get_preferences' })
  getPreferences(data: any) {
    // Extract user ID from token in a real implementation
    const userId = data.userId || data.id;
    return this.userService.getUserPreferences(userId);
  }

  @MessagePattern({ cmd: 'update_preferences' })
  updatePreferences(data: any) {
    // Extract user ID from token in a real implementation
    const userId = data.userId || data.id;
    return this.userService.updateUserPreferences(userId, data.preferences);
  }
}
