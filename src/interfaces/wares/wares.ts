import { paramsToSend } from "@interfaces/common"

export interface IWares {
  results: ResultWares[]
}

export interface ResultWares {
  id: number
  wareDescription: string
  imei: string
  lote: string
  noProducts: string
}

export interface IResultServiceReciveWares {
  Opcion: string
  vbeln: string
  MatDoc: string
  DocYear: string
  Werks: string
  Mensaje: string
}
export interface IPageWaresProps {
  data?: ResultWares[]
  isErrorReciveWares: boolean
  isSuccessReciveWares: boolean
}

export interface IContainerState {
  SearchData: IEmailDataForm
}

export interface IWaresDataCompProps {
  onSendSearch: (data: IEmailDataForm) => void
  data: IEmailDataForm
  isSuccessReciveWares: boolean
}
export interface IEmailDataForm {
  phone: string
}

export interface onSendSearch extends IEmailDataForm {
  reset: Function
}

export interface WaresTableProps {
  data: ResultWares[]
}

export interface WaresTitleProps {
  data: ResultWares[]
}
