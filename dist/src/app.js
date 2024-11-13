"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const authRouter_1 = __importDefault(require("./routes/authRouter"));
const connectToDb_1 = require("./config/connectToDb");
const PORT = process.env.PORT || 770;
const app = (0, express_1.default)();
(0, connectToDb_1.connectToDb)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/auth", authRouter_1.default);
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});