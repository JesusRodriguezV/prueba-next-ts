import { AuthOptions } from "next-auth"
import CognitoProvider from "next-auth/providers/cognito"
const secret = process.env.NEXTAUTH_SECRET
const cognitoClientId = process.env.COGNITO_CLIENT_ID
const cognitoClientSecret = process.env.COGNITO_CLIENT_SECRET
const cognitoIssuer = process.env.COGNITO_ISSUER
const timeoutSessionMinutes = process.env.TIMEOUT_SESSION_MINUTES

const authOptions: AuthOptions = {
  providers: [
    CognitoProvider({
      clientId: cognitoClientId,
      clientSecret: cognitoClientSecret,
      issuer: cognitoIssuer,
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: timeoutSessionMinutes * 60,
  },

  jwt: {
    secret,
    maxAge: timeoutSessionMinutes * 60,
  },

  pages: {
    signIn: "/login",
    error: "/login",
  },

  callbacks: {
    async jwt({ token, profile }) {
      if (profile) {
        token["custom:burks"] = profile["custom:burks"]
        token["custom:correo_electronico"] =
          profile["custom:correo_electronico"]
        token["custom:cve_vendedor"] = profile["custom:cve_vendedor"]
        token["custom:cve_usuario"] = profile["custom:cve_usuario"]
        token["custom:estatus"] = profile["custom:estatus"]
        token["custom:grupo"] = profile["custom:grupo"]
        token["custom:id_usuario"] = profile["custom:id_usuario"]
        token["name"] = profile["name"]
        token["custom:numero_telefono"] = profile["custom:numero_telefono"]
        token["custom:rol"] = profile["custom:rol"]
        token["custom:centro"] = profile["custom:centro"]
      }
      return token
    },

    async session({ session, token }) {
      session.user["custom:cve_vendedor"] = token["custom:cve_vendedor"]
      session.user["custom:rol"] = token["custom:rol"]
      return session
    },
  },

  debug: false,
}

export default authOptions
