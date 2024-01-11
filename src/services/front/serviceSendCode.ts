import { URL_VALIDATE_START } from "@constants/requestPaths"
import { feRequest } from "@utils/apiRequest/feRequest"
import { SendCode } from "@interfaces/front/validateStart"
import { IPhoneDataForm } from "@interfaces/front/validatePhone"

const serviceSendCode = (params: IPhoneDataForm) =>
  feRequest<SendCode, IPhoneDataForm>(
    URL_VALIDATE_START.SEND_CODE,
    "POST",
    params
  )
    .then(data => data)
    .catch(error => {
      return Promise.reject(error)
    })

export default serviceSendCode
