import { Request, Response } from "express";

export class AuthController {
    getProfile(req: Request, res: Response) {
        return res.status(201).json('getProfile')
    }
}