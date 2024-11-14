import { Schema } from "mongoose"
import AttackModel from "../models/attack"
import { MissilesStatus } from "../types/enum/MissilesStatus"


export const createNewAttack = async (username:string, nameOfMisselAttack: string, timeToHit: Date, arrived_in:Date, loction: string):Promise<Schema.Types.ObjectId> => {
    const newAttack = await new AttackModel({username, nameOfMissel:nameOfMisselAttack, timeToHit, status: MissilesStatus.Launched, loction, arrived_in:})
    await newAttack.save()
    return (newAttack._id as Schema.Types.ObjectId)
}