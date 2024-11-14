import {Router} from "express"
import { login, register, sid } from "../controllers/authController"
import { getAllOrganization } from "../controllers/organizationController"


const organizationRouter = Router()

organizationRouter.get('/', getAllOrganization)


export default organizationRouter