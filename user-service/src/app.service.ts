import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './models/user.schema';
// Temporarily commenting out other models until they're updated
// import Role from './models/role.schema';
// import UserRole from './models/userRole.schema';
// import Session from './models/session.schema';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findAllUsers() {
    try {
      return await this.userModel.find().exec();
    } catch (error) {
      console.error('UserService: Error finding users:', error);
      throw error;
    }
  }
  async findUserById(id: string) {
    try {
      return await this.userModel.findById(id).exec();
    } catch (error) {
      console.error('UserService: Error finding user by ID:', error);
      throw error;
    }
  }

  async createUser(data: any) {
    try {
      const user = new this.userModel(data);
      return await user.save();
    } catch (error) {
      console.error('UserService: Error creating user:', error);
      throw error;
    }
  }
  async updateUser(id: string, data: any) {
    try {
      return await this.userModel
        .findByIdAndUpdate(id, data, { new: true })
        .exec();
    } catch (error) {
      console.error('UserService: Error updating user:', error);
      throw error;
    }
  }

  async deleteUser(id: string) {
    try {
      return await this.userModel.findByIdAndDelete(id).exec();
    } catch (error) {
      console.error('UserService: Error deleting user:', error);
      throw error;
    }
  }
  async findUserRoles(userId: string) {
    return await this.userModel.find({ _id: userId }).exec();
  }

  async findSessions(userId: string) {
    return await this.userModel.find({ _id: userId }).exec();
  }

  // Auth methods
  async signup(signupDto: any) {
    try {
      const user = new this.userModel(signupDto);
      return await user.save();
    } catch (error) {
      console.error('UserService: Error during signup:', error);
      throw error;
    }
  }

  async login(loginDto: any) {
    try {
      const user = await this.userModel
        .findOne({
          email: loginDto.email,
          password: loginDto.password,
        })
        .exec();

      if (user) {
        // Mock session creation until Session model is implemented
        const mockSession = {
          id: Date.now().toString(),
          user_id: user._id,
          token: `jwt-token-${Date.now()}`,
        };
        return { user, token: mockSession.token };
      }
      throw new Error('Invalid credentials');
    } catch (error) {
      console.error('UserService: Error during login:', error);
      throw error;
    }
  }
  async logout(data: any) {
    return { token: data.token, logged_out: true };
  }

  async refreshToken(data: any) {
    const newToken = `new-jwt-token-${Date.now()}`;
    return { token: newToken };
  }

  async getMe(data: any) {
    return { id: '1', email: 'mock@example.com', name: 'Mock User' };
  }

  // Profile methods
  async getProfile(id: string) {
    try {
      return await this.userModel.findById(id).exec();
    } catch (error) {
      console.error('UserService: Error getting profile:', error);
      throw error;
    }
  }

  async updateProfile(id: string, updateProfileDto: any) {
    try {
      return await this.userModel
        .findByIdAndUpdate(id, updateProfileDto, { new: true })
        .exec();
    } catch (error) {
      console.error('UserService: Error updating profile:', error);
      throw error;
    }
  }

  async updatePassword(data: any) {
    try {
      return await this.userModel
        .findByIdAndUpdate(
          data.userId,
          { password: data.newPassword },
          { new: true },
        )
        .exec();
    } catch (error) {
      console.error('UserService: Error updating password:', error);
      throw error;
    }
  }

  async deleteAccount(id: string) {
    try {
      return await this.userModel.findByIdAndDelete(id).exec();
    } catch (error) {
      console.error('UserService: Error deleting account:', error);
      throw error;
    }
  }
  async getUserPreferences(id: string) {
    try {
      return await this.userModel.findById(id).exec();
    } catch (error) {
      console.error('UserService: Error getting preferences:', error);
      throw error;
    }
  }

  async updateUserPreferences(id: string, preferences: any) {
    try {
      return await this.userModel
        .findByIdAndUpdate(id, { preferences }, { new: true })
        .exec();
    } catch (error) {
      console.error('UserService: Error updating preferences:', error);
      throw error;
    }
  }

  // Role methods
  async getRoles() {
    return await this.userModel.find().exec();
  }

  async createRole(createRoleDto: any) {
    return await this.userModel.create(createRoleDto);
  }
}

@Injectable()
export class PaymentMethodService {
  async getUserPaymentMethods(userId: string) {
    // Mock payment methods - in production, integrate with payment processor
    return [
      { id: '1', userId, type: 'card', last4: '1234', isDefault: true },
      { id: '2', userId, type: 'card', last4: '5678', isDefault: false },
    ];
  }

  async addPaymentMethod(userId: string, paymentMethodDto: any) {
    // Add payment method logic
    return { id: Date.now().toString(), userId, ...paymentMethodDto };
  }

  async updatePaymentMethod(id: string, updateDto: any) {
    // Update payment method logic
    return { id, ...updateDto };
  }

  async deletePaymentMethod(id: string) {
    // Delete payment method logic
    return { success: true };
  }

  async setDefaultPaymentMethod(id: string, userId: string) {
    // Set default payment method logic
    return { id, isDefault: true };
  }
}

@Injectable()
export class CartService {
  private carts = new Map(); // In-memory storage for demo, use database in production

  async getCart(userId: string) {
    return this.carts.get(userId) || { items: [], discount: null, total: 0 };
  }

  async addCartItem(userId: string, itemDto: any) {
    const cart: any = this.getCart(userId) || {
      items: [],
      discount: null,
      total: 0,
    };
    cart.items.push({ id: Date.now().toString(), ...itemDto });
    this.carts.set(userId, cart);
    return cart;
  }

  async updateCartItem(userId: string, itemId: string, updateDto: any) {
    const cart = this.carts.get(userId);
    if (cart) {
      const itemIndex = cart.items.findIndex((item) => item.id === itemId);
      if (itemIndex > -1) {
        cart.items[itemIndex] = { ...cart.items[itemIndex], ...updateDto };
        this.carts.set(userId, cart);
      }
    }
    return cart;
  }

  async removeCartItem(userId: string, itemId: string) {
    const cart = this.carts.get(userId);
    if (cart) {
      cart.items = cart.items.filter((item) => item.id !== itemId);
      this.carts.set(userId, cart);
    }
    return cart;
  }

  async clearCart(userId: string) {
    this.carts.set(userId, { items: [], discount: null, total: 0 });
    return this.carts.get(userId);
  }

  async applyDiscount(userId: string, discountCode: string) {
    const cart = this.carts.get(userId);
    if (cart) {
      cart.discount = { code: discountCode, amount: 10 }; // Mock discount
      this.carts.set(userId, cart);
    }
    return cart;
  }

  async removeDiscount(userId: string) {
    const cart = this.carts.get(userId);
    if (cart) {
      cart.discount = null;
      this.carts.set(userId, cart);
    }
    return cart;
  }
}
