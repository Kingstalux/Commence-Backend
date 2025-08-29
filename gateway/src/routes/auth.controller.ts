import { Controller, Post, Body, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('auth')
export class AuthController {
  constructor(@Inject('USER_SERVICE') private readonly client: ClientProxy) {}

  @Post('signup')
  signup(@Body() signupDto: any) {
    return this.client.send({ cmd: 'signup' }, signupDto);
  }

  @Post('login')
  login(@Body() loginDto: any) {
    return this.client.send({ cmd: 'login' }, loginDto);
  }
}
