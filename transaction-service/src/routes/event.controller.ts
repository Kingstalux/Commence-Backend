import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { EventService } from '../app.service';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  findAll() {
    return this.eventService.findAllEvents();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventService.findEventById(id);
  }

  @Post()
  create(@Body() createEventDto: any) {
    return this.eventService.createEvent(createEventDto);
  }
}
