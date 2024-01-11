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

export interface IResultGetCodeBody {
  status: string
  message: string
}

export interface IResultGetCode {
  generateCode: IResultGetCodeBody
}

export interface IResultValidateSmsCodeBody {
  status: string
  message: string
}

export interface IResultValidateSmsCode {
  validateCode: IResultValidateSmsCodeBody
}

export interface IResultGetCode {
  generateCode: IResultGetCodeBody
}

export interface IResultServiceValidateEmail {
  validarCorreo?: IResponseJourney
}

export interface IPageValidateEmailProps {
  onValidateCode: (code: string) => void
  isErrorValidateEmail: boolean
  isSuccessValidateEmail: boolean
  isSuccessGetCode: boolean
  getSmsCode: () => void
  isSuccessGetPhoneCallCode: boolean
  getPhoneCallCode: () => void
}

export interface IValidateEmailDataCompProps {
  onSendSearch: (data: IEmailDataForm) => void
  data: IEmailDataForm
  isSuccessValidateEmail: boolean
  countdown: number
  startCountdown: () => void
  tries: number
  handleResendSMS: () => void
}

export interface onSendSearch extends IEmailDataForm {
  reset: Function
}

export interface IContainerState {
  SearchData: IEmailDataForm
}

export interface IEmailDataForm {
  code?: string
  [key: string]: string | number | unknown
}

export interface ValidateBlackList {
  message: string
  status: boolean
}

export interface ResponseIsBlackListed {
  validateBlackList: ValidateBlackList
}

export interface ResultRejected {
  remainingDays: string
}

export interface ValidateRejected {
  message: string
  status: boolean
  result: ResultRejected[]
}

export interface ResponseIsRejected {
  validateRejectedPresolicitud: ValidateRejected
}
