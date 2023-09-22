import { Router } from "express";
import { AuthController } from "./controllers/AuthController";
import { Connection } from "./middleware/Connection";

const authController = new AuthController()

const routes = Router()
//const conn = new Connection().conn;

//routes.use(conn)
//routes.post('/auth/profile', authController.getProfile)
export default routes