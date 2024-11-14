import {Router} from "express"
import { getAllOrganization } from "../controllers/organizationController"
import { getAllAttack } from "../controllers/attackController"
import vetifyUser from "../middelwares/vetifyUser"


const attackRouter = Router()

attackRouter.get('/',vetifyUser ,getAllAttack)

export default attackRouter

