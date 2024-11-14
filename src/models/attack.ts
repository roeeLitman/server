import { Document, model, Schema, Types } from "mongoose";
import { MissilesStatus } from "../types/enum/MissilesStatus";

interface IAttack extends Document {
    username:string
    nameOfMissel: string
    create_at: Date
    arrived_in: Date
    status: MissilesStatus
    
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
        type: Date
    },
    status:{
        type: String
    }

});

export default model<IAttack>("Attacks", AttackSchema);