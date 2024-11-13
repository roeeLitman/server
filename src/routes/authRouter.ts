import {Router} from "express"
import { login, register, sid } from "../controllers/authController"


const authRouter = Router()

authRouter.post('/sid', sid)

authRouter.post("/register", register)

authRouter.post("/login", login)

export default authRouter