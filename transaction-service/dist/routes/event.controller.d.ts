import { EventService } from '../app.service';
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("../models/event.schema").IEvent, {}, {}> & import("../models/event.schema").IEvent & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("../models/event.schema").IEvent, {}, {}> & import("../models/event.schema").IEvent & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    create(createEventDto: any): Promise<import("mongoose").Document<unknown, {}, import("../models/event.schema").IEvent, {}, {}> & import("../models/event.schema").IEvent & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
