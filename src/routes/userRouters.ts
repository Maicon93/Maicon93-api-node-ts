import { Router } from "express";
import { UserController } from "../controllers/UserController";
//import { Connection } from "../middleware/Connection";
//const conn = new Connection().conn;

const userController = new UserController()
const routes = Router()

//routes.use(conn)
routes.get('/get-user', userController.getUser)
export default routes