import { DefaultHelper } from "./DefaultHelper";

export class ClientHelper extends DefaultHelper {
  async verifyExistClientByCpf(cpf: string) {
    try {
      const sql = `select count(1) from peoples where cpf = '${cpf}' and deleted = false`
      const resp = await super.consultSql(sql)
      if (resp[0].count > 0) {
        return { type: 'error', msg: 'CPF já registrado' }
      }

      return resp
    } catch (error) {
      return { type: 'error', msg: error }
    }
  }
}