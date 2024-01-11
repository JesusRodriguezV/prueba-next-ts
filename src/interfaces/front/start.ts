import { IDataJourneysParams } from "./getDataJourneys"
import { IPhoneDataForm } from "./validatePhone"

export interface StartState {
  typeSubmit: string | number
  isPhoneAvailable: boolean
  showModalNext: boolean
  phoneForm: IPhoneDataForm
  dataJourneysParams: IDataJourneysParams
  enabledGetDataJourneys: boolean
}

export interface IModalNext {
  showModal: boolean
  isLoading: boolean
  onOk: () => void
}
