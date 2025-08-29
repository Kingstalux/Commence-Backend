import { ClientProxy } from '@nestjs/microservices';
export declare class AuthController {
    private readonly client;
    constructor(client: ClientProxy);
    signup(signupDto: any): import("rxjs").Observable<any>;
    login(loginDto: any): import("rxjs").Observable<any>;
    logout(data: any): import("rxjs").Observable<any>;
    refreshToken(data: any): import("rxjs").Observable<any>;
    getMe(token: string): import("rxjs").Observable<any>;
}
