import { TypeValidation } from "@constants/start"

export interface ResultWares {
  email: string
}

export interface IResponseJourney {
  idFlow: string
  idUser: string
  idJourney: string
  currentProcess: string
  currentUrl: string
}

export interface IResponseEmail {
  lambda_service: IResponseJourney
}

export interface IResultServiceValidatePhone {
  phoneValidation?: IResponseJourney
}

export interface IResultServiceGetContingency {
  data: IResponseContingency
}

export interface IResponseContingency {
  getInitialData: ResponseContingency
}

export interface ResponseContingency {
  fg_incode: string
  fg_geolocation_map: string
}

export interface IPageValidateEmailProps {
  data?: IResultServiceValidatePhone
  onSendSearch: (e: IPhoneDataForm) => void
  containerState: IContainerState
  saveCookies: (data?: IResponseJourney) => Promise<void>
  isErrorValidateEmail: boolean
  isSuccessValidateEmail: boolean
}

export interface IValidatePhoneDataCompProps {
  onSubmit: (data: IPhoneDataForm) => void
  data: IPhoneDataForm
}

export interface IContainerState {
  dataPre: IPhoneDataForm
}

export interface IPhoneDataForm {
  phone: string
  typeValidation: TypeValidation
}

export interface onSendSearch extends IPhoneDataForm {
  reset: Function
}
export interface paramsValidatePhone {
  phone: string
}

export interface IPhoneContainer {
  phoneFormData: IPhoneDataForm
  onNext: (data?: IPhoneDataForm) => void
}
