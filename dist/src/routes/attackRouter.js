"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const attackController_1 = require("../controllers/attackController");
const vetifyUser_1 = __importDefault(require("../middelwares/vetifyUser"));
const attackRouter = (0, express_1.Router)();
attackRouter.get('/', vetifyUser_1.default, attackController_1.getAllAttack);
exports.default = attackRouter;
