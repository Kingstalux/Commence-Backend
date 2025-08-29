"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SessionSchema = new mongoose_1.Schema({
    user_id: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    refresh_token_hash: { type: String, required: true },
    expires_at: { type: Date, required: true },
    created_at: { type: Date, default: Date.now },
});
exports.default = (0, mongoose_1.model)('Session', SessionSchema);
//# sourceMappingURL=session.schema.js.map