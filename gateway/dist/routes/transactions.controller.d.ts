import { ClientProxy } from '@nestjs/microservices';
export declare class TransactionsController {
    private readonly client;
    constructor(client: ClientProxy);
    getTransactions(token: string): import("rxjs").Observable<any>;
    getTransactionById(id: string, token: string): import("rxjs").Observable<any>;
}
export declare class AdminTransactionsController {
    private readonly client;
    constructor(client: ClientProxy);
    getAdminTransactions(): import("rxjs").Observable<any>;
    getTransactionAnalytics(): import("rxjs").Observable<any>;
    exportTransactions(data: any): import("rxjs").Observable<any>;
}
