"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlingMissile = void 0;
const user_1 = require("../services/user");
const missileService_1 = require("../services/missileService");
let setTimeOut = [];
const handlingMissile = (socket) => {
    //coonect shocket
    console.log(`[socket.io] New Connection ${socket.id}`);
    // user leav
    socket.on("disconnect", () => {
        console.log("Bye bye user");
    });
    //listen to new Attack Missile
    socket.on("sendAttackMissile", async (attackMissile) => {
        //chck if i can send missile
        const attackMissileFromDB = await (0, user_1.returnMissileByNameFromUser)(attackMissile.missile, attackMissile.id_user);
        if (!attackMissileFromDB)
            return;
        //remove 1 from missile
        await (0, user_1.rmoveOneMissile)(attackMissile.missile, attackMissile.id_user);
        setTimeout(() => {
            updatStatusMissiles(id_attack, MissilesStatus.Hit);
        }, speed * 1000);
    });
    //add to user attact missile
    //updat all users 
    socket.emit("new-attack", {
        missile,
        loction: attackMissile.loction,
        create_at: new Date(),
    });
};
exports.handlingMissile = handlingMissile;
// listen to defensive missile
socket.on("defensive-missile", async (defensiveMissile) => {
    //get missel of user
    const missileList = await (0, user_1.getAllMissileOfUser)(defensiveMissile.user_id);
    if (!missileList)
        return;
    //check if arsanal can hit them
    const isCanRnove = await (0, missileService_1.CheckIfCanRnove)(missileList, defensiveMissile.missile.name);
    if (!isCanRnove)
        return;
    //check if can to rmove attack
    //send missele defensive
});
;
