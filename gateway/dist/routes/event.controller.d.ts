import { ClientProxy } from '@nestjs/microservices';
export declare class EventController {
    private readonly client;
    constructor(client: ClientProxy);
    findAll(): import("rxjs").Observable<any>;
    findOne(id: string): import("rxjs").Observable<any>;
    create(createEventDto: any): import("rxjs").Observable<any>;
}
