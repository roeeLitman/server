import { Document, model, Schema, Types } from "mongoose";
import { IOrganizations, organizationsSchema } from "./organizations";

interface IUser extends Document {
    username:string
    password: string
    DetailsOnOrganization: IOrganizations
}

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String ,
        required: true
    },
    DetailsOnOrganization: {
        type:{name: String, resources:[{name: String, amount: Number}], budget: Number } ,
    }
});


export default model<IUser>("organizations", userSchema);



