export interface getUserResponse {
  getUsers: GetUsers
}

export interface GetUsers {
  idUserSap?: string
  listViews: string[]
  userName?: string
  nameRol?: string
}
