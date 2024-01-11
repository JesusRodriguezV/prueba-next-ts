import { API_VALIDATE_START } from "@constants/requestPaths"
import { beGraphQLRequest } from "@utils/apiRequest/beGraphQLRequest"
import { getCustomHeaders } from "@utils/apiRequest/getCustomHeaders"
import { ServiceFindNextJourneyData } from "@interfaces/front/validateStart"

const serviceFindJourneyByPhone = async (req: Request, phone: string) => {
  const customHeaders = await getCustomHeaders(req)
  const query = /* GraphQL */ `
    {
      findJourneyByPhone(phone: "${phone}") {
        status
        message
        data {
          idJourney
          idFlow
          idUser
          flowMap {
            status
            idState
            disabled
            visible
          }
          currentProcess
          currentUrl
        }
      }
    }
  `

  const { data } = await beGraphQLRequest<ServiceFindNextJourneyData>(
    API_VALIDATE_START,
    { query },
    customHeaders
  )

  return data.data
}

export default serviceFindJourneyByPhone
