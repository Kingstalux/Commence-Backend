import { ClientProxy } from '@nestjs/microservices';
export declare class AuthController {
    private readonly client;
    constructor(client: ClientProxy);
    signup(signupDto: any): import("rxjs").Observable<any>;
    login(loginDto: any): import("rxjs").Observable<any>;
}
