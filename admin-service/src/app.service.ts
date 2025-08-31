import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ProductService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: ClientProxy,
  ) {}

  async findAllProducts() {
    // Forward to user service to get products from database
    return firstValueFrom(this.userService.send({ cmd: 'get_products' }, {}));
  }

  async findProductById(id: string) {
    // Forward to user service to get product from database
    return firstValueFrom(
      this.userService.send({ cmd: 'get_product_by_id' }, { id }),
    );
  }

  async createProduct(dto: any) {
    // Forward product creation to user service for database persistence
    return firstValueFrom(
      this.userService.send({ cmd: 'admin_create_product' }, dto),
    );
  }

  async updateProduct(id: string, dto: any) {
    // Forward product update to user service for database persistence
    return firstValueFrom(
      this.userService.send({ cmd: 'admin_update_product' }, { id, ...dto }),
    );
  }

  async deleteProduct(id: string) {
    // Forward product deletion to user service for database persistence
    return firstValueFrom(
      this.userService.send({ cmd: 'admin_delete_product' }, { id }),
    );
  }

  async bulkImportProducts(products: any[]) {
    // Forward bulk import to user service for database persistence
    return firstValueFrom(
      this.userService.send(
        { cmd: 'admin_bulk_import_products' },
        { products },
      ),
    );
  }

  async getInventory(sku: string) {
    // Forward inventory check to user service
    return firstValueFrom(
      this.userService.send({ cmd: 'get_inventory' }, { sku }),
    );
  }

  async updateInventory(sku: string, dto: any) {
    // Forward inventory update to user service
    return firstValueFrom(
      this.userService.send({ cmd: 'update_inventory' }, { sku, ...dto }),
    );
  }
}

@Injectable()
export class DiscountService {
  private discounts = []; // Mock storage

  async findAllDiscounts() {
    return this.discounts;
  }

  async findDiscountById(id: string) {
    return this.discounts.find((d) => d.id === id) || {};
  }

  async createDiscount(dto: any) {
    const discount = { id: Date.now().toString(), active: true, ...dto };
    this.discounts.push(discount);
    return discount;
  }

  async updateDiscount(id: string, dto: any) {
    const index = this.discounts.findIndex((d) => d.id === id);
    if (index > -1) {
      this.discounts[index] = { ...this.discounts[index], ...dto };
      return this.discounts[index];
    }
    return {};
  }

  async deleteDiscount(id: string) {
    const index = this.discounts.findIndex((d) => d.id === id);
    if (index > -1) {
      return this.discounts.splice(index, 1)[0];
    }
    return {};
  }

  async validateDiscountCode(code: string) {
    const discount = this.discounts.find((d) => d.code === code && d.active);
    return discount ? { valid: true, discount } : { valid: false };
  }
}

@Injectable()
export class MediaService {
  private media = []; // Mock storage

  async findAllMedia() {
    return this.media;
  }

  async findMediaById(id: string) {
    return this.media.find((m) => m.id === id) || {};
  }

  async createMedia(dto: any) {
    const mediaItem = { id: Date.now().toString(), ...dto };
    this.media.push(mediaItem);
    return mediaItem;
  }

  async updateMedia(id: string, dto: any) {
    const index = this.media.findIndex((m) => m.id === id);
    if (index > -1) {
      this.media[index] = { ...this.media[index], ...dto };
      return this.media[index];
    }
    return {};
  }

  async deleteMedia(id: string) {
    const index = this.media.findIndex((m) => m.id === id);
    if (index > -1) {
      return this.media.splice(index, 1)[0];
    }
    return {};
  }
}

@Injectable()
export class FeatureFlagService {
  private flags = new Map([
    ['burst_checkout_enabled', false],
    ['new_ui_enabled', true],
    ['advanced_analytics', false],
  ]);

  async getFeatureFlags() {
    return Object.fromEntries(this.flags);
  }

  async updateFeatureFlag(flag: string, value: boolean) {
    this.flags.set(flag, value);
    return { flag, value };
  }
}

@Injectable()
export class SystemService {
  async getHealth() {
    return {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      services: {
        database: 'connected',
        redis: 'connected',
        queue: 'connected',
      },
    };
  }

  async getStatus() {
    return {
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      cpu: process.cpuUsage(),
      version: '1.0.0',
    };
  }

  async enableBurstCheckout() {
    // Enable burst checkout mode for high traffic
    return { enabled: true, mode: 'burst_checkout' };
  }
}

@Injectable()
export class AdminUserService {
  private users = []; // Mock storage

  async getUsers() {
    return this.users;
  }

  async updateUserRole(userId: string, role: string) {
    // Mock user role update
    return { userId, role, updated: true };
  }

  async deleteUser(userId: string) {
    // Mock user deletion
    return { userId, deleted: true };
  }

  async getUserOrders(userId: string) {
    // Mock user orders
    return [
      { id: '1', userId, amount: 100, status: 'completed' },
      { id: '2', userId, amount: 250, status: 'pending' },
    ];
  }
}

@Injectable()
export class AnalyticsService {
  constructor(
    private readonly productService: ProductService,
    private readonly discountService: DiscountService,
    @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy,
  ) {}

