import missiles from "../../missiles";
import MissileModel from "../models/missiles"
import OrganizationModel from "../models/organizations"
import organizations from "../../organizations"
import UserModel from "../models/user"
import { UserDTO } from "../types/DTO/userDTO";
import { compare, hash } from "bcrypt";
import jwt from "jsonwebtoken";

export const initDataBase =  async () => {    
    try {        
        // create sead for missiles
        for(const missile of missiles){
            const newMissile = new MissileModel(missile) 
            await newMissile.save()            
        }
        // create sead for organization
        for(const organization of organizations){
            const newOrganization = new OrganizationModel(organization) 
            await newOrganization.save()
        }

    } catch (err) {
        console.log("eror");
        throw new Error("not init Data Base")
    }
}

export const createNewUser = async (user: UserDTO) => {
    try {
        // hash password
        const encPass = await hash(user.password, 10);
        user.password = encPass;

        //enter init orgnition
        const initOrgnition = await  OrganizationModel.findOne({name: user.organizatio}).lean()
        if (! initOrgnition) throw new Error("not fond name of Orgnition");
        user.detailsOnOrganization = {name: initOrgnition?.name ,resources: initOrgnition?.resources, budget: initOrgnition?.budget}

        //crete and save user
        const newUser = new UserModel(user);
        
        //returen new user
        return await newUser.save();
        
    } catch (err) {
        console.log(err);
        throw new Error("Can't create new user");
    }
};

export const userLogin = async (user: UserDTO) => {
    try {
        
        const encPass = await hash(user.password, 10);
        user.password = encPass;
        
        const newUser = new UserModel(user);
        
        return await newUser.save();
        
    } catch (err) {
        console.log(err);
        throw new Error("Can't create new user");
    }
};