"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = exports.MediaService = exports.DiscountService = exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
let ProductService = class ProductService {
    findAllProducts() { return []; }
    findProductById(id) { return {}; }
    createProduct(dto) { return {}; }
    updateProduct(id, dto) { return {}; }
    deleteProduct(id) { return {}; }
    getInventory(sku) { return {}; }
    updateInventory(sku, dto) { return {}; }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)()
], ProductService);
let DiscountService = class DiscountService {
    findAllDiscounts() { return []; }
    findDiscountById(id) { return {}; }
    createDiscount(dto) { return {}; }
    updateDiscount(id, dto) { return {}; }
    deleteDiscount(id) { return {}; }
};
exports.DiscountService = DiscountService;
exports.DiscountService = DiscountService = __decorate([
    (0, common_1.Injectable)()
], DiscountService);
let MediaService = class MediaService {
    findAllMedia() { return []; }
    findMediaById(id) { return {}; }
    createMedia(dto) { return {}; }
    updateMedia(id, dto) { return {}; }
    deleteMedia(id) { return {}; }
};
exports.MediaService = MediaService;
exports.MediaService = MediaService = __decorate([
    (0, common_1.Injectable)()
], MediaService);
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map