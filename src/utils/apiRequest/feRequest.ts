import axios, { Method, ResponseType, AxiosResponse } from "axios"
import { paramsToSend } from "src/interfaces/common"
import { BASE_PATH, DOMAIN_URL } from "@constants/enviroments"
import { errorCatalog } from "@constants/errorCatalog"
import { t } from "i18next"
import _ from "lodash"

const isDebug = process.env.LOGS_LEVEL === "debug"

const log = (message: string): void => {
  if (isDebug) console.log(message)
}

const headersDefault = {
  Accept: "application/json",
  "Content-Type": "application/json;charset=UTF-8",
}

export const feRequest = async <TRes, TData = paramsToSend>(
  path: string,
  method: Method,
  data?: TData,
  responseType: ResponseType = "json",
  headers?: {}
) => {
  // const urlParams = new URLSearchParams(window.location.search)
  // const flow = urlParams.get("flow")
  // log(`flow: ${flow}`)
  const params = method === "GET" ? data : undefined
  let body: TData | string | undefined
  try {
    const json = JSON.stringify(data)
    const base64 = Buffer.from(json).toString("base64")
    body = base64
  } catch (error) {
    log(`error: ${JSON.stringify(error)}`)
    body = data
  }
  return axios
    .request<TRes, AxiosResponse<TRes, TData | string>, TData | string>({
      method,
      url: `${DOMAIN_URL}${BASE_PATH}/api${path}`,
      params,
      data: body,
      headers: {
        ...headersDefault,
        ...headers,
        // flow,
      },
      responseType,
    })
    .then(res => {
      const regex =
        /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/

      if (_.isString(res.data) && regex.test(res.data)) {
        const json = Buffer.from(res.data, "base64").toString()
        const data: TRes = JSON.parse(json)
        return { ...res, data }
      }
      return res
    })
    .catch(error => {
      log(`error: ${JSON.stringify(error)}`)
      const messageError = errorCatalog.default
      return Promise.reject({
        response: {
          data: error.response?.data || {
            ...messageError,
            message: t(messageError.message),
            title: t(messageError.title),
          },
        },
        code: error.code || 521,
      })
    })
}
