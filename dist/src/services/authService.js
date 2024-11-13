"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDataBase = void 0;
const missiles_1 = __importDefault(require("../../missiles"));
const missiles_2 = __importDefault(require("../models/missiles"));
const organizations_1 = __importDefault(require("../models/organizations"));
const organizations_2 = __importDefault(require("../../organizations"));
const initDataBase = async () => {
    try {
        // create sead for missiles
        for (const missile of missiles_1.default) {
            const newMissile = new missiles_2.default(missile);
            await newMissile.save();
        }
        // create sead for organization
        for (const organization of organizations_2.default) {
            const newOrganization = new organizations_1.default(organization);
            await newOrganization.save();
        }
    }
    catch (err) {
        console.log("eror blu blu blu");
        throw new Error("not init Data Base");
    }
};
exports.initDataBase = initDataBase;
