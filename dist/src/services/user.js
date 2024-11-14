"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDetailsFromDb = exports.getAllMissileOfUser = exports.rmoveOneMissile = exports.returnMissileByNameFromUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const returnMissileByNameFromUser = async (nameMissile, user_id) => {
    try {
        // found user
        const userFromDb = await user_1.default.findById(user_id).lean();
        //check if there is missel
        const resourcesMissile = userFromDb?.detailsOnOrganization.resources.filter((resurce) => {
            return resurce.name === nameMissile;
        })[0];
        return resourcesMissile;
    }
    catch (err) {
        console.log(err);
        throw new Error("not can connect to db");
    }
};
exports.returnMissileByNameFromUser = returnMissileByNameFromUser;
const rmoveOneMissile = async (nameMissile, user_id) => {
    // found user
    const userFromDb = await user_1.default.findById(user_id);
    // sub 1
    if (!userFromDb)
        return;
    userFromDb?.detailsOnOrganization.resources.forEach((reso) => {
        if (reso.name === nameMissile) {
            console.log(reso.amount);
            reso.amount -= 1;
            console.log(reso.amount);
        }
    });
    userFromDb.save();
};
exports.rmoveOneMissile = rmoveOneMissile;
const getAllMissileOfUser = async (user_id) => {
    try {
        // found user
        const userFromDb = await user_1.default.findById(user_id);
        // if not found exist
        if (!userFromDb)
            return;
        //get all missile from user
        return userFromDb.detailsOnOrganization.resources.map((reso) => { return reso.name; });
    }
    catch (err) {
        console.log(err);
        throw new Error("not can connect to db");
    }
};
exports.getAllMissileOfUser = getAllMissileOfUser;
const getDetailsFromDb = async (user_id) => {
    try {
        console.log(user_id);
        const userFromDb = await user_1.default.findById(user_id).lean();
        if (!userFromDb)
            throw new Error("not found");
        const { name, resources, budget } = userFromDb.detailsOnOrganization;
        return { username: userFromDb.username, detailsOnOrganization: { name, resources, budget } };
    }
    catch (err) {
        console.log(err);
        throw new Error("not found");
    }
};
exports.getDetailsFromDb = getDetailsFromDb;
