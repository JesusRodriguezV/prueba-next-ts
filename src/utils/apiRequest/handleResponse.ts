import customLogger from "../logger/customLogger"

const handlerResponse = <T>(data: T) => {
  try {
    const json = JSON.stringify(data)
    const base64 = Buffer.from(json).toString("base64")
    return Response.json(base64)
  } catch (error) {
    customLogger.error("HANDLER RESPONSE:", `${error}`)
    return Response.json(data)
  }
}

export default handlerResponse
