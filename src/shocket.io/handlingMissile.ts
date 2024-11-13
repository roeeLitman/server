import { Socket } from "socket.io";
import { io } from "../app";
import { AttackMissile } from "../types/DTO/AttackMissile";
import { returnMissileFromStorage, rmoveOneMissile } from "../services/user";

export const handlingMissile = (socket: Socket) => {
    //coonect shocket
    console.log(`[socket.io] New Connection ${socket.id}`);

    // user leav
    socket.on("disconnect", () => {
        console.log("Bye bye user");
    });

    socket.on("sendAttackMissile", async (attackMissile: AttackMissile) => {
        //add to room
        socket.join(attackMissile.loction);

        //chck if i can sen missile
        const missile = await returnMissileFromStorage(
            attackMissile.missile,
            attackMissile.id_user
        );
        if (!missile) return;

        //remove 1 from missile
        await rmoveOneMissile(attackMissile.missile, attackMissile.id_user);

        //add to user attact missile

        //updat all users in room
        io.to(attackMissile.loction).emit("new-attack", {missile, loction: attackMissile.loction, create_at: new Date});
    });
};
