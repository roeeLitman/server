import { Document, model, Schema, Types } from "mongoose";

interface IMissiles extends Document {
    name: string
    description: string
    speed: number
    intercepts: string[]
    price: number
}

const missilesSchema = new Schema<IMissiles>({
    name: {
        type: String,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },

    speed: {
        type: Number,
        required: true,
    },
    intercepts:{
        type: [String],
        required: true,
        default:[],
    } ,
    price: {
        type: Number,
        required: true,
    }

});

export default model<IMissiles>("Missiles", missilesSchema);

