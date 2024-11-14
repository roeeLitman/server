import { Document, model, Schema, Types } from "mongoose";
import { MissilesStatus } from "../types/enum/MissilesStatus";

interface IAttack extends Document {
    username:string
    nameOfMissel: string
    create_at: Date
    arrived_in: Number
    status: MissilesStatus
    loction:string
    
}

const AttackSchema = new Schema<IAttack>({
    username: {
        type: String,
    },
    nameOfMissel:{
        type: String,
        required: true,
    } ,
    create_at: {
        type: Date,
        required: true,
        default: new Date()
    },
    arrived_in:{
        type: Number,
        required: true,
    },
    status:{
        type: String
    },
    loction:{
        type: String,
        required: true,
    }

});

export default model<IAttack>("Attacks", AttackSchema);