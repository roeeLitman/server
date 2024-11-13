import  express, {Express} from "express";
import "dotenv/config"
import cors from "cors";
import http from 'http'
import {Server} from 'socket.io'



const PORT = process.env.PORT || 770

const app: Express = express()


app.use(express.json());
app.use(cors());



app.use("/api/auth",()=>{})


app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`);
})