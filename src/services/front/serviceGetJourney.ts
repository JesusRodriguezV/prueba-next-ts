import { URL_VALIDATE_START } from "@constants/requestPaths"
import { feRequest } from "@utils/apiRequest/feRequest"
import { UserJourney } from "@interfaces/front/validateStart"

const serviceGetJourney = (params: UserJourney) =>
  feRequest<string, UserJourney>(URL_VALIDATE_START.GET_JOURNEY, "POST", params)
    .then(({ data }) => data)
    .catch(error => {
      return Promise.reject(error)
    })

export default serviceGetJourney
