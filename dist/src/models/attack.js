"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AttackSchema = new mongoose_1.Schema({
    username: {
        type: String,
    },
    nameOfMissel: {
        type: String,
        required: true,
    },
    create_at: {
        type: Date,
        required: true,
        default: new Date()
    },
    arrived_in: {
        type: Date
    },
    status: {
        type: String
    }
});
exports.default = (0, mongoose_1.model)("Attacks", AttackSchema);
