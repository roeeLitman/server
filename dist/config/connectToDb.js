"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDb = void 0;
const mongoose_1 = require("mongoose");
const connectToDb = async () => {
    try {
        await (0, mongoose_1.connect)(process.env.URL_CONNECT);
        console.log("connect to mongoos");
    }
    catch (err) {
        console.log(err);
    }
};
exports.connectToDb = connectToDb;
