import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from '../app.service';

@Controller('roles')
export class RoleController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getRoles() {
    return this.userService.getRoles();
  }

  @Post()
  createRole(@Body() createRoleDto: any) {
    return this.userService.createRole(createRoleDto);
  }
}
