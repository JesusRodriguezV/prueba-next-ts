interface typeMessage {
  type: "modal" | "message"
}
interface levelMessage {
  level: "error" | "success" | "warning" | "info" | "confirm"
}

export type typeOfModal = "error" | "info" | "question" | "success" | "warning"

interface titleMessage {
  title: string
}
interface messageMessage {
  message: string
}
export interface messageErrorBFF {
  code?: number
  message: messageMessage["message"]
  type: typeMessage["type"]
  level: levelMessage["level"]
  title: titleMessage["title"]
  payload?: {}
  clearCookieSession?: boolean
}

export type messageManagerFn = (
  type: typeMessage["type"],
  level: typeOfModal,
  message: messageMessage["message"],
  title: titleMessage["title"],
  onOk?: () => void
) => void
export interface messageNotification {
  date: string
  message: string
  _id: string
  selected?: boolean | undefined
}
