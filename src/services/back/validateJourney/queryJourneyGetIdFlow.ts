import { API_DATA_CONFIG } from "@constants/requestPaths"
import { getCustomHeaders } from "@utils/apiRequest/getCustomHeaders"
import { NextRequest } from "next/server"

const queryJourneyGetIdFlow = async (req: Request | NextRequest) => {
  const customHeaders = await getCustomHeaders(req)

  const query = /* GraphQL */ `
    {
      getInitialData {
        idFlow
      }
    }
  `

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
    ...customHeaders,
  }

  return await fetch(API_DATA_CONFIG, {
    method: "POST",
    headers,
    body: JSON.stringify({ query }),
  })
    .then(response => response.json())
    .then(({ data, errors }) => {
      if (errors) return Promise.reject({ data, errors })
      return data
    })
    .then(({ getInitialData }) => getInitialData)
    .then(({ idFlow }) => idFlow)
    .catch(error => console.error(error))
}

export default queryJourneyGetIdFlow
