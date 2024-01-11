import { API_VALIDATE_START } from "@constants/requestPaths"
import { beGraphQLRequest } from "@utils/apiRequest/beGraphQLRequest"
import { getCustomHeaders } from "@utils/apiRequest/getCustomHeaders"
import { IDataJourneysParams } from "@interfaces/front/getDataJourneys"
import { ServiceFindDataByValue } from "@interfaces/front/validateStart"
// import { beRequest } from "@src/utils/apiRequest/beRequest"

const serviceGetDataJourneys = async (params: IDataJourneysParams) => {
  // console.log(req.body)
  // console.log(params)
  const customHeaders = await getCustomHeaders()
  const query = /* GraphQL */ `
    {
      findDataByValue(value: "${params.name}") {
        status
        message
        data {
          curp
          idJourney
          idUser
          phone
          username
          createdAt
          fechaNacimiento
          presolicitud
          solicitud
          estatus
        }
      }
    }
  `

  const { data } = await beGraphQLRequest<ServiceFindDataByValue>(
    API_VALIDATE_START,
    { query },
    customHeaders
  )

  return data.data
}

export default serviceGetDataJourneys
