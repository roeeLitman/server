import { Schema } from "mongoose"
import AttackModel from "../models/attack"
import { MissilesStatus } from "../types/enum/MissilesStatus"
import { getMissileByName } from "./missileService"


export const createNewAttack = async (username:string, nameOfMisselAttack: string, timeToHit: Date, loction: string):Promise<Schema.Types.ObjectId> => {

    const misseileFromDb = await getMissileByName(nameOfMisselAttack)
    const arrivedMissile = timeToHit.getTime() + misseileFromDb.speed! * 1000

    const newAttack = await new AttackModel({username, nameOfMissel:nameOfMisselAttack, timeToHit, status: MissilesStatus.Launched, loction, arrived_in:arrivedMissile})
    await newAttack.save()
    return (newAttack._id as Schema.Types.ObjectId)
}

export const updatStatusMissiles = async (id_attack:Schema.Types.ObjectId, status:string)=>{
    const currentAttack = await AttackModel.findById(id_attack)
    if(currentAttack?.status === MissilesStatus.Intercepted) return
    AttackModel.findByIdAndUpdate(id_attack, {status: status})
}

export const thereEnoughTime = async (id_attack:Schema.Types.ObjectId, speed:number) => {

    const attackFromDb = await AttackModel.findById(id_attack).lean()
    if(!attackFromDb) return
    
    const newTime = new Date()
    if( Number(attackFromDb.arrived_in) - attackFromDb!.create_at.getTime() > speed * 1000){
        attackFromDb.status = MissilesStatus.Intercepted
        attackFromDb?.save()
        return true
    }
    return false

}

export const getAllAttackFromDb = async ()=>{
    const listOfAttack = await AttackModel.find({}, {username:1, nameOfMissel:1, create_at:1, arrived_in:1, status:1 })
    return listOfAttack
}





