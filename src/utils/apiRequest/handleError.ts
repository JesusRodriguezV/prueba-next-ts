import StatusCodeHandler from "@utils/StatusCodeHandler"
import customLogger from "../logger/customLogger"

const handlerError = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any,
  req: Request
) => {
  customLogger.debug("ERROR HANDLER:", `${error}`)
  const flowCookie = `${req.headers.get("flow") || ""}`
  const errors =
    error?.response?.errors ||
    error?.response?.data?.errors ||
    error?.data?.errors ||
    []
  const statusCode =
    error.customStatusCode ||
    errors[0]?.errorInfo?.statusCode ||
    errors[0]?.errorType
  const messageError = StatusCodeHandler(statusCode, errors[0]?.errorInfo)

  const headers = new Headers()

  headers.append("Content-Type", "application/json")

  if (messageError?.clearCookieSession)
    headers.append("Set-Cookie", `${flowCookie}=deleted; Max-Age=0; path=/`)

  return Response.json(messageError, {
    status: messageError.code || 520,
    headers,
  })
}

export default handlerError
