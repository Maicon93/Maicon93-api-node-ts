import { DefaultHelper } from "../helpers/DefaultHelper";

export class CategoryService extends DefaultHelper {
  async SInsert(params) {
    try {
      const sql = `insert into category (
          description,
          limit_category,
          observation
        ) values (
          '${params.description}',
          '${params.limit_category}',
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
      const sql = `update category set
          description = '${params.description}',
          limit_category = ${params.limit_category},
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
      const sql = `delete from category where id = ${id}`
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

      const sql = `select * from category ${where} order by id`
      const rows = await super.consultSql(sql)

      return { type: 'success', rows }
    } catch (error) {
      return error
    }
  }
}