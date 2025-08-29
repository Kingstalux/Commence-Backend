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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminProductController = exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let ProductController = class ProductController {
    constructor(client) {
        this.client = client;
    }
    getProducts(filters) {
        return this.client.send({ cmd: 'get_products' }, filters);
    }
    getFeaturedProducts() {
        return this.client.send({ cmd: 'get_featured_products' }, {});
    }
    getCategories() {
        return this.client.send({ cmd: 'get_categories' }, {});
    }
    searchProducts(query) {
        return this.client.send({ cmd: 'search_products' }, { query });
    }
    getProductById(id) {
        return this.client.send({ cmd: 'get_product_by_id' }, { id });
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Get)('featured'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "getFeaturedProducts", null);
__decorate([
    (0, common_1.Get)('categories'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "getCategories", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('q')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "searchProducts", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "getProductById", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('api/products'),
    __param(0, (0, common_1.Inject)('TRANSACTION_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], ProductController);
let AdminProductController = class AdminProductController {
    constructor(client) {
        this.client = client;
    }
    getAdminProducts() {
        return this.client.send({ cmd: 'admin_get_products' }, {});
    }
    getAdminProduct(id) {
        return this.client.send({ cmd: 'admin_get_product' }, { id });
    }
    createProduct(createProductDto) {
        return this.client.send({ cmd: 'admin_create_product' }, createProductDto);
    }
    updateProduct(id, updateProductDto) {
        return this.client.send({ cmd: 'admin_update_product' }, { id, ...updateProductDto });
    }
    deleteProduct(id) {
        return this.client.send({ cmd: 'admin_delete_product' }, { id });
    }
    bulkImportProducts(data) {
        return this.client.send({ cmd: 'admin_bulk_import_products' }, data);
    }
};
exports.AdminProductController = AdminProductController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminProductController.prototype, "getAdminProducts", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminProductController.prototype, "getAdminProduct", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AdminProductController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AdminProductController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminProductController.prototype, "deleteProduct", null);
__decorate([
    (0, common_1.Post)('bulk-import'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AdminProductController.prototype, "bulkImportProducts", null);
exports.AdminProductController = AdminProductController = __decorate([
    (0, common_1.Controller)('api/admin/products'),
    __param(0, (0, common_1.Inject)('ADMIN_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], AdminProductController);
//# sourceMappingURL=product.controller.js.map