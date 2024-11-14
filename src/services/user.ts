import UserModel from "../models/user";

export const returnMissileByNameFromUser = async (
    nameMissile: string,
    user_id: string
) => {
    try {
        // found user
        const userFromDb = await UserModel.findById(user_id).lean();
        //check if there is missel
        const resourcesMissile =
            userFromDb?.detailsOnOrganization.resources.filter((resurce) => {
                return resurce.name === nameMissile;
            })[0];
        return resourcesMissile;
    } catch (err) {
        console.log(err);
        throw new Error("not can connect to db");
    }
};

export const rmoveOneMissile = async (nameMissile: string, user_id: string) => {
    // found user
    const userFromDb = await UserModel.findById(user_id)

    // sub 1
    if(!userFromDb) return
    userFromDb?.detailsOnOrganization.resources.forEach((reso)=>{
        if(reso.name === nameMissile){
            console.log(reso.amount);
            reso.amount -= 1
            console.log(reso.amount);


        }
    })
    userFromDb.save()

};

export const getAllMissileOfUser = async (user_id: string) => {

    try { 
        // found user
        const userFromDb = await UserModel.findById(user_id)   
        // if not found exist
        if(!userFromDb) return
        //get all missile from user
        return userFromDb.detailsOnOrganization.resources.map((reso)=> {return reso.name})

    } catch (err) {
        console.log(err);
        throw new Error("not can connect to db"); 
    }

};

export const getDetailsFromDb = async (user_id: string) => {
    try {
        console.log(user_id);
        
        const userFromDb = await UserModel.findById(user_id).lean()
        if(!userFromDb) throw new Error("not found");
        const {name, resources, budget} = userFromDb.detailsOnOrganization
        return {username: userFromDb.username, detailsOnOrganization:{name , resources, budget} }

    } catch (err) {
        console.log(err);
        throw new Error("not found")
    }
}

