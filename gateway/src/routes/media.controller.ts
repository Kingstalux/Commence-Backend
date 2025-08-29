import { Controller, Get, Post, Put, Delete, Body, Param, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('media')
export class MediaController {
  constructor(@Inject('ADMIN_SERVICE') private readonly client: ClientProxy) {}

  @Get()
  findAll() {
    return this.client.send({ cmd: 'findAllMedia' }, {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.client.send({ cmd: 'findMediaById' }, { id });
  }

  @Post()
  create(@Body() createMediaDto: any) {
    return this.client.send({ cmd: 'createMedia' }, createMediaDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMediaDto: any) {
    return this.client.send({ cmd: 'updateMedia' }, { id, ...updateMediaDto });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.client.send({ cmd: 'deleteMedia' }, { id });
  }
}
