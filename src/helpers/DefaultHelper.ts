import { Connection } from "../middleware/Connection";

export class DefaultHelper {
  async consultSql(sql: string) {
    try {
      const conn: Conn = await new Connection().conn()
      const resp = await conn.query(sql)

      return resp.rows
    } catch (error) {
      return { type: 'error', msg: error }
    }
  }

  async consistSql(sql: string) {
    try {
      const conn: Conn = await new Connection().conn()
      const resp = await conn.query(sql)
      if (resp.rowCount == 0) {
        return { type: 'success', msg: 'Nenhuma linha afetada' }
      }

      return { type: 'success', rowsAffected: resp.rowCount || 0 }
    } catch (error: any) {
      const msg = error.message || error
      return { type: 'error', msg: msg }
    }
  }

  getActualyDate() {
    const dataAtual = new Date();
    const ano = dataAtual.getFullYear();
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const dia = String(dataAtual.getDate()).padStart(2, '0');

    return `${ano}-${mes}-${dia}`;
  }
}