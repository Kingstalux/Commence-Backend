import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products = []; // Mock storage

  async findAllProducts() {
    return this.products;
  }

  async findProductById(id: string) {
    return this.products.find((p) => p.id === id) || {};
  }

  async createProduct(dto: any) {
    const product = { id: Date.now().toString(), ...dto };
    this.products.push(product);
    return product;
  }

  async updateProduct(id: string, dto: any) {
    const index = this.products.findIndex((p) => p.id === id);
    if (index > -1) {
      this.products[index] = { ...this.products[index], ...dto };
      return this.products[index];
    }
    return {};
  }

  async deleteProduct(id: string) {
    const index = this.products.findIndex((p) => p.id === id);
    if (index > -1) {
      return this.products.splice(index, 1)[0];
    }
    return {};
  }

  async bulkImportProducts(products: any[]) {
    const imported = products.map((p) => ({
      id: Date.now().toString() + Math.random(),
      ...p,
    }));
    this.products.push(...imported);
    return { imported: imported.length, total: this.products.length };
  }

  async getInventory(sku: string) {
    const product = this.products.find((p) => p.sku === sku);
    return product ? { sku, quantity: product.quantity || 0 } : {};
  }

  async updateInventory(sku: string, dto: any) {
    const product = this.products.find((p) => p.sku === sku);
    if (product) {
      product.quantity = dto.quantity;
      return product;
    }
    return {};
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
    const discount = { id: Date.now().toString(), ...dto };
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
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
