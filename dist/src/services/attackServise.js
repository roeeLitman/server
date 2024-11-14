"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatStatusMissiles = exports.createNewAttack = void 0;
const attack_1 = __importDefault(require("../models/attack"));
const MissilesStatus_1 = require("../types/enum/MissilesStatus");
const missileService_1 = require("./missileService");
const createNewAttack = async (username, nameOfMisselAttack, timeToHit, loction) => {
    const misseileFromDb = await (0, missileService_1.getMissileByName)(nameOfMisselAttack);
    const arrivedMissile = timeToHit.getMilliseconds() + misseileFromDb.speed * 1000;
    const newAttack = await new attack_1.default({ username, nameOfMissel: nameOfMisselAttack, timeToHit, status: MissilesStatus_1.MissilesStatus.Launched, loction, arrived_in: arrivedMissile });
    await newAttack.save();
    return newAttack._id;
};
exports.createNewAttack = createNewAttack;
const updatStatusMissiles = async (id_attack, status) => {
    const currentAttack = await attack_1.default.findById(id_attack);
    if (currentAttack?.status === MissilesStatus_1.MissilesStatus.Intercepted)
        return;
    attack_1.default.findByIdAndUpdate(id_attack, { status: status });
};
exports.updatStatusMissiles = updatStatusMissiles;
