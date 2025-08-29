import { Controller, Get, Post, Body, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('roles')
export class RoleController {
  constructor(@Inject('USER_SERVICE') private readonly client: ClientProxy) {}

  @Get()
  getRoles() {
    return this.client.send({ cmd: 'getRoles' }, {});
  }

  @Post()
  createRole(@Body() createRoleDto: any) {
    return this.client.send({ cmd: 'createRole' }, createRoleDto);
  }
}
