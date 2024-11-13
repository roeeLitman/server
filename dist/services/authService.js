"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDataBase = void 0;
const initDataBase = async () => {
    try {
        for (const cand of missiles) {
            const newCand = new Candidate(cand);
            await newCand.save();
        }
    }
    catch (err) {
        console.log("eror blu blu blu");
    }
};
exports.initDataBase = initDataBase;
