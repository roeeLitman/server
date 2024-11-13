"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    detailsOnOrganization: {
        type: { name: String, resources: [{ name: String, amount: Number }], budget: Number },
        required: true
    }
});
exports.default = (0, mongoose_1.model)("User", userSchema);
