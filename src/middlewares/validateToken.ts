import { Handler } from "@interfaces/middleware"
import CustomError from "@utils/CustomError"
import customLogger from "@utils/logger/customLogger"
import { getServerSession } from "next-auth/next"
import { getToken } from "next-auth/jwt"
import authOptions from "@src/utils/authOptions"

/**
 * Middleware de validación de Token Next-Auth
 *
 * @param {NextApiRequest} req NextApiRequest
 * @param {NextApiResponse} res NextApiResponse
 * @return {Promise<ApiMethods>}
 */
const validateTokenFront: Handler = async req => {
  customLogger.debug("Inicia validación de token Front")
  const session = await getServerSession(authOptions)
  console.log(session)
  if (!session)
    throw new CustomError(
      { message: "Error al validar el token Front", name: "UNAUTHORIZED" },
      "UNAUTHORIZED"
    )
  return req
}

export default validateTokenFront
