export interface IFormLogin {
  username: string
  password: string
}

export interface IFormLoginProps {
  onSendSearch: (data: IFormLogin) => void
  loginProviders: string
}

export interface IPermissionByUser {
  data: IGetPermission
}

export interface IGetPermission {
  getPermissionByUser: GetPermissionByUser
}

interface GetPermissionByUser {
  code: number
  statusCode: string
  message: string
  status: string
  data: Data
}

interface Data {
  id_user: number
  names: string
  paternal_surname: string
  maternal_surname: string
  user_identifier: string
  email: string
  active: boolean
  roles: Role2[]
}

interface Role2 {
  role: Role
}

interface Role {
  id_role: number
  rolename: string
  role_description: string
  active: boolean
  pages: IPages[]
}

export interface IPages {
  page: Page
}

interface Page {
  url: string
  descripcion: string
}
