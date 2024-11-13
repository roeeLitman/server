import UserModel from "../models/user";

export const returnMissileFromStorage = async (
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
            reso.amount -= 1
        }
    })
    userFromDb.save()

};
