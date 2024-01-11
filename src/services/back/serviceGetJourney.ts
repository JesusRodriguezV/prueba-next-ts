import { API_VALIDATE_START } from "@constants/requestPaths"
import { beGraphQLRequest } from "@utils/apiRequest/beGraphQLRequest"
import { getCustomHeaders } from "@utils/apiRequest/getCustomHeaders"
import {
  ServiceGetJourneyData,
  UserJourney,
} from "@interfaces/front/validateStart"

const serviceGetJourney = async (req: Request, params: UserJourney) => {
  const customHeaders = await getCustomHeaders(req)
  const query = /* GraphQL */ `
    {
      GetJourney {
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
          idJourney
          idFlow
          idUser
          fgContingency
        }
      }
    }
  `

  const { data } = await beGraphQLRequest<ServiceGetJourneyData>(
    API_VALIDATE_START,
    { query },
    {
      ...customHeaders,
      idUser: params.idUser,
      idJourney: params.idJourney,
    }
  )

  return data.data
}

export default serviceGetJourney
