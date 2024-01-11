/* eslint-disable @typescript-eslint/no-unused-vars */
import { Session } from "next-auth"
import { JWT } from "next-auth/jwt"

interface IUserProfile {
  name: string
  "custom:cve_vendedor": string
  "custom:rol": string
  "custom:burks": string
  "custom:correo_electronico": string
  "custom:cve_vendedor": string
  "custom:cve_usuario": string
  "custom:estatus": string
  "custom:grupo": string
  "custom:id_usuario": string
  "custom:nombre_usuario": string
  "custom:numero_telefono": string
  "custom:rol": string
  "custom:centro": string[]
}

declare module "next-auth/jwt" {
  interface JWT extends IUserProfile {
    jwtToken: string | undefined
  }
}

declare module "next-auth" {
  interface Profile extends IUserProfile {}

  interface User {
    profile: IUserProfile
  }

  interface Account {
    profile: IUserProfile
  }

  interface Session {
    user: {
      name: string
      "custom:cve_vendedor": string
      "custom:rol": string
      "custom:burks": string
      "custom:correo_electronico": string
      "custom:cve_vendedor": string
      "custom:cve_usuario": string
      "custom:estatus": string
      "custom:grupo": string
      "custom:id_usuario": string
      "custom:nombre_usuario": string
      "custom:numero_telefono": string
      "custom:rol": string
      "custom:centro": string[]
    }
  }
}
