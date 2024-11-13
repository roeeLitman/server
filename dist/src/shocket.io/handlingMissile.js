"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlingMissile = void 0;
const user_1 = require("../services/user");
const handlingMissile = (socket) => {
    //coonect shocket
    console.log(`[socket.io] New Connection ${socket.id}`);
    // user leav
    socket.on("disconnect", () => {
        console.log("Bye bye user");
    });
    //listen to new Attack Missile
    socket.on("sendAttackMissile", async (attackMissile) => {
        //chck if i can sen missile
        const missile = await (0, user_1.returnMissileByNameFromUser)(attackMissile.missile, attackMissile.id_user);
        if (!missile)
            return;
        //remove 1 from missile
        await (0, user_1.rmoveOneMissile)(attackMissile.missile, attackMissile.id_user);
        //add set timiOut 
        // emit on attack hit
        //add to user attact missile
        //updat all users 
        socket.emit("new-attack", {
            missile,
            loction: attackMissile.loction,
            create_at: new Date(),
        });
    });
    // listen to defensive missile
    socket.on("defensive-missile", async (defensiveMissile) => {
        //get missel of user
        const missileList = await (0, user_1.getAllMissileOfUser)(defensiveMissile.user_id);
        if (!missileList)
            return;
        //check if arsanal can hit them
        const isCanRnove = CheckIfCanRnove();
        //check if can to rmove attack
        //send missele defensive
    });
};
exports.handlingMissile = handlingMissile;
