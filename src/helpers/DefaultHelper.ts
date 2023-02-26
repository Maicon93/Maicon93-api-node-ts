export class DefaultHelper {
  async findOneBy(conn: any, table: string, key: string, value: any) {
    const sql = `select * from ${table} where ${key} = '${value}'`;

    return await conn.query(sql);
  }
}