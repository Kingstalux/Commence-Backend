import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { DiscountService } from '../app.service';

@Controller('discounts')
export class DiscountController {
  constructor(private readonly discountService: DiscountService) {}

  @Get()
  findAll() {
    return this.discountService.findAllDiscounts();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.discountService.findDiscountById(id);
  }

  @Post()
  create(@Body() createDiscountDto: any) {
    return this.discountService.createDiscount(createDiscountDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDiscountDto: any) {
    return this.discountService.updateDiscount(id, updateDiscountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.discountService.deleteDiscount(id);
  }
}
