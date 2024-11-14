"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = exports.sid = void 0;
const authService_1 = require("../services/authService");
const sid = async (req, res) => {
    try {
        await (0, authService_1.initDataBase)();
        res.sendStatus(201);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};
exports.sid = sid;
const register = async (req, res) => {
    try {
        const newUser = await (0, authService_1.createNewUser)(req.body);
        res.status(200).json(newUser);
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err.message);
    }
};
exports.register = register;
const login = async (req, res) => {
    try {
        const userWithToken = await (0, authService_1.userLogin)(req.body);
        res.status(200).json(userWithToken);
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err.message);
    }
};
exports.login = login;
