export class AuthService {
  async SLogin(params, conn: Conn) {
    const sql = `select * from users where username = '${params.user}' and password = '${params.password}'`
    const resp = await conn.query(sql)

    if (resp.rows.length) {
      const user = resp.rows[0]
      const params = {
        id: user.id,
        name: user.name,
        username: user.username,
      }
      return { type: 'success', rows: params }
    } else {
      return { type: 'error', msg: 'Dados de acesso incorretos' }
    }
  }
}