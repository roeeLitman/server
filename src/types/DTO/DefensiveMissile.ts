export interface DefensiveMissile {
    user_id: string
    loction: string
    missile: {name:string, amount:number}
    attack_create_at : Date
}