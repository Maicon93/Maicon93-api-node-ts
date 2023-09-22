import { } from "..";

declare global {
  namespace Express {
    export interface Request {
      user: User;
      conn: Any;
      headers: {
        token?: string;
        user?: string;
      }
    }
  }
}
