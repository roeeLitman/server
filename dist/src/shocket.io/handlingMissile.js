"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlingMissile = void 0;
const user_1 = require("../services/user");
const missileService_1 = require("../services/missileService");
const attackServise_1 = require("../services/attackServise");
const MissilesStatus_1 = require("../types/enum/MissilesStatus");
let setTimeOutArray = [];
const handlingMissile = (socket) => {
    //coonect shocket
    console.log(`[socket.io] New Connection ${socket.id}`);
    // user leav
    socket.on("disconnect", () => {
        console.log("Bye bye user");
    });
    //listen to new Attack Missile
    socket.on("sendAttackMissile", async (attackMissile) => {
        //check if i can send missile
        const attackMissileFromDB = await (0, user_1.returnMissileByNameFromUser)(attackMissile.missile, attackMissile.id_user);
        if (!attackMissileFromDB)
            return;
        //remove 1 missile from user
        await (0, user_1.rmoveOneMissile)(attackMissile.missile, attackMissile.id_user);
        //create new attac
        const id_attack = await (0, attackServise_1.createNewAttack)(attackMissile.username, attackMissile.missile, new Date(), attackMissile.loction);
        //fet speed of missels for setTimeout
        const misseileFromDb = await (0, missileService_1.getMissileByName)(attackMissile.missile);
        const idSetTimeOut = setTimeout(() => {
            (0, attackServise_1.updatStatusMissiles)(id_attack, MissilesStatus_1.MissilesStatus.Hit);
        }, misseileFromDb.speed * 1000);
        //add socket.id and idSetTimeOut to global Array
        setTimeOutArray.push({
            socketId: socket.id,
            idOfTimeOut: idSetTimeOut,
        });
        //updat all users
        const socketId = socket.id;
        socket.emit("new-attack", {
            socketId,
            misseileFromDb,
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
        //check if arsanal can hit missile attack
        const isCanRnove = await (0, missileService_1.CheckIfCanRnove)(missileList, defensiveMissile.missile.name);
        if (!isCanRnove)
            return;
        //check if can to rmove attack
        const isTherTime = await (0, attackServise_1.thereEnoughTime)(defensiveMissile.id_attack, isCanRnove.speed);
        //rmove attackfrom arry
        if (isTherTime) {
            setTimeOutArray.forEach((item) => {
                if (item.socketId === defensiveMissile.socetId) {
                    clearTimeout(item.idOfTimeOut);
                }
            });
        }
        // sub 1 from user defensive
        await (0, user_1.rmoveOneMissile)(isCanRnove.name, defensiveMissile.user_id);
    });
};
exports.handlingMissile = handlingMissile;
