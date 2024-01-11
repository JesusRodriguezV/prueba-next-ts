import { IPagePropsGeneric, paramsToSend } from "./common"

export interface IResp {
  name: string
  cp: string
}

export interface IContainerState {
  SearchData: ISearchDataForm
}

export interface IPageHomeProps extends IPagePropsGeneric {
  data: paramsToSend | {}
  isErrorGetLandingData: boolean
  isSuccessGetLandingData: boolean
}

export interface ISearchDataCompProps {
  onSendSearch: (data: ISearchDataForm) => void
  data: ISearchDataForm
  isSuccessGetLandingData: boolean
}
export interface ISearchDataForm {
  name: string
  lastName: string
  secondName: string
}

export interface onSendSearch extends ISearchDataForm {
  reset: Function
}
