import { Connection } from "../middleware/Connection";

export class DefaultHelper {
  async consultSql(sql: string) {
    return new Promise(async (res, rej) => {
      try {
        const conn: Conn = await new Connection().conn()
        const resp = await conn.query(sql)

        res(resp.rows)
      } catch (error) {
        rej({ type: 'error', msg: error })
      }
    })
  }

  async consistSql(sql: string) {
    return new Promise(async (res, rej) => {
      try {
        const conn: Conn = await new Connection().conn()
        const resp = await conn.query(sql)
        if (resp.rowCount == 0) {
          throw new Error('Nenhuma linha afetada')
        }

        res(resp.rows)
      } catch (error: any) {
        const msg = error.message || error
        rej({ type: 'error', msg: msg })
      }
    })
  }

  getActualyDate() {
    const dataAtual = new Date();
    const ano = dataAtual.getFullYear();
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const dia = String(dataAtual.getDate()).padStart(2, '0');

    return `${ano}-${mes}-${dia}`;
  }
}