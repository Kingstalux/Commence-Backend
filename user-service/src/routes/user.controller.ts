import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserService } from '../app.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ cmd: 'findAllUsers' })
  async findAll() {
    console.log('findAllUsers');
    const data = await this.userService.findAllUsers();
    console.log('data', data);
    return data;
  }

  @MessagePattern({ cmd: 'findUserById' })
  findOne(data: any) {
    return this.userService.findUserById(data.id);
  }

  @MessagePattern({ cmd: 'createUser' })
  create(createUserDto: any) {
    return this.userService.createUser(createUserDto);
  }

  @MessagePattern({ cmd: 'updateUser' })
  update(data: any) {
    return this.userService.updateUser(data.id, data);
  }

  @MessagePattern({ cmd: 'deleteUser' })
  remove(data: any) {
    return this.userService.deleteUser(data.id);
  }
}
