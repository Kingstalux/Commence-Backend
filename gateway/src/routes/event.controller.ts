import { Controller, Get, Post, Body, Param, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('events')
export class EventController {
  constructor(@Inject('TRANSACTION_SERVICE') private readonly client: ClientProxy) {}

  @Get()
  findAll() {
    return this.client.send({ cmd: 'findAllEvents' }, {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.client.send({ cmd: 'findEventById' }, { id });
  }

  @Post()
  create(@Body() createEventDto: any) {
    return this.client.send({ cmd: 'createEvent' }, createEventDto);
  }
}