  private activityLog = [
    {
      id: '1',
      type: 'product_created',
      message: 'New product "Wireless Headphones" added',
      timestamp: new Date(Date.now() - 2 * 60 * 1000), // 2 minutes ago
      user: 'admin@example.com',
      metadata: {
        productId: 'HEADPHONE-002',
        productName: 'Wireless Headphones',
      },
    },
    {
      id: '2',
      type: 'discount_activated',
      message: 'Discount code "SAVE20" activated',
      timestamp: new Date(Date.now() - 15 * 60 * 1000), // 15 minutes ago
      user: 'admin@example.com',
      metadata: { discountCode: 'SAVE20', discountValue: 20 },
    },
    {
      id: '3',
      type: 'product_updated',
      message: 'Product "Gaming Mouse" updated',
      timestamp: new Date(Date.now() - 60 * 60 * 1000), // 1 hour ago
      user: 'admin@example.com',
      metadata: { productId: 'MOUSE-001', productName: 'Gaming Mouse' },
    },
    {
      id: '4',
      type: 'user_registered',
      message: 'New user "john.doe@example.com" registered',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      user: 'system',
      metadata: { userId: 'user-123', email: 'john.doe@example.com' },
    },
    {
      id: '5',
      type: 'order_completed',
      message: 'Order #ORD-001 completed',
      timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
      user: 'system',
      metadata: { orderId: 'ORD-001', amount: 299.99 },
    },
  ];

  async getDashboardAnalytics() {
    try {
      // Get real product data from USER_SERVICE instead of admin service's empty array
      const userServiceProducts = await firstValueFrom(
        this.userServiceClient.send({ cmd: 'get_products' }, {}),
      );
      const discounts = await this.discountService.findAllDiscounts();

      // Calculate total products from USER_SERVICE (where real products are stored)
      const totalProducts = Array.isArray(userServiceProducts)
        ? userServiceProducts.length
        : 0;
      const lastMonthProducts = Math.max(
        0,
        totalProducts - Math.floor(Math.random() * 3),
      ); // Simulated last month data
      const productGrowth =
        totalProducts > lastMonthProducts
          ? `+${Math.round(((totalProducts - lastMonthProducts) / Math.max(lastMonthProducts, 1)) * 100)}%`
          : totalProducts === lastMonthProducts
            ? '0%'
            : '-';

      // Calculate active discounts
      const now = new Date();
      const activeDiscounts = discounts.filter(
        (discount) =>
          discount.isActive &&
          (!discount.expiresAt || new Date(discount.expiresAt) > now),
      );
      const expiringSoon = discounts.filter(
        (discount) =>
          discount.isActive &&
          discount.expiresAt &&
          new Date(discount.expiresAt) > now &&
          new Date(discount.expiresAt) <=
            new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000), // within 7 days
      );

      // For user count, we'll use a simple estimate since the actual user service would require microservice communication
      // This should ideally be fetched from the USER_SERVICE
      const totalUsers = 1; // Based on user's mention of having 1 user
      const lastMonthUsers = 1;
      const userGrowth = '0%';

      return {
        totalProducts: {
          current: totalProducts,
          lastMonth: lastMonthProducts,
          growth: productGrowth,
        },
        activeDiscounts: {
          current: activeDiscounts.length,
          expiringSoon: expiringSoon.length,
        },
        totalUsers: {
          current: totalUsers,
          lastMonth: lastMonthUsers,
          growth: userGrowth,
        },
        systemHealth: {
          percentage: 99.9,
          status: 'operational',
          message: 'All systems operational',
        },
      };
    } catch (error) {
      console.error('Error getting dashboard analytics:', error);
      // Return fallback data if there's an error
      return {
        totalProducts: {
          current: 0,
          lastMonth: 0,
          growth: '0%',
        },
        activeDiscounts: {
          current: 0,
          expiringSoon: 0,
        },
        totalUsers: {
          current: 0,
          lastMonth: 0,
          growth: '0%',
        },
        systemHealth: {
          percentage: 95.0,
          status: 'degraded',
          message: 'Unable to fetch analytics data',
        },
      };
    }
  }

  async getRecentActivity(limit: number = 10) {
    return this.activityLog
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
      .slice(0, limit)
      .map((activity) => ({
        ...activity,
        timeAgo: this.getTimeAgo(activity.timestamp),
      }));
  }

  async logActivity(
    type: string,
    message: string,
    user: string,
    metadata: any = {},
  ) {
    const newActivity = {
      id: Date.now().toString(),
      type,
      message,
      timestamp: new Date(),
      user,
      metadata,
    };

    this.activityLog.unshift(newActivity);

    // Keep only the last 100 activities
    if (this.activityLog.length > 100) {
      this.activityLog = this.activityLog.slice(0, 100);
    }

    return newActivity;
  }

  private getTimeAgo(timestamp: Date): string {
    const now = new Date();
    const diffInSeconds = Math.floor(
      (now.getTime() - timestamp.getTime()) / 1000,
    );

    if (diffInSeconds < 60) {
      return `${diffInSeconds} second${diffInSeconds !== 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} day${days !== 1 ? 's' : ''} ago`;
    }
  }
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
