import { NextFunction, Request, Response } from "express";
import { AuthService } from "../services/AuthService";
import { Connection } from "../middleware/Connection";

export class AuthController extends AuthService {
  constructor() {
    super()
  }

  async login(req: Request, res: Response) {
    const conn = await new Connection().conn()
    const resp = await super.SLogin(req.body, conn)
    return res.status(201).json(resp)
  }
}