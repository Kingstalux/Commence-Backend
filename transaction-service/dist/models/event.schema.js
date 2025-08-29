"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const EventSchema = new mongoose_1.Schema({
    aggregate: { type: String, required: true },
    aggregate_id: { type: String, required: true },
    type: { type: String, required: true },
    payload: { type: mongoose_1.Schema.Types.Mixed },
    created_at: { type: Date, default: Date.now },
});
exports.default = (0, mongoose_1.model)('Event', EventSchema);
//# sourceMappingURL=event.schema.js.map