import { Request, Response, NextFunction, Router } from "express";
import { AuthController } from "../controllers/AuthController";
const authController = new AuthController();
const routes = Router();

routes.post('/login', authController.login);

export default routes;
