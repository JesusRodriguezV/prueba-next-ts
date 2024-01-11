import { API_VALIDATE_START } from "@constants/requestPaths"
import { beGraphQLRequest } from "@utils/apiRequest/beGraphQLRequest"
import { getCustomHeaders } from "@utils/apiRequest/getCustomHeaders"
import { ServiceGetNextJourneyData } from "@interfaces/front/validateStart"

const serviceGetNextJourney = async (req: Request, phone: string) => {
  const customHeaders = await getCustomHeaders(req)
  const query = /* GraphQL */ `
    {
      getNextJourney(phone: "${phone}") {
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
          fgContingency
        }
      }
    }
  `

  const { data } = await beGraphQLRequest<ServiceGetNextJourneyData>(
    API_VALIDATE_START,
    { query },
    customHeaders
  )

  return data.data
}

export default serviceGetNextJourney
