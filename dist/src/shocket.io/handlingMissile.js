"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlingMissile = void 0;
const app_1 = require("../app");
const user_1 = require("../services/user");
const handlingMissile = (socket) => {
    //coonect shocket
    console.log(`[socket.io] New Connection ${socket.id}`);
    // user leav
    socket.on("disconnect", () => {
        console.log("Bye bye user");
    });
    socket.on("sendAttackMissile", async (attackMissile) => {
        //add to room
        socket.join(attackMissile.loction);
        //chck if i can sen missile
        const missile = await (0, user_1.returnMissileFromStorage)(attackMissile.missile, attackMissile.id_user);
        if (!missile)
            return;
        //remove 1 from missile
        await (0, user_1.rmoveOneMissile)(attackMissile.missile, attackMissile.id_user);
        //add to user attact missile
        //updat all users in room
        app_1.io.to(attackMissile.loction).emit("new-attack", { missile, loction: attackMissile.loction, create_at: new Date });
    });
};
exports.handlingMissile = handlingMissile;
