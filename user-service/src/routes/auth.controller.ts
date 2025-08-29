import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from '../app.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  signup(@Body() signupDto: any) {
    return this.userService.signup(signupDto);
  }

  @Post('login')
  login(@Body() loginDto: any) {
    return this.userService.login(loginDto);
  }
}
