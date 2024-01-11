import { paramsToSend } from "@interfaces/common"
import { IJourney } from "@interfaces/state-machine"

export interface IResultUpdateFlowMapState {
  updateJourneyCurrentProcess: IJourney
}

export interface IPageFlowMapProps {
  data?: IResultUpdateFlowMapState
  isErrorUpdateFlowMapState?: boolean
  isSuccessUpdateFlowMapState?: boolean
}
