import { Socket } from "socket.io";
import { io } from "../app";
import { AttackMissile } from "../types/DTO/AttackMissile";
import {  getAllMissileOfUser, returnMissileByNameFromUser, rmoveOneMissile } from "../services/user";
import { DefensiveMissile } from "../types/DTO/DefensiveMissile";

export const handlingMissile = (socket: Socket) => {
    //coonect shocket
    console.log(`[socket.io] New Connection ${socket.id}`);

    // user leav
    socket.on("disconnect", () => {
        console.log("Bye bye user");
    });

    //listen to new Attack Missile
    socket.on("sendAttackMissile", async (attackMissile: AttackMissile) => {
    
        //chck if i can sen missile
        const missile = await returnMissileByNameFromUser(
            attackMissile.missile,
            attackMissile.id_user
        );
        if (!missile) return;

        //remove 1 from missile
        await rmoveOneMissile(attackMissile.missile, attackMissile.id_user);

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
    socket.on("defensive-missile", async (defensiveMissile: DefensiveMissile) => {
        //get missel of user
        const missileList: string[] | undefined = await getAllMissileOfUser(defensiveMissile.user_id)
        if(!missileList) return

        //check if arsanal can hit them
        const isCanRnove = CheckIfCanRnove()
        //check if can to rmove attack
        //send missele defensive
    })
};
