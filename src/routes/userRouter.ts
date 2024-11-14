import {Router} from "express"
import { login, register, sid } from "../controllers/authController"
import { getAllOrganization } from "../controllers/organizationController"
import vetifyUser from "../middelwares/vetifyUser"


const organizationRouter = Router()

organizationRouter.get('/',vetifyUser ,getAllOrganization)


export default organizationRouter