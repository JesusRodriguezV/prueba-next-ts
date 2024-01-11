import { API_VALIDATE_START } from "@constants/requestPaths"
import { beGraphQLRequest } from "@utils/apiRequest/beGraphQLRequest"
import { getCustomHeaders } from "@utils/apiRequest/getCustomHeaders"
import { ServiceSendCodeData } from "@interfaces/front/validateStart"
import { IPhoneDataForm } from "@interfaces/front/validatePhone"

const serviceSendCode = async (req: Request, params: IPhoneDataForm) => {
  const customHeaders = await getCustomHeaders(req)
  const headers = { idStation: 1, ...customHeaders }
  const query = /* GraphQL */ `
    {
      sendCode(phone: "${params.phone}", type: "${params.typeValidation}") {
        status
        message
      }
    }
  `

  const { data } = await beGraphQLRequest<ServiceSendCodeData>(
    API_VALIDATE_START,
    { query },
    headers
  )

  return data.data
}

export default serviceSendCode
