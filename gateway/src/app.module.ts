import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './routes/user.controller';
import { AuthController } from './routes/auth.controller';
import { ProfileController } from './routes/profile.controller';
import { RoleController } from './routes/role.controller';
import {
  ProductController,
  AdminProductController,
} from './routes/product.controller';
import { InventoryController } from './routes/inventory.controller';
import { DiscountController } from './routes/discount.controller';
import { MediaController } from './routes/media.controller';
import { CartController } from './routes/cart.controller';
import { OrderController } from './routes/order.controller';
import { PaymentController } from './routes/payment.controller';
import { EventController } from './routes/event.controller';
import { CheckoutController } from './routes/checkout.controller';
import { FeatureFlagsController } from './routes/feature-flags.controller';
import { SystemController } from './routes/system.controller';
import { AdminUsersController } from './routes/admin-users.controller';
import {
  TransactionsController,
  AdminTransactionsController,
} from './routes/transactions.controller';
import { NotificationsController } from './routes/notifications.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'user_queue',
          queueOptions: { durable: false },
        },
      },
      {
        name: 'ADMIN_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'admin_queue',
          queueOptions: { durable: false },
        },
      },
      {
        name: 'TRANSACTION_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'transaction_queue',
          queueOptions: { durable: false },
        },
      },
    ]),
  ],
  controllers: [
    AppController,
    UserController,
    AuthController,
    ProfileController,
    RoleController,
    ProductController,
    AdminProductController,
    InventoryController,
    DiscountController,
    MediaController,
    CartController,
    OrderController,
    PaymentController,
    EventController,
    CheckoutController,
    FeatureFlagsController,
    SystemController,
    AdminUsersController,
    TransactionsController,
    AdminTransactionsController,
    NotificationsController,
  ],
  providers: [AppService],
})
export class AppModule {}
