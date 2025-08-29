import { ClientProxy } from '@nestjs/microservices';
export declare class UserController {
    private readonly client;
    constructor(client: ClientProxy);
    findAll(): import("rxjs").Observable<any>;
    findOne(id: string): import("rxjs").Observable<any>;
    create(createUserDto: any): import("rxjs").Observable<any>;
    update(id: string, updateUserDto: any): import("rxjs").Observable<any>;
    remove(id: string): import("rxjs").Observable<any>;
}
