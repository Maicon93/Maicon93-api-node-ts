import { DefaultHelper } from "../helpers/DefaultHelper";

export class MovimentationCardService extends DefaultHelper {
  async SInsert(params) {
    try {
      const sql = `insert into movimentations (
          data,
          type,
          valor,
          id_credit_card,
          id_category,
          observacao
        ) values (
          '${super.getActualyDate()}',
          '${params.type}',
          '${params.value}',
          '${params.id_credit_card}',
          '${params.id_category}',
          '${params.observation}'
        )`

      await super.consistSql(sql)

      return { type: 'success', msg: 'Registro inserido com sucesso' }
    } catch (error) {
      return { type: 'error', msg: 'Erro ao inserir movimentação' }
    }
  }

  async SDelete(id: string | number) {
    try {
      const sql = `delete from movimentations where id = ${id}`
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
      params.initialData && arrWhere.push(`data >= '${params.initialData}'`)
      params.finalData && arrWhere.push(`data <= '${params.finalData}'`)
      params.type && arrWhere.push(`type = '${params.type}'`)
      params.id_credit_card && arrWhere.push(`id_credit_card in (${params.id_credit_card})`)
      params.id_category && arrWhere.push(`id_category in (${params.id_category})`)

      const where = arrWhere.join(' and ')

      const sql = `select
          m.id,
          to_char(m.data, 'DD/MM/YYYY') data,
          m.valor,
          m.observacao,
          cc.description credit_card,
          c.description category,
          case when type = 'E' then 'Entrada' else 'Saida' end type_movimentation
        from movimentations m
        inner join category c on (c.id = m.id_category)
        inner join credit_cards cc on (cc.id = m.id_credit_card)
        ${where}
        order by m.id desc`
      const rows = await super.consultSql(sql)

      return { rows }
    } catch (error: any) {
      return error.message || error
    }
  }

  async getMovimentationForMounths() {
    try {
      const sql = `select
          mp.id,
          mp.description as nome_mes,
          sum(case when m.type = 'E' then m.valor else 0 end) as entrada,
          SUM(CASE WHEN m.type = 'S' THEN m.valor ELSE 0 END) as saida,
          sum(case when m.type = 'S' then -1 * m.valor else m.valor end) as total
        from movimentations m
        inner join mounths mp on extract(month from m.data) = mp.id
        where id_category != 32
        group by mp.description, mp.id
        order by mp.id`

      const rows = await super.consultSql(sql)
      return { type: 'success', rows }
    } catch (error: any) {
      return { type: 'error', msg: error.message || error }
    }
  }

  async getMovimentationsForCategorys(params) {
    try {
      let where = 'where id_category != 32'
      params.initialData && (where += ` and m.data >= '${params.initialData}'`);
      params.finalData && (where += ` and m.data <= '${params.finalData}'`);

      const sql = `select
        c.id,
        c.description,
        c.observation,
        SUM(CASE WHEN m.type = 'E' THEN m.valor ELSE 0 END) as entrada,
        SUM(CASE WHEN m.type = 'S' THEN m.valor ELSE 0 END) as saida
      from movimentations m
      inner join category c on (c.id = m.id_category)
      ${where}
      group by c.description, c.id, c.observation`

      const rows = await super.consultSql(sql)
      return { type: 'success', rows }
    } catch (error: any) {
      return { type: 'error', msg: error.message || error }
    }
  }
}