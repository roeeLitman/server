"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewAttack = void 0;
const attack_1 = __importDefault(require("../models/attack"));
const MissilesStatus_1 = require("../types/enum/MissilesStatus");
const createNewAttack = async (username, nameOfMisselAttack, timeToHit, arrived_in, loction) => {
    const newAttack = await new attack_1.default({ username, nameOfMissel: nameOfMisselAttack, timeToHit, status: MissilesStatus_1.MissilesStatus.Launched, loction, arrived_in:  });
    await newAttack.save();
    return newAttack._id;
};
exports.createNewAttack = createNewAttack;
