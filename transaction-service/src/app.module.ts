import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import {
  AppService,
  ProductCatalogService,
  CheckoutService,
  OrderService,
  TransactionService,
  NotificationService,
  CartService,
  EventService,
  PaymentService,
} from './app.service';
import { ProductsController } from './routes/products.controller';
import { CheckoutController } from './routes/checkout.controller';
import { OrderController } from './routes/order.controller';
import {
  TransactionsController,
  AdminTransactionsController,
} from './routes/transactions.controller';
import { NotificationsController } from './routes/notifications.controller';
import { CartController } from './routes/cart.controller';
import { EventController } from './routes/event.controller';
import { PaymentController } from './routes/payment.controller';
import { Order, OrderSchema } from './models/order.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGODB_URI || 'mongodb://localhost:27017/transactionservice',
      {
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
      },
    ),
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'your-default-secret-key',
      signOptions: {
        expiresIn: '24h',
        issuer: 'commence-user-service',
      },
    }),
  ],
  controllers: [
    AppController,
    ProductsController,
    CheckoutController,
    OrderController,
    TransactionsController,
    AdminTransactionsController,
    NotificationsController,
    CartController,
    EventController,
    PaymentController,
  ],
  providers: [
    AppService,
    ProductCatalogService,
    CheckoutService,
    OrderService,
    TransactionService,
    NotificationService,
    CartService,
    EventService,
    PaymentService,
  ],
})
export class AppModule {}
