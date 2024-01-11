import { URL_VALIDATE_START } from "@constants/requestPaths"
import { feRequest } from "@utils/apiRequest/feRequest"
import { IDataJourneysParams } from "@interfaces/front/getDataJourneys"
import { FindDataByValue } from "@interfaces/front/validateStart"

const serviceGetDataJourneys = async (params: IDataJourneysParams) =>
  await feRequest<FindDataByValue, IDataJourneysParams>(
    URL_VALIDATE_START.GET_JOURNEYS,
    "POST",
    params
  )
    .then(({ data }) => data.data)
    .catch(error => {
      return Promise.reject(error)
    })

export default serviceGetDataJourneys
