import { connect } from "mongoose";

export const connectToDb = async () => {
    try {        
        await connect(process.env.URL_CONNECT as string);
        console.log("connect to mongoos");
    } catch (err) {
        console.log(err);
    }
};

