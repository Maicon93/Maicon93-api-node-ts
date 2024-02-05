import { Request, Response } from "express";
import { ClientService } from "../services/ClientService";

export class ClientController extends ClientService {
  constructor() {
    super()
  }

  async insert(req: Request, res: Response) {
    const resp = await super.SInsert(req.body)
    return res.status(201).json(resp)
  }

  async getAllClients(req: Request, res: Response) {
    const resp = await super.SgetAllClients()
    return res.status(201).json(resp)
  }

  async delete(req: Request, res: Response) {
    const resp = await super.SDelete(req.params.id)
    return res.status(201).json(resp)
  }

  async consultById(req: Request, res: Response) {
    const resp = await super.SconsultById(+req.params.id)
    return res.status(201).json(resp)
  }

  async editClient(req: Request, res: Response) {
    const resp = await super.SeditClient(req.body)
    return res.status(201).json(resp)
  }
}