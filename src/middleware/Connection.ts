import { Pool } from 'pg';
import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';

dotenv.config();

export class Connection {
  conn(req: Request, res: Response, next: NextFunction) {
    const conn = new Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
    });
    req.conn = conn;
    next()
  }
}