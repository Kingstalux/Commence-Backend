import { Controller, Post, Get, Body, Headers, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('api/auth')
export class AuthController {
  constructor(@Inject('USER_SERVICE') private readonly client: ClientProxy) {}

  @Post('signup')
  signup(@Body() signupDto: any) {
    return this.client.send({ cmd: 'auth_signup' }, signupDto);
  }

  @Post('login')
  login(@Body() loginDto: any) {
    console.log("login", loginDto);
    return this.client.send({ cmd: 'auth_login' }, loginDto);
  }

  @Post('logout')
  logout(@Body() data: any) {
    return this.client.send({ cmd: 'auth_logout' }, data);
  }

  @Post('refresh')
  refreshToken(@Body() data: any) {
    return this.client.send({ cmd: 'auth_refresh' }, data);
  }

  @Get('me')
  getMe(@Headers('authorization') token: string) {
    return this.client.send({ cmd: 'auth_me' }, { token });
  }
}
