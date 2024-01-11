import { t } from "i18next"
import { errorCatalog } from "@constants/errorCatalog"
import { messageErrorBFF } from "@interfaces/notifications"

const StatusCodeHandler = (
  statusCode?: string,
  payload?: {}
): messageErrorBFF => {
  const messageError =
    errorCatalog[statusCode || "default"] || errorCatalog["default"]

  return {
    ...messageError,
    message: t(messageError.message, payload),
    title: t(messageError.title),
  }
}

export default StatusCodeHandler
