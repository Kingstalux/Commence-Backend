"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const OrderItemSchema = new mongoose_1.Schema({
    order_id: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Order', required: true },
    product_id: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Product', required: true },
    qty: { type: Number, required: true },
    price_snapshot_cents: { type: Number, required: true },
});
exports.default = (0, mongoose_1.model)('OrderItem', OrderItemSchema);
//# sourceMappingURL=orderItem.schema.js.map