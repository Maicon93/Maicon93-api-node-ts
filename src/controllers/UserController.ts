import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController extends UserService {
  constructor() {
    super()
  }

  getUser(req: Request, res: Response) {
    const resp = super.getUsers()
    return res.status(201).json(resp)
  }
}