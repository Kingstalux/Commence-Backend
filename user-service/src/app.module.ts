import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import {
  AppService,
  UserService,
  PaymentMethodService,
  ProductService,
  CartService,
} from './app.service';
import { AuthController } from './routes/auth.controller';
import { ProfileController } from './routes/profile.controller';
import { RoleController } from './routes/role.controller';
import { UserController } from './routes/user.controller';
import { PaymentMethodsController } from './routes/payment-methods.controller';
import { ProductsController } from './routes/products.controller';
import { CartController } from './routes/cart.controller';
import { User, UserSchema } from './models/user.schema';
import { Cart, CartSchema } from './models/cart.schema';
import { ProductModel, ProductSchema } from './models/product.schema';
import {
  PaymentMethod,
  PaymentMethodSchema,
} from './models/payment-method.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGODB_URI || 'mongodb://localhost:27017/userservice',
      {
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
      },
    ),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Cart.name, schema: CartSchema },
      { name: ProductModel.name, schema: ProductSchema },
      { name: PaymentMethod.name, schema: PaymentMethodSchema },
    ]),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'your-default-secret-key',
      signOptions: {
        expiresIn: process.env.JWT_EXPIRES_IN || '24h',
        issuer: 'commence-user-service',
      },
    }),
  ],
  controllers: [
    AppController,
    AuthController,
    ProfileController,
    RoleController,
    UserController,
    PaymentMethodsController,
    ProductsController,
    CartController,
  ],
  providers: [
    AppService,
    UserService,
    PaymentMethodService,
    ProductService,
    CartService,
  ],
})
export class AppModule {}
