"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDetails = void 0;
const user_1 = require("../services/user");
const getDetails = async (req, res) => {
    try {
        const details = await (0, user_1.getDetailsFromDb)(req.user._id);
        res.status(200).json(details);
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err.message);
    }
};
exports.getDetails = getDetails;
