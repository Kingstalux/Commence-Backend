import { EventService } from '../app.service';
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    findAll(): Promise<any[]>;
    findOne(data: any): Promise<any>;
    create(createEventDto: any): Promise<any>;
    logCheckoutEvent(data: any): Promise<any>;
    logOrderEvent(data: any): Promise<any>;
}
