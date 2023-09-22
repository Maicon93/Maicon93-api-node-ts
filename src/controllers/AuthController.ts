import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";

export class AuthController extends AuthService {
  constructor() {
    super()
  }

  login(req: Request, res: Response) {
    const resp = super.SLogin(req.body, req.conn)
    return res.status(201).json(resp)
  }
}