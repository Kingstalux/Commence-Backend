import { ClientProxy } from '@nestjs/microservices';
export declare class MediaController {
    private readonly client;
    constructor(client: ClientProxy);
    findAll(): import("rxjs").Observable<any>;
    findOne(id: string): import("rxjs").Observable<any>;
    create(createMediaDto: any): import("rxjs").Observable<any>;
    update(id: string, updateMediaDto: any): import("rxjs").Observable<any>;
    remove(id: string): import("rxjs").Observable<any>;
}
