import { Handler } from "@interfaces/middleware"
// import CustomError from "@utils/CustomError"
import customLogger from "@utils/logger/customLogger"
import { COOKIE_TERMINAL } from "@constants/common"
import decodeJWT from "@utils/JWT/decodeJWT"
import { RequestCookies } from "next/dist/compiled/@edge-runtime/cookies"

const getCookieValue = (
  cookies:
    | RequestCookies
    | Partial<{
        [key: string]: string
      }>,
  name: string
) => {
  if (cookies.get) {
    return (cookies as RequestCookies).get(name)?.value ?? ""
  }
  return (
    (
      cookies as Partial<{
        [key: string]: string
      }>
    )[name] ?? ""
  )
}

/**
 * Middleware de validación de Token Next-Auth
 *
 * @param {NextApiRequest} req NextApiRequest
 * @param {NextApiResponse} res NextApiResponse
 * @return {Promise<ApiMethods>}
 */
const validateCookieTerminal: Handler = async (req, res) => {
  const cookies = req.cookies
  // console.log(cookies.get)
  customLogger.debug("Inicia validación de Cookie Terminal")
  const jwtCookieTerminal: string = getCookieValue(cookies, COOKIE_TERMINAL)
  customLogger.debug(`Cookie JTW Terminal ${jwtCookieTerminal}`)
  const cookieDataTerminal = await decodeJWT(jwtCookieTerminal)
  customLogger.debug(`Cookie Terminal ${JSON.stringify(cookieDataTerminal)}`)
  // if (
  //   !cookieDataTerminal?.centroSap ||
  //   !cookieDataTerminal?.sucursal ||
  //   !cookieDataTerminal?.caja
  // )
  // throw new CustomError(
  //   { message: "Error cookie terminal", name: "COOKIE_MISSING" },
  //   "COOKIE_MISSING"
  // )
  return { req, res }
}

export default validateCookieTerminal
