export enum FLOWMAP_STATUSES {
  PENDING = "wait",
  PROCESS = "process",
  COMPLETED = "finish",
}

export interface IFlowMap {
  idState: string
  status: "PENDING" | "PROCESS" | "COMPLETED"
  title: string
  visible: boolean
  disabled: boolean
}

export interface IJourney {
  idFlow: string
  idUser: string
  idJourney: string
  currentProcess: string
  nextProcess: string
  currentUrl: string
  flowMap: IFlowMap[]
  message: string
}

export interface IPageAdvanceJourney {
  advanceJourney: IJourney
}
