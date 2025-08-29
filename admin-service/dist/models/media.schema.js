"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MediaSchema = new mongoose_1.Schema({
    product_id: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Product', required: true },
    url: { type: String, required: true },
    alt_text: { type: String },
    position: { type: Number, default: 0 },
});
exports.default = (0, mongoose_1.model)('Media', MediaSchema);
//# sourceMappingURL=media.schema.js.map