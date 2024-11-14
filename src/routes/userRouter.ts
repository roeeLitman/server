import {Router} from "express"
import { login, register, sid } from "../controllers/authController"
import { getAllOrganization } from "../controllers/organizationController"
import vetifyUser from "../middelwares/vetifyUser"
import { getDetails } from "../controllers/userController"


const userRouter = Router()

userRouter.get('/',vetifyUser , getDetails)


export default userRouter