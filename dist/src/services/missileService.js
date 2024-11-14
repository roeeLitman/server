"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMissileByName = exports.CheckIfCanRnove = void 0;
const missiles_1 = __importDefault(require("../models/missiles"));
const CheckIfCanRnove = async (namesOfMissiles, attackMissile) => {
    try {
        //get all miseels from db them in namesOfMissiles
        let listMissileFromDB = [];
        for (const missile of namesOfMissiles) {
            listMissileFromDB.push(await missiles_1.default.findOne({ name: missile }).lean());
        }
        if (listMissileFromDB.length === 0)
            return false;
        // check if 1 can rmove attackMissile
        for (const missile of listMissileFromDB) {
            if (missile?.intercepts.includes(attackMissile)) {
                return true;
            }
        }
        return false;
    }
    catch (err) {
        console.log(err);
        throw new Error("not can connect to db");
    }
};
exports.CheckIfCanRnove = CheckIfCanRnove;
const getMissileByName = async (nameMissile) => {
    const missileFromDb = await missiles_1.default.findOne({ name: nameMissile });
    return { name: missileFromDb?.name, speed: missileFromDb?.speed, intercepts: missileFromDb?.intercepts, price: missileFromDb?.price };
};
exports.getMissileByName = getMissileByName;
