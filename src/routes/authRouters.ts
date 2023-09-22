import { Request, Response, NextFunction, Router } from "express";
import { AuthController } from "../controllers/AuthController";
import { Connection } from "../middleware/Connection";

const authController = new AuthController();

async function connection(req: Request, res: Response, next: NextFunction) {
  try {
    const conn = await new Connection().conn(req, next)
    req.conn = conn
    next();
  } catch (error) {
    next({ type: 'error', msg: error});
  }
}

const routes = Router();

routes.use(connection);
routes.post('/login', authController.login);

export default routes;
