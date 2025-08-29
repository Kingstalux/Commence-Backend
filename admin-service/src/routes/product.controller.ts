import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProductService } from '../app.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll() {
    return this.productService.findAllProducts();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findProductById(id);
  }

  @Post()
  create(@Body() createProductDto: any) {
    return this.productService.createProduct(createProductDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: any) {
    return this.productService.updateProduct(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }
}
