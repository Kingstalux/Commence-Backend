"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserRoleSchema = new mongoose_1.Schema({
    user_id: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    role_id: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Role', required: true },
});
exports.default = (0, mongoose_1.model)('UserRole', UserRoleSchema);
//# sourceMappingURL=userRole.schema.js.map