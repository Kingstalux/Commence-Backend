import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserService } from '../app.service';

@Controller()
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ cmd: 'auth_signup' })
  signup(signupDto: any) {
    return this.userService.signup(signupDto);
  }

  @MessagePattern({ cmd: 'auth_login' })
  login(loginDto: any) {
    return this.userService.login(loginDto);
  }

  @MessagePattern({ cmd: 'auth_logout' })
  logout(data: any) {
    return this.userService.logout(data);
  }

  @MessagePattern({ cmd: 'auth_refresh' })
  refreshToken(data: any) {
    return this.userService.refreshToken(data);
  }

  @MessagePattern({ cmd: 'auth_me' })
  getMe(data: any) {
    return this.userService.getMe(data);
  }
}
