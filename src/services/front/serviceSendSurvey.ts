import { URL_VALIDATE_START } from "@constants/requestPaths"
import { feRequest } from "@utils/apiRequest/feRequest"
import { ISurveyData, ServiceSurvey } from "@interfaces/front/validateStart"

const serviceSendSurvey = (params: ISurveyData) =>
  feRequest<ServiceSurvey, ISurveyData>(
    URL_VALIDATE_START.SEND_SURVEY,
    "POST",
    params
  )
    .then(({ data }) => data)
    .catch(error => {
      return Promise.reject(error)
    })

export default serviceSendSurvey
