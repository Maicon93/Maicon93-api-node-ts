import { DefaultHelper } from "../helpers/DefaultHelper";

export class CreditCardService extends DefaultHelper {
  async SInsert(params) {
    try {
      const sql = `insert into credit_cards (
          description,
          limit_card,
          observation
        ) values (
          '${params.description}',
          '${params.limit_card}',
          '${params.observation}'
        )`

      await super.consistSql(sql)

      return { type: 'success', msg: 'Registro inserido com sucesso' }
    } catch (error) {
      return error
    }
  }

  async SEdit(params) {
    try {
      const sql = `update credit_cards set
          description = '${params.description}',
          limit_card = ${params.limit_card},
          observation = '${params.observation}'
        where id = ${params.id}`

      await super.consistSql(sql)

      return { type: 'success', msg: 'Registro editado com sucesso' }
    } catch (error) {
      return error
    }
  }

  async SDelete(id: string | number) {
    try {
      const sql = `delete from credit_cards where id = ${id}`
      await super.consistSql(sql)

      return { type: 'success', msg: 'Registro deletado com sucesso' }
    } catch (error) {
      return error
    }
  }

  async SConsult(params) {
    try {
      const arrWhere: string[] = ['where 1=1 ']
      params.id && arrWhere.push(`id = ${params.id}`)
      params.description && arrWhere.push(`description like '%${params.description}%'`)

      const where = arrWhere.join(' and ')

      const sql = `select * from credit_cards ${where} order by id`
      const rows = await super.consultSql(sql)

      return { type: 'success', rows }
    } catch (error) {
      return error
    }
  }
}