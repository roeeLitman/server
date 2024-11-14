"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const organizationController_1 = require("../controllers/organizationController");
const vetifyUser_1 = __importDefault(require("../middelwares/vetifyUser"));
const organizationRouter = (0, express_1.Router)();
organizationRouter.get('/', vetifyUser_1.default, organizationController_1.getAllOrganization);
exports.default = organizationRouter;
