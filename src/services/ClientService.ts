import { ClientHelper } from "../helpers/ClientHelper";
import { DefaultHelper } from "../helpers/DefaultHelper";

export class ClientService extends DefaultHelper {
  async SInsert(params) {
    try {
      const apelidoValue: null | String = params?.apelido ? `'${params.apelido}'` : null

      const verifyExistClientByCpf = await new ClientHelper().verifyExistClientByCpf(params.cpf)
      if (verifyExistClientByCpf?.type == 'error') {
        return verifyExistClientByCpf
      }

      const sql = `INSERT INTO peoples(
          name, phone, apelido, cpf, email, register_date, observation, deleted
        ) VALUES (
          '${params.name}', '${params.phone}', ${apelidoValue}, '${params.cpf}', '${params.email}', now(), '${params.observation}', false
        )`

      const resp: Consist = await super.consistSql(sql)
      if (resp.rowsAffected == 1) {
        return { type: 'success', msg: 'Cliente registrado com sucesso' }
      }

      return { type: 'error', msg: 'Cliente não registrado confira os dados de registro' }
    } catch (error) {
      return error
    }
  }

  async SgetAllClients() {
    try {
      const sql = `select * from peoples order by name`

      const rows = await super.consultSql(sql)

      return { type: 'success', rows }
    } catch (error) {
      return error
    }
  }

  async SDelete(id) {
    try {
      const sql = `delete from peoples where id = ${id}`

      const resp = await super.consistSql(sql)

      return { type: 'success', msg: 'Cliente deletado com sucesso' }
    } catch (error) {
      return error
    }
  }

  async SconsultById(id: number) {
    try {
      const sql = `select * from peoples where id = ${id} and deleted = false`

      const resp = await super.consultSql(sql)

      return { type: 'success', rows: resp }
    } catch (error) {
      return error
    }
  }

  async SeditClient(client) {
    try {
      const sql = `update peoples set
          name = '${client.name}',
          apelido = '${client.apelido}',
          phone = '${client.phone}',
          email = '${client.email}',
          observation = '${client.observation}'
        where id = ${client.id}`

      const resp = await super.consistSql(sql)
      if (resp.type !== 'success') {
        return resp
      }

      return { type: 'success', msg: 'Cliente editado com sucesso' }
    } catch (error) {
      return error
    }
  }
}