import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { User, UserDocument } from './models/user.schema';
import { Cart, CartDocument } from './models/cart.schema';
import { ProductModel, ProductDocument } from './models/product.schema';
import {
  PaymentMethod,
  PaymentMethodDocument,
} from './models/payment-method.schema';
import { Role, RoleDocument } from './models/role.schema';
import { UserRole, UserRoleDocument } from './models/userRole.schema';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Role.name) private roleModel: Model<RoleDocument>,
    @InjectModel(UserRole.name) private userRoleModel: Model<UserRoleDocument>,
    private jwtService: JwtService,
  ) {}

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
        // Create JWT payload with user data
        const payload = {
          sub: user._id.toString(), // Subject (user ID)
          email: user.email,
          name: user.name,
          iat: Math.floor(Date.now() / 1000), // Issued at time
        };

        // Generate JWT token
        const token = this.jwtService.sign(payload);

        return {
          user: {
            id: user._id,
            email: user.email,
            name: user.name,
            preferences: user.preferences,
          },
          token,
        };
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
    try {
      // Extract user from current token
      const cleanToken = data.token.replace(/^Bearer\s+/, '');
      const payload = this.jwtService.verify(cleanToken);

      // Find the current user
      const user = await this.userModel.findById(payload.sub).exec();
      if (!user) {
        throw new Error('User not found');
      }

      // Generate new token with fresh expiration
      const newPayload = {
        sub: user._id.toString(),
        email: user.email,
        name: user.name,
        iat: Math.floor(Date.now() / 1000),
      };

      const newToken = this.jwtService.sign(newPayload);
      return { token: newToken };
    } catch (error) {
      console.error('UserService: Error refreshing token:', error);
      throw new Error('Invalid token for refresh');
    }
  }

  async getMe(data: any) {
    try {
      // Extract user ID from token
      const cleanToken = data.token.replace(/^Bearer\s+/, '');
      const payload = this.jwtService.verify(cleanToken);

      // Find and return current user
      const user = await this.userModel.findById(payload.sub).exec();
      if (!user) {
        throw new Error('User not found');
      }

      // Get user's role from the database
      let userRole = 'USER'; // Default role
      try {
        const userRoleRecord = await this.userRoleModel
          .findOne({ user_id: user._id })
          .exec();
        if (userRoleRecord) {
          const roleRecord = await this.roleModel
            .findById(userRoleRecord.role_id)
            .exec();
          if (roleRecord && roleRecord.name === 'admin') {
            userRole = 'ADMIN';
          }
        }
      } catch (roleError) {
        console.warn(
          'UserService: Could not determine user role, defaulting to USER:',
          roleError,
        );
      }

      console.log(`UserService: User ${user.email} has role: ${userRole}`);

      return {
        id: user._id,
        email: user.email,
        name: user.name,
        role: userRole,
        preferences: user.preferences,
      };
    } catch (error) {
      console.error('UserService: Error getting user:', error);
      throw new Error('Invalid token or user not found');
    }
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
  constructor(
    @InjectModel(PaymentMethod.name)
    private paymentMethodModel: Model<PaymentMethodDocument>,
  ) {}
  async getUserPaymentMethods(userId: string) {
    try {
      return await this.paymentMethodModel
        .find({ userId, isActive: true })
        .sort({ isDefault: -1, createdAt: -1 })
        .exec();
    } catch (error) {
      console.error(
        'PaymentMethodService: Error getting payment methods:',
        error,
      );
      throw error;
    }
  }

  async addPaymentMethod(userId: string, paymentMethodDto: any) {
    try {
      // If this is being set as default, remove default from other payment methods
      if (paymentMethodDto.isDefault) {
        await this.paymentMethodModel.updateMany(
          { userId },
          { isDefault: false },
        );
      }

      const paymentMethod = new this.paymentMethodModel({
        userId,
        ...paymentMethodDto,
      });

      return await paymentMethod.save();
    } catch (error) {
      console.error(
        'PaymentMethodService: Error adding payment method:',
        error,
      );
      throw error;
    }
  }

  async updatePaymentMethod(id: string, updateDto: any) {
    try {
      return await this.paymentMethodModel
        .findByIdAndUpdate(id, updateDto, { new: true })
        .exec();
    } catch (error) {
      console.error(
        'PaymentMethodService: Error updating payment method:',
        error,
      );
      throw error;
    }
  }

  async deletePaymentMethod(id: string) {
    try {
      // Soft delete by setting isActive to false
      const result = await this.paymentMethodModel
        .findByIdAndUpdate(id, { isActive: false }, { new: true })
        .exec();

      if (!result) {
        throw new Error('Payment method not found');
      }

      return { success: true, deletedId: id };
    } catch (error) {
      console.error(
        'PaymentMethodService: Error deleting payment method:',
        error,
      );
      throw error;
    }
  }

  async setDefaultPaymentMethod(id: string, userId: string) {
    try {
      // Remove default from all user's payment methods
      await this.paymentMethodModel.updateMany(
        { userId },
        { isDefault: false },
      );

      // Set the specified payment method as default
      const result = await this.paymentMethodModel
        .findOneAndUpdate(
          { _id: id, userId, isActive: true },
          { isDefault: true },
          { new: true },
        )
        .exec();

      if (!result) {
        throw new Error('Payment method not found or not owned by user');
      }

      return result;
    } catch (error) {
      console.error(
        'PaymentMethodService: Error setting default payment method:',
        error,
      );
      throw error;
    }
  }
}

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(ProductModel.name)
    private productModel: Model<ProductDocument>,
  ) {}

  async getProducts(filters?: any) {
    try {
      const query: any = {};

      // Apply filters
      if (filters?.category) {
        query.category = filters.category;
      }
      if (filters?.inStock !== undefined) {
        query.inStock = filters.inStock;
      }
      if (filters?.minPrice !== undefined) {
        query.price = { ...query.price, $gte: filters.minPrice };
      }
      if (filters?.maxPrice !== undefined) {
        query.price = { ...query.price, $lte: filters.maxPrice };
      }

      let mongoQuery = this.productModel.find(query);

      // Apply search
      if (filters?.search) {
        const searchRegex = new RegExp(filters.search, 'i');
        mongoQuery = this.productModel.find({
          ...query,
          $or: [
            { name: searchRegex },
            { description: searchRegex },
            { tags: { $in: [searchRegex] } },
          ],
        });
      }

      // Apply sorting
      if (filters?.sortBy) {
        switch (filters.sortBy) {
          case 'price_asc':
            mongoQuery = mongoQuery.sort({ price: 1 });
            break;
          case 'price_desc':
            mongoQuery = mongoQuery.sort({ price: -1 });
            break;
          case 'name_asc':
            mongoQuery = mongoQuery.sort({ name: 1 });
            break;
          case 'name_desc':
            mongoQuery = mongoQuery.sort({ name: -1 });
            break;
          case 'newest':
            mongoQuery = mongoQuery.sort({ createdAt: -1 });
            break;
          default:
            mongoQuery = mongoQuery.sort({ createdAt: -1 });
        }
      } else {
        mongoQuery = mongoQuery.sort({ createdAt: -1 });
      }

      return await mongoQuery.exec();
    } catch (error) {
      console.error('ProductService: Error getting products:', error);
      throw error;
    }
  }

  async getProductById(id: string) {
    try {
      return await this.productModel.findById(id).exec();
    } catch (error) {
      console.error('ProductService: Error getting product by ID:', error);
      throw error;
    }
  }

  async searchProducts(query: string) {
    try {
      const searchRegex = new RegExp(query, 'i');
      return await this.productModel
        .find({
          $or: [
            { name: searchRegex },
            { description: searchRegex },
            { category: searchRegex },
            { tags: { $in: [searchRegex] } },
          ],
        })
        .exec();
    } catch (error) {
      console.error('ProductService: Error searching products:', error);
      throw error;
    }
  }

  async getCategories() {
    try {
      const categories = await this.productModel.distinct('category').exec();
      return categories;
    } catch (error) {
      console.error('ProductService: Error getting categories:', error);
      throw error;
    }
  }

  async getFeaturedProducts() {
    try {
      // For now, return products with discounted prices as "featured"
      return await this.productModel
        .find({
          discountedPrice: { $exists: true, $ne: null },
          inStock: true,
        })
        .limit(6)
        .exec();
    } catch (error) {
      console.error('ProductService: Error getting featured products:', error);
      throw error;
    }
  }

  // Admin product management methods
  async createProduct(createProductDto: any) {
    try {
      console.log('ProductService: Creating product:', createProductDto);
      const product = new this.productModel(createProductDto);
      const savedProduct = await product.save();
      console.log(
        'ProductService: Product created successfully:',
        savedProduct._id,
      );
      return savedProduct;
    } catch (error) {
      console.error('ProductService: Error creating product:', error);
      throw error;
    }
  }

  async updateProduct(id: string, updateProductDto: any) {
    try {
      console.log('ProductService: Updating product:', id, updateProductDto);
      const updatedProduct = await this.productModel
        .findByIdAndUpdate(id, updateProductDto, { new: true })
        .exec();
      if (!updatedProduct) {
        throw new Error('Product not found');
      }
      console.log(
        'ProductService: Product updated successfully:',
        updatedProduct._id,
      );
      return updatedProduct;
    } catch (error) {
      console.error('ProductService: Error updating product:', error);
      throw error;
    }
  }

  async deleteProduct(id: string) {
    try {
      console.log('ProductService: Deleting product:', id);
      const deletedProduct = await this.productModel
        .findByIdAndDelete(id)
        .exec();
      if (!deletedProduct) {
        throw new Error('Product not found');
      }
      console.log(
        'ProductService: Product deleted successfully:',
        deletedProduct._id,
      );
      return { success: true, deletedProduct };
    } catch (error) {
      console.error('ProductService: Error deleting product:', error);
      throw error;
    }
  }

  async bulkImportProducts(products: any[]) {
    try {
      console.log('ProductService: Bulk importing products:', products.length);
      const importedProducts = await this.productModel.insertMany(products);
      console.log(
        'ProductService: Bulk import successful:',
        importedProducts.length,
      );
      return {
        imported: importedProducts.length,
        total: await this.productModel.countDocuments(),
        products: importedProducts,
      };
    } catch (error) {
      console.error('ProductService: Error bulk importing products:', error);
      throw error;
    }
  }

  // Inventory management methods
  async getInventory(sku: string) {
    try {
      const product = await this.productModel.findOne({ sku }).exec();
      return product
        ? { sku, quantity: product.stockCount || 0 }
        : { sku, quantity: 0 };
    } catch (error) {
      console.error('ProductService: Error getting inventory:', error);
      throw error;
    }
  }

  async updateInventory(sku: string, updateDto: any) {
    try {
      const updatedProduct = await this.productModel
        .findOneAndUpdate(
          { sku },
          { stockCount: updateDto.quantity },
          { new: true },
        )
        .exec();
      if (!updatedProduct) {
        throw new Error('Product with SKU not found');
      }
      return { sku, quantity: updatedProduct.stockCount };
    } catch (error) {
      console.error('ProductService: Error updating inventory:', error);
      throw error;
    }
  }
}

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart.name) private cartModel: Model<CartDocument>,
    @InjectModel(ProductModel.name)
    private productModel: Model<ProductDocument>,
  ) {}

  async getCart(userId: string) {
    let cart = await this.cartModel.findOne({ userId }).exec();

    if (!cart) {
      // Create new cart if it doesn't exist
      cart = new this.cartModel({
        userId,
        items: [],
        subtotal: 0,
        discountAmount: 0,
      });
      await cart.save();
    }

    // Calculate subtotal
    cart.subtotal = cart.items.reduce((sum, item) => {
      const price = item.product.discountedPrice || item.product.price;
      return sum + price * item.quantity;
    }, 0);

    // Save updated subtotal
    await cart.save();

    return cart;
  }

  async addCartItem(userId: string, itemDto: any) {
    try {
      // Find product from database using ProductService
      const product = await this.productModel
        .findById(itemDto.productId)
        .exec();
      if (!product) {
        throw new Error('Product not found');
      }

      if (!product.inStock) {
        throw new Error('Product is out of stock');
      }

      let cart = await this.cartModel.findOne({ userId }).exec();

      if (!cart) {
        cart = new this.cartModel({
          userId,
          items: [],
          subtotal: 0,
          discountAmount: 0,
        });
      }

      // Check if item already exists
      const existingItemIndex = cart.items.findIndex(
        (item) => item.productId === itemDto.productId,
      );

      if (existingItemIndex >= 0) {
        // Update existing item quantity
        cart.items[existingItemIndex].quantity += itemDto.quantity || 1;
      } else {
        // Add new item
        const newItem = {
          id: `item-${Date.now()}`,
          productId: itemDto.productId,
          quantity: itemDto.quantity || 1,
          addedAt: new Date(),
          product: {
            id: product._id.toString(),
            name: product.name,
            title: product.title,
            price: product.price,
            discountedPrice: product.discountedPrice,
            imageUrl: product.imageUrl,
          },
        };
        cart.items.push(newItem);
      }

      // Calculate subtotal
      cart.subtotal = cart.items.reduce((sum, item) => {
        const price = item.product.discountedPrice || item.product.price;
        return sum + price * item.quantity;
      }, 0);

      await cart.save();

      // Return the added/updated item
      const addedItem = cart.items.find(
        (item) => item.productId === itemDto.productId,
      );
      return addedItem;
    } catch (error) {
      throw error;
    }
  }

  async updateCartItem(userId: string, itemId: string, updateDto: any) {
    try {
      const cart = await this.cartModel.findOne({ userId }).exec();

      if (!cart) {
        throw new Error('Cart not found');
      }

      const itemIndex = cart.items.findIndex((item) => item.id === itemId);

      if (itemIndex === -1) {
        throw new Error('Cart item not found');
      }

      if (updateDto.quantity <= 0) {
        // Remove item if quantity is 0 or negative
        cart.items.splice(itemIndex, 1);
      } else {
        // Update item
        cart.items[itemIndex].quantity = updateDto.quantity;
        if (updateDto.liked !== undefined) {
          cart.items[itemIndex].liked = updateDto.liked;
        }
      }

      // Recalculate subtotal
      cart.subtotal = cart.items.reduce((sum, item) => {
        const price = item.product.discountedPrice || item.product.price;
        return sum + price * item.quantity;
      }, 0);

      await cart.save();

      return updateDto.quantity <= 0 ? null : cart.items[itemIndex];
    } catch (error) {
      throw error;
    }
  }

  async removeCartItem(userId: string, itemId: string) {
    try {
      const cart = await this.cartModel.findOne({ userId }).exec();

      if (!cart) {
        throw new Error('Cart not found');
      }

      const itemIndex = cart.items.findIndex((item) => item.id === itemId);

      if (itemIndex === -1) {
        throw new Error('Cart item not found');
      }

      cart.items.splice(itemIndex, 1);

      // Recalculate subtotal
      cart.subtotal = cart.items.reduce((sum, item) => {
        const price = item.product.discountedPrice || item.product.price;
        return sum + price * item.quantity;
      }, 0);

      await cart.save();

      return { success: true };
    } catch (error) {
      throw error;
    }
  }

  async clearCart(userId: string) {
    let cart = await this.cartModel.findOne({ userId }).exec();

    if (!cart) {
      cart = new this.cartModel({
        userId,
        items: [],
        subtotal: 0,
        discountAmount: 0,
      });
    } else {
      cart.items = [];
      cart.subtotal = 0;
      cart.discountAmount = 0;
      cart.discountCode = undefined;
    }

    await cart.save();
    return cart;
  }

  async applyDiscount(userId: string, discountCode: string) {
    const cart = await this.cartModel.findOne({ userId }).exec();

    if (!cart) {
      throw new Error('Cart not found');
    }

    // Mock discount logic - TODO: Integrate with discount service
    const discountAmount = cart.subtotal * 0.1; // 10% discount
    cart.discountAmount = discountAmount;
    cart.discountCode = discountCode;

    await cart.save();
    return cart;
  }

  async removeDiscount(userId: string) {
    const cart = await this.cartModel.findOne({ userId }).exec();

    if (!cart) {
      throw new Error('Cart not found');
    }

    cart.discountAmount = 0;
    cart.discountCode = undefined;

    await cart.save();
    return cart;
  }
}
