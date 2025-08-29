import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserService } from '../app.service';

@Controller()
export class RoleController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ cmd: 'getRoles' })
  getRoles() {
    return this.userService.getRoles();
  }

  @MessagePattern({ cmd: 'createRole' })
  createRole(createRoleDto: any) {
    return this.userService.createRole(createRoleDto);
  }
}
