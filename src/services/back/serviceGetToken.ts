import customLogger from "@utils/logger/customLogger"

interface Auth {
  Token: string
  expires_in: string
}

interface ApiResponse {
  code: string
  status: string
  message: string
  data: Auth
}

const API_AUTH_BACK_URL = process.env.API_AUTH_BACK_URL
const API_AUTH_BACK_USERNAME_AUTH = process.env.API_AUTH_BACK_USERNAME_AUTH
const API_AUTH_BACK_PASSWORD_AUTH = process.env.API_AUTH_BACK_PASSWORD_AUTH
const API_AUTH_BACK_USER = process.env.API_AUTH_BACK_USER
const API_AUTH_BACK_SCOPE = process.env.API_AUTH_BACK_SCOPE
const API_AUTH_BACK_PASSWORD = process.env.API_AUTH_BACK_PASSWORD

const serviceGetToken = async () => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
    Authorization: `Basic ${Buffer.from(
      `${API_AUTH_BACK_USERNAME_AUTH}:${API_AUTH_BACK_PASSWORD_AUTH}`
    ).toString("base64")}`,
  }

  return await fetch(API_AUTH_BACK_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      user: API_AUTH_BACK_USER,
      scope: API_AUTH_BACK_SCOPE,
      password: API_AUTH_BACK_PASSWORD,
    }),
  })
    .then(response => response.json())
    .then(data => data as ApiResponse)
    .catch(error => {
      customLogger.error(
        `Error serviceGetToken Back, code:${error.code}, data:${error.data}`
      )
      customLogger.error(error)
      return null
    })
}

export default serviceGetToken
