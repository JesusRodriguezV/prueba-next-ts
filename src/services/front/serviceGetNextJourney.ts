import { URL_VALIDATE_START } from "@constants/requestPaths"
import { feRequest } from "@utils/apiRequest/feRequest"
import { IPhoneDataForm } from "@interfaces/front/validatePhone"

const serviceGetNextJourney = (params: IPhoneDataForm) =>
  feRequest<string, IPhoneDataForm>(
    URL_VALIDATE_START.VALIDATE_GET_NEXT_JOURNEY,
    "POST",
    params
  )
    .then(({ data }) => data)
    .catch(error => {
      return Promise.reject(error)
    })

export default serviceGetNextJourney
