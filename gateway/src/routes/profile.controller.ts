import { Controller, Get, Put, Body, Param, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('profiles')
export class ProfileController {
  constructor(@Inject('USER_SERVICE') private readonly client: ClientProxy) {}

  @Get(':id')
  getProfile(@Param('id') id: string) {
    return this.client.send({ cmd: 'getProfile' }, { id });
  }

  @Put(':id')
  updateProfile(@Param('id') id: string, @Body() updateProfileDto: any) {
    return this.client.send({ cmd: 'updateProfile' }, { id, ...updateProfileDto });
  }
}
