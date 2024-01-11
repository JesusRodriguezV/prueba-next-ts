import { API_SURVEY } from "@constants/requestPaths"
import { beGraphQLRequest } from "@utils/apiRequest/beGraphQLRequest"
import { getCustomHeaders } from "@utils/apiRequest/getCustomHeaders"
import { ISurveyData, ServiceSurvey } from "@interfaces/front/validateStart"

const serviceSendSurvey = async (req: Request, params: ISurveyData) => {
  const customHeaders = await getCustomHeaders(req)
  const query = /* GraphQL */ `
    mutation {
      registerStatistical(type: ${params.type}) {
        status
        message
      }
    }
  `

  const { data } = await beGraphQLRequest<ServiceSurvey>(
    API_SURVEY,
    { query },
    customHeaders
  )

  return data.data
}

export default serviceSendSurvey
