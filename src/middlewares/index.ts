import validateTokenFront from "./validateToken"
import handlerError from "@utils/apiRequest/handleError"
import customLogger from "@utils/logger/customLogger"
import validateCookieTerminal from "./validateCookieTerminal"
import handlerResponse from "@utils/apiRequest/handleResponse"
import parseBase64 from "./parseBase64"
import { Handler, Pipe } from "@src/interfaces/middleware"
import { cookies } from "next/headers"

/**
 * Función pipe para concatenar funciones middle, cada función se ejecuta con los parámetros de retorno de la anterior función
 *
 */
const pipe: Pipe = (req: Request, ...funcs: Handler[]) => {
  return funcs.reduce(async (previousValue, currentFunction) => {
    const req = await previousValue
    return currentFunction(req)
  }, Promise.resolve(req))
}
/**
 * wrapper middleware esta funciona aplica todos los middlewares
 *
 * @param {NextApiHandler} handler
 * @return {void}
 */
const middleware = <T>(handler: (req: Request) => Promise<T>) => {
  const POST = async (req: Request) => {
    try {
      customLogger.debug("INICIA MIDDLEWARE API")
      console.log("MIDDLEWARE", req.headers)
      const request = await pipe(
        req,
        // Aquí se agregan las validaciones necesarias para aplicar antes de las apis
        validateTokenFront,
        // validateCookieTerminal,
        parseBase64
      )
      customLogger.debug("EJECUTA API")
      const data = await handler(request)
      return handlerResponse(data)
    } catch (error) {
      customLogger.error("MIDDLEWARE API")
      return handlerError(error, req)
    }
  }
  const GET = async (req: Request) => {
    return Response.json({})
  }
  return { GET, POST }
}

export default middleware
