"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PaymentSchema = new mongoose_1.Schema({
    order_id: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Order', required: true },
    provider: { type: String, enum: ['FAKE', 'STRIPE'], required: true },
    status: { type: String, required: true },
    ref: { type: String },
    created_at: { type: Date, default: Date.now },
});
exports.default = (0, mongoose_1.model)('Payment', PaymentSchema);
//# sourceMappingURL=payment.schema.js.map