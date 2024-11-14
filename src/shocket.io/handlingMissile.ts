import { Socket } from "socket.io";
import { io } from "../app";
import { AttackMissile } from "../types/DTO/AttackMissile";
import {  getAllMissileOfUser, returnMissileByNameFromUser, rmoveOneMissile } from "../services/user";
import { DefensiveMissile } from "../types/DTO/DefensiveMissile";
import { CheckIfCanRnove } from "../services/missileService";
import { createNewAttack } from "../services/attackServise";

let setTimeOut = []

export const handlingMissile = (socket: Socket) => {
    //coonect shocket
    console.log(`[socket.io] New Connection ${socket.id}`);

    // user leav
    socket.on("disconnect", () => {
        console.log("Bye bye user");
    });

    //listen to new Attack Missile
    socket.on("sendAttackMissile", async (attackMissile: AttackMissile) => {
    
        //check if i can send missile
        const attackMissileFromDB = await returnMissileByNameFromUser(
            attackMissile.missile,
            attackMissile.id_user
        );
        if (!attackMissileFromDB) return;

        //remove 1 missile from user
        await rmoveOneMissile(attackMissile.missile, attackMissile.id_user);

        //create new attac
        await createNewAttack(attackMissile.username, attackMissile.missile, new Date, attackMissile.loction)

    //     setTimeout(() => {
    //         updatStatusMissiles(id_attack, MissilesStatus.Hit);
    //     }, speed! * 1000);
    // });

        //add to user attact missile

        //updat all users 
        socket.emit("new-attack", {
            missile,
            loction: attackMissile.loction,
            create_at: new Date(),
        });
    });

    // listen to defensive missile
    socket.on("defensive-missile", async (defensiveMissile: DefensiveMissile) => {
        //get missel of user
        const missileList: string[] | undefined = await getAllMissileOfUser(defensiveMissile.user_id)
        if(!missileList) return

        //check if arsanal can hit them
        const isCanRnove = await CheckIfCanRnove(missileList, defensiveMissile.missile.name)
        if(!isCanRnove) return
        //check if can to rmove attack
        
        //send missele defensive
    })
};
