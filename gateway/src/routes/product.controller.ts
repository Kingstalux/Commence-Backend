import { Controller, Get, Post, Put, Delete, Body, Param, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('products')
export class ProductController {
  constructor(@Inject('ADMIN_SERVICE') private readonly client: ClientProxy) {}

  @Get()
  findAll() {
    return this.client.send({ cmd: 'findAllProducts' }, {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.client.send({ cmd: 'findProductById' }, { id });
  }

  @Post()
  create(@Body() createProductDto: any) {
    return this.client.send({ cmd: 'createProduct' }, createProductDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: any) {
    return this.client.send({ cmd: 'updateProduct' }, { id, ...updateProductDto });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.client.send({ cmd: 'deleteProduct' }, { id });
  }
}
