import  express, {Express} from "express";
import "dotenv/config"
import cors from "cors";
import http from 'http'
import {Server} from 'socket.io'
import authRouter from "./routes/authRouter";
import { connectToDb } from "./config/connectToDb";


const PORT = process.env.PORT || 770

const app: Express = express()

connectToDb()

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRouter)

app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`);
})