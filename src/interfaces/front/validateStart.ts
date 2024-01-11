import { messageErrorBFF } from "../notifications"

export interface SendCode {
  status: string
  message: string
}

export interface ServiceSendCodeData {
  sendCode: SendCode
}

export interface VerifyCode {
  status: string
  message: string
}

export interface ServiceValidateCodeData {
  verifyCode: VerifyCode
}

export enum Status {
  Completed = "COMPLETED",
  Pending = "PENDING",
  Process = "PROCESS",
}

export interface FlowMap {
  status: Status
  idState: string
  disabled: boolean
  visible: boolean
}

export interface GetNextJourneyData {
  idJourney: string
  idFlow: string
  idUser: string
  flowMap: FlowMap[]
  currentProcess: string
  currentUrl: string
  fgContingency?: boolean | null
}

export interface GetNextJourney {
  status: string
  message: string
  data: GetNextJourneyData
}

export interface ServiceFindNextJourneyData {
  findJourneyByPhone: GetNextJourney
}

export interface ServiceGetNextJourneyData {
  getNextJourney: GetNextJourney
}

export interface ServiceGetJourneyData {
  GetJourney: GetNextJourney
}

export interface UserJourney {
  curp: string
  idJourney: string
  idUser: string
  phone: string
  username: string
  createdAt: string | null
  fechaNacimiento: string | null
  presolicitud: string | null
  solicitud: string | null
  email?: string | null
  estatus?: string | null
}

export interface FindDataByValue {
  status: "SUCCESS" | "FAIL"
  message: string
  data: UserJourney[]
}

export interface ServiceFindDataByValue {
  findDataByValue: FindDataByValue
}

export interface RegisterStatistical {
  message: string
  status: boolean
}

export interface ServiceSurvey {
  registerStatistical: RegisterStatistical
}

export interface ISurveyData {
  type: 1 | 2
}
