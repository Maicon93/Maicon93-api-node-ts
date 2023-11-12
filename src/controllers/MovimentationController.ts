import { Request, Response } from "express";
import { MovimentationCardService } from "../services/MovimentationService";

export class MovimentationController extends MovimentationCardService {
  constructor() {
    super()
  }

  async insert(req: Request, res: Response) {
    const promises: any = [];
    req.body.forEach(mov => {
      promises.push(new Promise(async (res, rej) => {
        const resp: DefaultResp = await super.SInsert(mov)
        resp.type === 'success' ? res(true) : rej(resp)
      }))
    })

    await Promise.all(promises).then(() => {
      return res.status(200).send({ type: 'success', msg: 'Movimentação salva com sucesso' })
    }).catch((err) => {
      return res.status(200).send(err)
    })
  }

  async delete(req: Request, res: Response) {
    const resp = await super.SDelete(req.params.id)
    return res.status(201).json(resp)
  }

  async consult(req: Request, res: Response) {
    const resp = await super.SConsult(req.body)
    return res.status(201).json(resp)
  }

  async getMovimentationForMounth(req: Request, res: Response) {
    const resp = await super.getMovimentationForMounths()
    return res.status(201).json(resp)
  }

  async getMovimentationsForCategory(req: Request, res: Response) {
    const resp = await super.getMovimentationsForCategorys(req.body)
    return res.status(201).json(resp)
  }
}