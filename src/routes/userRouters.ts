import { Router } from "express";
import { UserController } from "../controllers/UserController";

const userController = new UserController()
const routes = Router()

routes.get('/get-user', userController.getUser)
export default routes