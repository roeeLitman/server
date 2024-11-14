import ModelMissile from "../models/missiles";

export const CheckIfCanRnove = async (namesOfMissiles: string[], attackMissile:string ) => {

    try { 
        //get all miseels from db them in namesOfMissiles
        let listMissileFromDB = []
        for (const missile of namesOfMissiles) {
            listMissileFromDB.push(await ModelMissile.findOne({name: missile}).lean())
        }

        if(listMissileFromDB.length === 0) return false
        // check if 1 can rmove attackMissile
        for (const missile of listMissileFromDB) {
            if(missile?.intercepts.includes(attackMissile)){
                return true
            }
        }
        return false


    } catch (err) {
        console.log(err);
        throw new Error("not can connect to db"); 
    }

};

export const getMissileByName = async (nameMissile: string) => {
    const missileFromDb = await ModelMissile.findOne({name:nameMissile})
    return {name: missileFromDb?.name, speed: missileFromDb?.speed, intercepts: missileFromDb?.intercepts, price: missileFromDb?.price}
 }


