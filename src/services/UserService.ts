export class UserService {
  getUsers() {
    const rows = {
      id: 1,
      name: 'Maicon Ramos'
    }
    return { type: 'success', rows }
  }
}
