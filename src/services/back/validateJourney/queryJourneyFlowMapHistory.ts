import { API_URL_GET_JOURNEY } from "@constants/requestPaths"
import { getCustomHeaders } from "@utils/apiRequest/getCustomHeaders"
import type { NextRequest } from "next/server"

const queryJourneyFlowMapHistory = async (req: Request | NextRequest) => {
  const customHeaders = await getCustomHeaders(req)
  const query = `
  query {
    queryJourneyFlowMapHistory {
      currentProcess
      currentUrl
      flowMap{
          idState
          status
          title
          visible
          disabled
      }
      idJourney
      nextProcess
      message
    }
  }
  `
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
    ...customHeaders,
  }

  return await fetch(API_URL_GET_JOURNEY, {
    method: "POST",
    headers,
    body: JSON.stringify({ query }),
  })
    .then(response => response.json())
    .then(data => data)
    .then(({ data }) => data)
    .catch(error => console.error(error))
}

export default queryJourneyFlowMapHistory
