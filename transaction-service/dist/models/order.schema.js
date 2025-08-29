"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const OrderSchema = new mongoose_1.Schema({
    user_id: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    total_cents: { type: Number, required: true },
    currency: { type: String, required: true },
    status: { type: String, enum: ['PENDING', 'PAID', 'FAILED'], default: 'PENDING' },
    created_at: { type: Date, default: Date.now },
});
exports.default = (0, mongoose_1.model)('Order', OrderSchema);
//# sourceMappingURL=order.schema.js.map