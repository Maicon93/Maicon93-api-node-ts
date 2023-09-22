interface DefaultResp {
  type: string
  msg?: string
  rows?: any
}

interface Conn {
  query: any
  end: any
}