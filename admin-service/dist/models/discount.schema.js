"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DiscountSchema = new mongoose_1.Schema({
    code: { type: String, required: true, unique: true },
    type: { type: String, enum: ['PERCENT', 'FIXED'], required: true },
    value: { type: Number, required: true },
    starts_at: { type: Date },
    ends_at: { type: Date },
    constraints: { type: mongoose_1.Schema.Types.Mixed },
});
exports.default = (0, mongoose_1.model)('Discount', DiscountSchema);
//# sourceMappingURL=discount.schema.js.map