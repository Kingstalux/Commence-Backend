"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const app_service_1 = require("../app.service");
let ProductsController = class ProductsController {
    constructor(productService) {
        this.productService = productService;
    }
    getProducts(filters) {
        return this.productService.getProducts(filters);
    }
    getFeaturedProducts() {
        return this.productService.getFeaturedProducts();
    }
    getCategories() {
        return this.productService.getCategories();
    }
    searchProducts(data) {
        return this.productService.searchProducts(data.query);
    }
    getProductById(data) {
        return this.productService.getProductById(data.id);
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get_products' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getProducts", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get_featured_products' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getFeaturedProducts", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get_categories' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getCategories", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'search_products' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "searchProducts", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get_product_by_id' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getProductById", null);
exports.ProductsController = ProductsController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.ProductService])
], ProductsController);
//# sourceMappingURL=products.controller.js.map