"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const organizationController_1 = require("../controllers/organizationController");
const organizationRouter = (0, express_1.Router)();
organizationRouter.get('/', organizationController_1.getAllOrganization);
exports.default = organizationRouter;
