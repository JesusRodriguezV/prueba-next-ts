import { messageErrorBFF } from "@interfaces/notifications"

const defaultMessageError: messageErrorBFF = {
  code: 520,
  type: "modal",
  message: "errors.default.message",
  title: "errors.default.title",
  level: "warning",
}

export const errorCatalog: {
  [props: string | number]: messageErrorBFF
} = {
  // EXAMPLE ERROR
  "MP-001": {
    code: 400,
    type: "modal",
    message: "errors.MP-001.message",
    title: "errors.MP-001.title",
    level: "info",
  },
  IS_BLACKLISTED: {
    level: "error",
    type: "modal",
    message: "errors.isBlackListed.message",
    title: "errors.isBlackListed.title",
    code: 311,
  },
  IS_REJECTED: {
    level: "error",
    type: "modal",
    message: "errors.isRejected.message",
    title: "errors.isRejected.title",
    code: 311,
  },
  IS_ACTIVE_PR: {
    level: "info",
    type: "modal",
    message: "errors.IsActivePr.message",
    title: "errors.IsActivePr.title",
    code: 311,
  },
  IS_ACTIVE_SL: {
    level: "info",
    type: "modal",
    message: "errors.IsActiveSL.message",
    title: "errors.IsActiveSL.title",
    code: 311,
  },
  IS_WHITELISTED: {
    level: "success",
    type: "modal",
    message: "errors.IsWhiteListed.message",
    title: "errors.IsWhiteListed.title",
    code: 310,
  },
  UNAUTHORIZED: {
    level: "error",
    type: "modal",
    message: "errors.UnAuthorized.message",
    title: "errors.UnAuthorized.title",
    code: 310,
  },
  INVALID_NUMBER: {
    level: "warning",
    type: "modal",
    message: "errors.IsInvalidNumber.message",
    title: "errors.IsInvalidNumber.title",
    code: 400,
  },
  DELETED_USER: {
    level: "warning",
    type: "modal",
    message: "errors.DeletedUser.message",
    title: "errors.DeletedUser.title",
    code: 310,
  },
  "MP-400": defaultMessageError,
  "ERR-GENERAL-01": {
    level: "error",
    type: "modal",
    message: "errors.ERR-GENERAL-01.message",
    title: "errors.ERR-GENERAL-01.title",
    code: 400,
  },
  "CAMUS-00004-01": {
    level: "info",
    type: "modal",
    message: "errors.CAMUS-00004-01.message",
    title: "errors.CAMUS-00004-01.title",
    code: 400,
  },
  "CAMUS-00004-02": {
    level: "error",
    type: "modal",
    message: "errors.CAMUS-00004-02.message",
    title: "errors.CAMUS-00004-02.title",
    code: 400,
  },
  "CAMUS-00004-03": {
    level: "error",
    type: "modal",
    message: "errors.CAMUS-00004-03.message",
    title: "errors.CAMUS-00004-03.title",
    code: 400,
  },
  "CAMUS-00004-04": {
    level: "error",
    type: "modal",
    message: "errors.CAMUS-00004-04.message",
    title: "errors.CAMUS-00004-04.title",
    code: 400,
  },
  "CAMUS-00004-05": {
    level: "error",
    type: "modal",
    message: "errors.CAMUS-00004-05.message",
    title: "errors.CAMUS-00004-05.title",
    code: 400,
  },
  "CAMUS-00004-06": {
    level: "error",
    type: "modal",
    message: "errors.CAMUS-00004-06.message",
    title: "errors.CAMUS-00004-06.title",
    code: 400,
  },
  "CAMUS-00004-07": {
    level: "info",
    type: "modal",
    message: "errors.CAMUS-00004-07.message",
    title: "errors.CAMUS-00004-07.title",
    code: 400,
  },
  "CAMUS-00040-SPMESSAGE": {
    level: "warning",
    type: "modal",
    message: "errors.ErrorGeneral.message",
    title: "errors.ErrorGeneral.title",
    code: 400,
  },
  default: defaultMessageError,
}
