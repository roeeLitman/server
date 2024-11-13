"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogin = exports.createNewUser = exports.initDataBase = void 0;
const missiles_1 = __importDefault(require("../../missiles"));
const missiles_2 = __importDefault(require("../models/missiles"));
const organizations_1 = __importDefault(require("../models/organizations"));
const organizations_2 = __importDefault(require("../../organizations"));
const user_1 = __importDefault(require("../models/user"));
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
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
        console.log("eror");
        throw new Error("not init Data Base");
    }
};
exports.initDataBase = initDataBase;
const createNewUser = async (user) => {
    try {
        // hash password
        const encPass = await (0, bcrypt_1.hash)(user.password, 10);
        user.password = encPass;
        //create init orgnition and insert into user. organition
        const initOrgnition = await organizations_1.default.findOne({
            name: user.organizatio,
        }).lean();
        if (!initOrgnition)
            throw new Error("not fond name of Orgnition");
        user.detailsOnOrganization = {
            name: initOrgnition?.name,
            resources: initOrgnition?.resources,
            budget: initOrgnition?.budget,
        };
        //crete and save user
        const newUser = new user_1.default(user);
        //returen new user
        return await newUser.save();
    }
    catch (err) {
        console.log(err);
        throw new Error("Can't create new user");
    }
};
exports.createNewUser = createNewUser;
const userLogin = async (user) => {
    try {
        // found user by name and compare password 
        const userFromDatabase = await user_1.default.findOne({ username: user.username }).lean();
        if (!userFromDatabase)
            throw new Error("user not found");
        const match = await (0, bcrypt_1.compare)(user.password, userFromDatabase.password);
        if (!match)
            throw new Error("wrong password");
        // if password compare create token
        const token = jsonwebtoken_1.default.sign({
            user_id: userFromDatabase._id,
            username: userFromDatabase.username,
            detailsOnOrganization: userFromDatabase.detailsOnOrganization,
        }, process.env.JWT_SECRET, { expiresIn: "10m" });
        return token;
    }
    catch (err) {
        throw err;
    }
};
exports.userLogin = userLogin;
