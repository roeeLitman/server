"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllAttack = void 0;
const attackServise_1 = require("../services/attackServise");
const getAllAttack = async (req, res) => {
    try {
        const allAttack = await (0, attackServise_1.getAllAttackFromDb)();
        res.status(200).json(allAttack);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};
exports.getAllAttack = getAllAttack;
