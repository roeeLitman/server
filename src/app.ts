import  express, {Express} from "express";
import "dotenv/config"
import cors from "cors";
import http from 'http'
import {Server} from 'socket.io'
import authRouter from "./routes/authRouter";
import { connectToDb } from "./config/connectToDb";
import { handlingMissile } from "./shocket.io/handlingMissile";
import organizationRouter from "./routes/organizationRouter";


const PORT = process.env.PORT || 770

const app: Express = express()
const httpServer = http.createServer(app)
export const io = new Server(httpServer, {
    cors:{
        origin: "*",
        methods: "*"
    }
})

io.on("connection", handlingMissile);


connectToDb()

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRouter)
app.use("/api/organization", organizationRouter)

httpServer.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`);
})