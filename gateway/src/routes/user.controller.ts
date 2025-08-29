import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Inject,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('users')
export class UserController {
  constructor(@Inject('USER_SERVICE') private readonly client: ClientProxy) {}

  @Get()
  async findAll() {
    console.log('findAllUsers');
    return this.client.send({ cmd: 'findAllUsers' }, {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.client.send({ cmd: 'findUserById' }, { id });
  }

  @Post()
  create(@Body() createUserDto: any) {
    return this.client.send({ cmd: 'createUser' }, createUserDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: any) {
    return this.client.send({ cmd: 'updateUser' }, { id, ...updateUserDto });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.client.send({ cmd: 'deleteUser' }, { id });
  }
}
