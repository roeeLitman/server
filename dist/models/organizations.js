"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.organizationsSchema = void 0;
const mongoose_1 = require("mongoose");
exports.organizationsSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    resources: {
        type: [{ name: String, amount: Number }],
        required: true
    },
    budget: {
        type: Number,
    }
});
exports.default = (0, mongoose_1.model)("organizations", exports.organizationsSchema);
