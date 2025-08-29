import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import {
  AppService,
  UserService,
  PaymentMethodService,
  CartService,
} from './app.service';
import { AuthController } from './routes/auth.controller';
import { ProfileController } from './routes/profile.controller';
import { RoleController } from './routes/role.controller';
import { UserController } from './routes/user.controller';
import { PaymentMethodsController } from './routes/payment-methods.controller';
import { CartController } from './routes/cart.controller';
import { User, UserSchema } from './models/user.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGODB_URI || 'mongodb://localhost:27017/userservice',
      {
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
      },
    ),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [
    AppController,
    AuthController,
    ProfileController,
    RoleController,
    UserController,
    PaymentMethodsController,
    CartController,
  ],
  providers: [AppService, UserService, PaymentMethodService, CartService],
})
export class AppModule {}
