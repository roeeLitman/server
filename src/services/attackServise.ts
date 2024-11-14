import { Schema } from "mongoose"
import AttackModel from "../models/attack"
import { MissilesStatus } from "../types/enum/MissilesStatus"
import { getMissileByName } from "./missileService"


export const createNewAttack = async (username:string, nameOfMisselAttack: string, timeToHit: Date, loction: string):Promise<Schema.Types.ObjectId> => {

    const misseileFromDb = await getMissileByName(nameOfMisselAttack)
    const arrivedMissile = timeToHit.getMilliseconds() + misseileFromDb.speed! * 1000

    const newAttack = await new AttackModel({username, nameOfMissel:nameOfMisselAttack, timeToHit, status: MissilesStatus.Launched, loction, arrived_in:arrivedMissile})
    await newAttack.save()
    return (newAttack._id as Schema.Types.ObjectId)
}