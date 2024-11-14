"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vetifyUser_1 = __importDefault(require("../middelwares/vetifyUser"));
const userController_1 = require("../controllers/userController");
const userRouter = (0, express_1.Router)();
userRouter.get('/', vetifyUser_1.default, userController_1.getDetails);
exports.default = userRouter;
