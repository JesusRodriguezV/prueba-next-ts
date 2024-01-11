import { URL_COOKIE } from "@constants/requestPaths"
import { feRequest } from "@utils/apiRequest/feRequest"

type Params = {
  key: string
  value: string
}

const serviceSetTerminal = async (params: Params) => {
  const { data } = await feRequest<string | null>(
    URL_COOKIE.SET_COOKIE,
    "POST",
    params
  )
  return data
}

export default serviceSetTerminal
