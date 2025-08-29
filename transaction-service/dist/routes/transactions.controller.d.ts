import { TransactionService } from '../app.service';
export declare class TransactionsController {
    private readonly transactionService;
    constructor(transactionService: TransactionService);
    getTransactions(data: any): Promise<any[]>;
    getTransactionById(data: any): Promise<any>;
}
export declare class AdminTransactionsController {
    private readonly transactionService;
    constructor(transactionService: TransactionService);
    getAdminTransactions(): Promise<any[]>;
    getTransactionAnalytics(): Promise<{
        total: number;
        totalAmount: any;
        avgAmount: number;
        dailyTransactions: {};
        topCategories: any[];
    }>;
    exportTransactions(data: any): Promise<{
        filename: string;
        data: string;
        downloadUrl: string;
    }>;
}
