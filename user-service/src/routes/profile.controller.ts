import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../app.service';

@Controller()
export class ProfileController {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  private extractUserIdFromToken(token: string): string {
    try {
      // Remove 'Bearer ' prefix if present
      const cleanToken = token.replace(/^Bearer\s+/, '');

      // Verify and decode the JWT token
      const payload = this.jwtService.verify(cleanToken);

      // Return the user ID from the 'sub' (subject) field
      return payload.sub;
    } catch (error) {
      console.error(
        'ProfileController: Invalid or expired token:',
        error.message,
      );
      throw new Error('Invalid or expired authentication token');
    }
  }

  @MessagePattern({ cmd: 'update_profile' })
  updateProfile(data: any) {
    const userId = this.extractUserIdFromToken(data.token);
    return this.userService.updateProfile(userId, data);
  }

  @MessagePattern({ cmd: 'update_password' })
  updatePassword(data: any) {
    const userId = this.extractUserIdFromToken(data.token);
    return this.userService.updatePassword({ ...data, userId });
  }

  @MessagePattern({ cmd: 'delete_account' })
  deleteAccount(data: any) {
    const userId = this.extractUserIdFromToken(data.token);
    return this.userService.deleteAccount(userId);
  }

  @MessagePattern({ cmd: 'get_preferences' })
  getPreferences(data: any) {
    const userId = this.extractUserIdFromToken(data.token);
    return this.userService.getUserPreferences(userId);
  }

  @MessagePattern({ cmd: 'update_preferences' })
  updatePreferences(data: any) {
    const userId = this.extractUserIdFromToken(data.token);
    return this.userService.updateUserPreferences(userId, data.preferences);
  }
}
