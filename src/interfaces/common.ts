import { AnySchema, Lazy, Reference } from "yup"
import { Dispatch, SetStateAction } from "react"

export enum FormatFiles {
  // ? Show .xls, .xlsx, .csv files:
  allExcel = "text/csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",
  // ? Only show modern Excel (.xlsx) files:
  excel = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  // ? Only show old Excel (.xls) files
  oldExcel = "application/vnd.ms-excel",
  // ? Only show .pdf files
  pdf = "application/pdf",
  // ? Only show image files
  images = "image/png, image/jpeg",
}

export interface ILoadFileToBase64 {
  base64: string
  name: string
  size: number
}

export interface IUseCases {
  paramsToSend?: paramsToSend
}
export type paramsToSend = { [key: string]: string | number | Date | unknown }

export interface IQueryPageState {
  enabled: boolean
  paramsToSend: paramsToSend
}

export interface IPagePropsGeneric {
  setPageStateLanding: React.Dispatch<React.SetStateAction<IQueryPageState>>
}

export interface IAPIResGeneric<T> {
  payload: T
  message?: string
  title?: string
}
export interface ICalcAuthorizationByUrl {
  url: string
  scope: Array<string>
}

// API Response Contract back

export interface Payload<TResult> {
  result: TResult
  results: TResult[]
}

export interface ApiResponse<TResult> {
  code: number
  statusCode: string
  typePayload: string
  payload: Payload<TResult>
  data: TResult
}
// Layout

export interface Responsive {
  xs: boolean
  sm: boolean
  md: boolean
  lg: boolean
  xl: boolean
}

export interface HeaderCustomProps {
  collapsed: boolean
  setCollapsed: Dispatch<SetStateAction<boolean>>
  responsive: Responsive
}

export interface SideCustomProps {
  collapsed: boolean
  setCollapsed: Dispatch<SetStateAction<boolean>>
  responsive: Responsive
}

export interface JWTCookieStateData {
  idJourney: unknown
  idUser: unknown
  idFlow: unknown
}
export type YupSchemaObject<T> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [K in keyof T]?: AnySchema | Reference | Lazy<any, any>
}
export interface SelectOption {
  label: string
  value: string | number
}
