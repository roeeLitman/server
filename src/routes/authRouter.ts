import {Router} from "express"
import { sid } from "../controllers/authController"


const authRouter = Router()

authRouter.post('/sid', sid)

authRouter.post("/register",)

authRouter.post("/login",)

export default authRouter