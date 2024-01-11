import { URL_LOGOUT_COGNITO_FRONT } from "@constants/common"
import { feRequest } from "@utils/apiRequest/feRequest"

const serviceLogout = async () => {
  const { data } = await feRequest<{ url: string }>(
    URL_LOGOUT_COGNITO_FRONT.GET_LOGOUT_DATA,
    "GET"
  )
  return data.url
}

export default serviceLogout
