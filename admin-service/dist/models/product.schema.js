"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    sku: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String },
    price_cents: { type: Number, required: true },
    currency: { type: String, required: true },
    stock: { type: Number, default: 0 },
    is_active: { type: Boolean, default: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, versionKey: false });
exports.default = (0, mongoose_1.model)('Product', ProductSchema);
//# sourceMappingURL=product.schema.js.map