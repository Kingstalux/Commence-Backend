import { ClientProxy } from '@nestjs/microservices';
export declare class ProfileController {
    private readonly client;
    constructor(client: ClientProxy);
    updateProfile(data: any, token: string): import("rxjs").Observable<any>;
    updatePassword(data: any, token: string): import("rxjs").Observable<any>;
    deleteAccount(token: string): import("rxjs").Observable<any>;
    getPreferences(token: string): import("rxjs").Observable<any>;
    updatePreferences(preferences: any, token: string): import("rxjs").Observable<any>;
    getPaymentMethods(token: string): import("rxjs").Observable<any>;
    addPaymentMethod(data: any, token: string): import("rxjs").Observable<any>;
    updatePaymentMethod(id: string, data: any, token: string): import("rxjs").Observable<any>;
    deletePaymentMethod(id: string, token: string): import("rxjs").Observable<any>;
    setDefaultPaymentMethod(id: string, token: string): import("rxjs").Observable<any>;
}
