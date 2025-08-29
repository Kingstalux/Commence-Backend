import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Headers,
  Param,
  Inject,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('api/users')
export class ProfileController {
  constructor(@Inject('USER_SERVICE') private readonly client: ClientProxy) {}

  @Put('profile')
  updateProfile(@Body() data: any, @Headers('authorization') token: string) {
    return this.client.send({ cmd: 'update_profile' }, { ...data, token });
  }

  @Put('password')
  updatePassword(@Body() data: any, @Headers('authorization') token: string) {
    return this.client.send({ cmd: 'update_password' }, { ...data, token });
  }

  @Delete('account')
  deleteAccount(@Headers('authorization') token: string) {
    return this.client.send({ cmd: 'delete_account' }, { token });
  }

  @Get('preferences')
  getPreferences(@Headers('authorization') token: string) {
    return this.client.send({ cmd: 'get_preferences' }, { token });
  }

  @Put('preferences')
  updatePreferences(
    @Body() preferences: any,
    @Headers('authorization') token: string,
  ) {
    return this.client.send(
      { cmd: 'update_preferences' },
      { preferences, token },
    );
  }

  @Get('payment-methods')
  getPaymentMethods(@Headers('authorization') token: string) {
    return this.client.send({ cmd: 'get_payment_methods' }, { token });
  }

  @Post('payment-methods')
  addPaymentMethod(@Body() data: any, @Headers('authorization') token: string) {
    return this.client.send({ cmd: 'add_payment_method' }, { ...data, token });
  }

  @Put('payment-methods/:id')
  updatePaymentMethod(
    @Param('id') id: string,
    @Body() data: any,
    @Headers('authorization') token: string,
  ) {
    return this.client.send(
      { cmd: 'update_payment_method' },
      { id, ...data, token },
    );
  }

  @Delete('payment-methods/:id')
  deletePaymentMethod(
    @Param('id') id: string,
    @Headers('authorization') token: string,
  ) {
    return this.client.send({ cmd: 'delete_payment_method' }, { id, token });
  }

  @Put('payment-methods/:id/default')
  setDefaultPaymentMethod(
    @Param('id') id: string,
    @Headers('authorization') token: string,
  ) {
    return this.client.send(
      { cmd: 'set_default_payment_method' },
      { id, token },
    );
  }
}
