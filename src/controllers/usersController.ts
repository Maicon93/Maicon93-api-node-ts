import { Request, Response } from "express";
import { DefaultHelper } from "../helpers/DefaultHelper";
import { CreateUser } from '../interfaces/usersInterface'

export class UserController extends DefaultHelper {
  constructor() {
    super();
  }

  async create(req: Request<{}, {}, CreateUser>, res: Response) {
    const { name } = req.body

    const { rows } = await super.findOneBy(req.conn, 'users', 'username', name);
    return res.status(200).json({ type: 'error', rows })
  }
}