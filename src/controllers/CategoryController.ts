import { Request, Response } from "express";
import { CategoryService } from "../services/CategoryService";

export class CategoryController extends CategoryService {
  constructor() {
    super()
  }

  async insert(req: Request, res: Response) {
    const resp = await super.SInsert(req.body)
    return res.status(201).json(resp)
  }

  async edit(req: Request, res: Response) {
    const resp = await super.SEdit(req.body)
    return res.status(201).json(resp)
  }

  async delete(req: Request, res: Response) {
    const resp = await super.SDelete(req.params.id)
    return res.status(201).json(resp)
  }

  async getCategorys(req: Request, res: Response) {
    const resp = await super.SConsult(req.body)
    return res.status(201).json(resp)
  }
}