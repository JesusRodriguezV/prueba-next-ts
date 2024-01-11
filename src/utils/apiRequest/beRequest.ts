import type { Method, ResponseType, AxiosResponse } from "axios"
import axios from "axios"
import { v4 as uuidv4 } from "uuid"
import logger from "../logger"
import type { ApiResponse } from "@interfaces/common"

const headersDefault = {
  Accept: "application/json",
  "Content-Type": "application/json;charset=UTF-8",
}

const formatLog = (response: AxiosResponse) => {
  return `<URL>: ${response.config.url} <HEADERS>: ${JSON.stringify(
    response.config.headers
  )} <BODY>: ${JSON.stringify(response.config.data)
    .replace(/\\"/g, "")
    .replace(/\s/g, "")
    .replace(/\\\\n/g, " ")} <RESPONSE>: ${JSON.stringify(response.data)} ${
    response?.data?.errors
      ? `<ERRORS>: ${JSON.stringify(response?.data?.errors)}`
      : ""
  }`
}

axios.interceptors.response.use(
  function (response) {
    const error = Boolean(response?.data?.errors)
    if (error) {
      logger.error(formatLog(response))
      return Promise.reject(response)
    }
    logger.verbose(formatLog(response))
    return response
  },
  function (error) {
    try {
      logger.error(formatLog(error))
    } catch (error) {
      // console.log(error)
    }
    return Promise.reject(error)
  }
)

export const beRequest = <TRes, TData = {}>(
  path: string,
  method: Method,
  data?: TData,
  responseType: ResponseType = "json",
  headers?: Record<string, unknown>
) => {
  const url = path
  const params = method === "GET" ? data : undefined
  return axios.request<
    ApiResponse<TRes>,
    AxiosResponse<ApiResponse<TRes>, TData>,
    TData
  >({
    method,
    url,
    params,
    data,
    headers: { ...headersDefault, ...headers, "tag-id": uuidv4() },
    responseType,
  })
}
