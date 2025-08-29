import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { EventService } from '../app.service';

@Controller()
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @MessagePattern({ cmd: 'get_all_events' })
  findAll() {
    return this.eventService.findAllEvents();
  }

  @MessagePattern({ cmd: 'get_event_by_id' })
  findOne(data: any) {
    return this.eventService.findEventById(data.id);
  }

  @MessagePattern({ cmd: 'create_event' })
  create(createEventDto: any) {
    return this.eventService.createEvent(createEventDto);
  }

  @MessagePattern({ cmd: 'log_checkout_event' })
  logCheckoutEvent(data: any) {
    return this.eventService.logCheckoutEvent(data);
  }

  @MessagePattern({ cmd: 'log_order_event' })
  logOrderEvent(data: any) {
    return this.eventService.logOrderEvent(data);
  }
}
