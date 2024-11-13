"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const missilesSchema = new mongoose_1.Schema({
    name: {
        type: String,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    speed: {
        type: Number,
        required: true,
    },
    intercepts: {
        type: [String],
        required: true,
        default: [],
    },
    price: {
        type: Number,
        required: true,
    }
});
exports.default = (0, mongoose_1.model)("Missiles", missilesSchema);
