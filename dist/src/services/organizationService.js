"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllOrganizationFromDb = void 0;
const organizations_1 = __importDefault(require("../models/organizations"));
const getAllOrganizationFromDb = async () => {
    const listOrg = await organizations_1.default.find({});
    return listOrg;
};
exports.getAllOrganizationFromDb = getAllOrganizationFromDb;
