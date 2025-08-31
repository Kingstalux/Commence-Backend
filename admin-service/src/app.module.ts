import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import {
  AppService,
  ProductService,
  DiscountService,
  MediaService,
  FeatureFlagService,
  SystemService,
  AdminUserService,
  AnalyticsService,
} from './app.service';
import { ProductController } from './routes/product.controller';
import { InventoryController } from './routes/inventory.controller';
import { DiscountController } from './routes/discount.controller';
import { MediaController } from './routes/media.controller';
import { FeatureFlagsController } from './routes/feature-flags.controller';
import { SystemController } from './routes/system.controller';
import { AdminUsersController } from './routes/admin-users.controller';
import { AnalyticsController } from './routes/analytics.controller';
import { Product, ProductSchema } from './models/product.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGODB_URI || 'mongodb://localhost:27017/adminservice',
      {
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
      },
    ),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
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
    ]),
  ],
  controllers: [
    AppController,
    ProductController,
    InventoryController,
    DiscountController,
    MediaController,
    FeatureFlagsController,
    SystemController,
    AdminUsersController,
    AnalyticsController,
  ],
  providers: [
    AppService,
    ProductService,
    DiscountService,
    MediaService,
    FeatureFlagService,
    SystemService,
    AdminUserService,
    AnalyticsService,
  ],
})
export class AppModule {}
