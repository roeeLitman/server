import missiles from "../../missiles";
import ModelMissile from "../models/missiles"
import ModelOrganization from "../models/organizations"
import organizations from "../../organizations"

export const initDataBase =  async () => {
    try {
        // create sead for missiles
        for(const missile of missiles){
            const newMissile = new ModelMissile(missile) 
            await newMissile.save()            
        }
        // create sead for organization
        for(const organization of organizations){
            const newOrganization = new ModelOrganization(organization) 
            await newOrganization.save()
        }

    } catch (err) {
        console.log("eror blu blu blu");
        throw new Error("not init Data Base")
    }
}