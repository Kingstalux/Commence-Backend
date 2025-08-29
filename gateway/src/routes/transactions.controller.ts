import { Controller, Get, Body, Param, Headers, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('api/transactions')
export class TransactionsController {
  constructor(
    @Inject('TRANSACTION_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Get()
  getTransactions(@Headers('authorization') token: string) {
    return this.client.send({ cmd: 'get_transactions' }, { token });
  }

  @Get(':id')
  getTransactionById(
    @Param('id') id: string,
    @Headers('authorization') token: string,
  ) {
    return this.client.send({ cmd: 'get_transaction_by_id' }, { id, token });
  }
}

@Controller('api/admin/transactions')
export class AdminTransactionsController {
  constructor(
    @Inject('TRANSACTION_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Get()
  getAdminTransactions() {
    return this.client.send({ cmd: 'admin_get_transactions' }, {});
  }

  @Get('analytics')
  getTransactionAnalytics() {
    return this.client.send({ cmd: 'admin_get_transaction_analytics' }, {});
  }

  @Get('export')
  exportTransactions(@Body() data: any) {
    return this.client.send({ cmd: 'admin_export_transactions' }, data);
  }
}
