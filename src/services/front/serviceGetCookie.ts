import { URL_COOKIE } from "@constants/requestPaths"
import { feRequest } from "@utils/apiRequest/feRequest"

const serviceGetTerminal = async (key: string) => {
  const { data } = await feRequest<string | null, string>(
    URL_COOKIE.GET_COOKIE,
    "POST",
    key
  )
  return data
}

export default serviceGetTerminal
