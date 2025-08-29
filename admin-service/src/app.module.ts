
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, ProductService, DiscountService, MediaService } from './app.service';
import { ProductController } from './routes/product.controller';
import { InventoryController } from './routes/inventory.controller';
import { DiscountController } from './routes/discount.controller';
import { MediaController } from './routes/media.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductController,
    InventoryController,
    DiscountController,
    MediaController,
  ],
  providers: [AppService, ProductService, DiscountService, MediaService],
})
export class AppModule {}
