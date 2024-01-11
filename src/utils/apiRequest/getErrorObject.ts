/* eslint-disable @typescript-eslint/no-explicit-any */
import { messageErrorBFF } from "src/interfaces/notifications"

export const getErrorObject = (error: any) => {
  return {
    code: error.response?.data?.code || 500,
    message: error.response?.data.message || "Error al obtener la información",
    level: "error",
    type: "message",
    title: error.response?.data.title || "Error",
    payload: error.response?.data.descriptionError || {},
  } as messageErrorBFF
}
