import { Handler } from "@interfaces/middleware"
import customLogger from "@utils/logger/customLogger"
import handlerRequest from "@utils/apiRequest/handleRequest"
import type { NextApiRequest } from "next"
import { NextRequest } from "next/server"

/**
 * Middleware de validación de Token Next-Auth
 *
 * @param {NextApiRequest} req NextApiRequest
 * @param {NextApiResponse} res NextApiResponse
 * @return {Promise<ApiMethods>}
 */
const parseBase64: Handler = async req => {
  customLogger.debug("Inicia parseBase64")
  const body = await handlerRequest(req)
  console.log(body)
  const request = new Request(req, { body: JSON.stringify(body) })
  return request
}

export default parseBase64
