import { FindDataByValue, UserJourney } from "./validateStart"

export interface IDataJourneysParams {
  name: string
}

export interface IDataJourneysContainer {
  dataJourneysParams: IDataJourneysParams
  setDataJourneysParams: (params: IDataJourneysParams) => void
  dataJourneys?: FindDataByValue
  getJourney: (data: UserJourney) => void
}

export interface IFormDataJourneysParams {
  data: IDataJourneysParams
  onSubmit: (data: IDataJourneysParams) => void
}

export interface ITableJourneys {
  dataJourneys: UserJourney[]
  onAction: (data: UserJourney) => void
}
