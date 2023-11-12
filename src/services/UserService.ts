export class UserService {
  getUsers() {
    const rows = {
      id: 1,
      name: 'Maicon Ramos',
      username: 'maicon'
    }
    return { type: 'success', rows }
  }
}
