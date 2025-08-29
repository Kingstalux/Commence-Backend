import { ClientProxy } from '@nestjs/microservices';
export declare class ProfileController {
    private readonly client;
    constructor(client: ClientProxy);
    getProfile(id: string): import("rxjs").Observable<any>;
    updateProfile(id: string, updateProfileDto: any): import("rxjs").Observable<any>;
}
