import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { TransactionService } from '../app.service';

@Controller()
export class TransactionsController {
  constructor(private readonly transactionService: TransactionService) {}

  @MessagePattern({ cmd: 'get_transactions' })
  getTransactions(data: any) {
    return this.transactionService.getTransactions(data.userId);
  }

  @MessagePattern({ cmd: 'get_transaction_by_id' })
  getTransactionById(data: any) {
    return this.transactionService.getTransactionById(data.id);
  }
}

@Controller()
export class AdminTransactionsController {
  constructor(private readonly transactionService: TransactionService) {}

  @MessagePattern({ cmd: 'admin_get_transactions' })
  getAdminTransactions() {
    return this.transactionService.getAdminTransactions();
  }

  @MessagePattern({ cmd: 'admin_get_transaction_analytics' })
  getTransactionAnalytics() {
    return this.transactionService.getTransactionAnalytics();
  }

  @MessagePattern({ cmd: 'admin_export_transactions' })
  exportTransactions(data: any) {
    return this.transactionService.exportTransactions(data.filters);
  }
}
