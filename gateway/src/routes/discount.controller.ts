import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Inject,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('api/admin/discounts')
export class DiscountController {
  constructor(@Inject('ADMIN_SERVICE') private readonly client: ClientProxy) {}

  @Get()
  getDiscounts() {
    return this.client.send({ cmd: 'admin_get_discounts' }, {});
  }

  @Get(':id')
  getDiscount(@Param('id') id: string) {
    return this.client.send({ cmd: 'admin_get_discount' }, { id });
  }

  @Post()
  createDiscount(@Body() createDiscountDto: any) {
    return this.client.send(
      { cmd: 'admin_create_discount' },
      createDiscountDto,
    );
  }

  @Put(':id')
  updateDiscount(@Param('id') id: string, @Body() updateDiscountDto: any) {
    return this.client.send(
      { cmd: 'admin_update_discount' },
      { id, ...updateDiscountDto },
    );
  }

  @Delete(':id')
  deleteDiscount(@Param('id') id: string) {
    return this.client.send({ cmd: 'admin_delete_discount' }, { id });
  }

  @Get(':code/validate')
  validateDiscountCode(@Param('code') code: string) {
    return this.client.send({ cmd: 'admin_validate_discount' }, { code });
  }
}
