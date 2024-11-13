import { Document, model, Schema, Types } from "mongoose";
import { IOrganizations, organizationsSchema } from "./organizations";

interface IUser extends Document {
    username:string
    password: string
    detailsOnOrganization: IOrganizations
}

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String ,
        required: true
    },
    detailsOnOrganization: {
        type:{name: String, resources:[{name: String, amount: Number}], budget: Number },
        required: true
    }
});


export default model<IUser>("User", userSchema);



