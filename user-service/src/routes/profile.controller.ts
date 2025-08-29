import { Controller, Get, Put, Body, Param } from '@nestjs/common';
import { UserService } from '../app.service';

@Controller('profiles')
export class ProfileController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  getProfile(@Param('id') id: string) {
    return this.userService.getProfile(id);
  }

  @Put(':id')
  updateProfile(@Param('id') id: string, @Body() updateProfileDto: any) {
    return this.userService.updateProfile(id, updateProfileDto);
  }
}
