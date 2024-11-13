import { Document, model, Schema, Types } from "mongoose";

export interface IOrganizations extends Document {
    name:string
    resources: [{name: string, amount: number}]
    budget: number
}

export const organizationsSchema = new Schema<IOrganizations>({
    name: {
        type: String,
        required: true
    },
    resources: {
        type: [{name: String, amount: Number}],
        required: true
    },
    budget: {
        type: Number,
    }

});

export default model<IOrganizations>("organizations", organizationsSchema);



