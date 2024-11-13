"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const organizationsSchema = new mongoose_1.Schema({
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
exports.default = (0, mongoose_1.model)("organizations", organizationsSchema);
