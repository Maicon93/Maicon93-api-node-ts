import { Router } from "express";
import { UserController } from "./controllers/usersController";
import { AuthController } from "./controllers/authController";
import { Connection } from "./middleware/Connection";

const routes = Router()
const conn = new Connection().conn;

routes.use(conn)
routes.post('/user/create', conn, new UserController().create)
//routes.post('/user/login', new UserController().login)
//routes.get('/teste', new UserController().teste)

routes.get('/auth/profile', new AuthController().getProfile)
export default routes