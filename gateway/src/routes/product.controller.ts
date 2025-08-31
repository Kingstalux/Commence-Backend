import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  Inject,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

// Public Product Catalog (User Service - where products are stored)
@Controller('api/products')
export class ProductController {
  constructor(@Inject('USER_SERVICE') private readonly client: ClientProxy) {}

  @Get()
  getProducts(@Query() filters: any) {
    return this.client.send({ cmd: 'get_products' }, filters);
  }

  @Get('featured')
  getFeaturedProducts() {
    return this.client.send({ cmd: 'get_featured_products' }, {});
  }

  @Get('categories')
  getCategories() {
    return this.client.send({ cmd: 'get_categories' }, {});
  }

  @Get('search')
  searchProducts(@Query('q') query: string) {
    return this.client.send({ cmd: 'search_products' }, { query });
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.client.send({ cmd: 'get_product_by_id' }, { id });
  }
}

// Admin Product Management (Admin Service)
@Controller('api/admin/products')
export class AdminProductController {
  constructor(@Inject('ADMIN_SERVICE') private readonly client: ClientProxy) {}

  @Get()
  getAdminProducts() {
    return this.client.send({ cmd: 'admin_get_products' }, {});
  }

  @Get(':id')
  getAdminProduct(@Param('id') id: string) {
    return this.client.send({ cmd: 'admin_get_product' }, { id });
  }

  @Post()
  createProduct(@Body() createProductDto: any) {
    return this.client.send({ cmd: 'admin_create_product' }, createProductDto);
  }

  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() updateProductDto: any) {
    return this.client.send(
      { cmd: 'admin_update_product' },
      { id, ...updateProductDto },
    );
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.client.send({ cmd: 'admin_delete_product' }, { id });
  }

  @Post('bulk-import')
  bulkImportProducts(@Body() data: any) {
    return this.client.send({ cmd: 'admin_bulk_import_products' }, data);
  }
}
