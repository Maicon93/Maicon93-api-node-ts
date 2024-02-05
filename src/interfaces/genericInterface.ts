interface DefaultResp {
  type: string
  msg?: string
  rows?: any
}

interface Conn {
  query: any
  end: any
}

interface Consist {
  type: string
  msg?: string
  rowsAffected?: number
}

interface Consult {
  type: string
  msg?: string
  rows?: any[]
}