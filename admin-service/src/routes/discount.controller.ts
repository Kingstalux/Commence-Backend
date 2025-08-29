import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { DiscountService } from '../app.service';

@Controller()
export class DiscountController {
  constructor(private readonly discountService: DiscountService) {}

  @MessagePattern({ cmd: 'admin_get_discounts' })
  findAll() {
    return this.discountService.findAllDiscounts();
  }

  @MessagePattern({ cmd: 'admin_get_discount' })
  findOne(data: any) {
    return this.discountService.findDiscountById(data.id);
  }

  @MessagePattern({ cmd: 'admin_create_discount' })
  create(createDiscountDto: any) {
    return this.discountService.createDiscount(createDiscountDto);
  }

  @MessagePattern({ cmd: 'admin_update_discount' })
  update(data: any) {
    return this.discountService.updateDiscount(data.id, data);
  }

  @MessagePattern({ cmd: 'admin_delete_discount' })
  remove(data: any) {
    return this.discountService.deleteDiscount(data.id);
  }

  @MessagePattern({ cmd: 'admin_validate_discount' })
  validateCode(data: any) {
    return this.discountService.validateDiscountCode(data.code);
  }
}
