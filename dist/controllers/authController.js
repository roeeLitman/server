"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sid = void 0;
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
