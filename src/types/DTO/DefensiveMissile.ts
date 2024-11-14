import { Schema } from "mongoose"

export interface DefensiveMissile {
    user_id: string
    loction: string
    missile: {name:string, amount:number}
    socetId:string
    attack_create_at : Date
    id_attack: Schema.Types.ObjectId

}