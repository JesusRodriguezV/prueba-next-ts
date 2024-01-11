import { DefaultOptions, QueryClient } from "@tanstack/query-core"
import { QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { message } from "antd"
import { messageManager } from "@utils/MessageManager"
import { messageErrorBFF } from "src/interfaces/notifications"

const defaultErrorResponse = {
  type: "message",
  level: "error",
  message: "Cannot connect to the server",
  title: "Error",
} as messageErrorBFF

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const queryErrorHandler = async (error: any) => {
  // console.log("error", error)
  let msgBFF = error?.response?.data as messageErrorBFF
  let onOk
  message.destroy()
  if (error?.response?.status === 403) {
    return messageManager(
      "message",
      "error",
      "Inicia nuevamente sesión para continuar",
      "Session expired"
    )
  }
  if (error?.code === "ERR_NETWORK") {
    return messageManager(
      "modal",
      "error",
      "Verifica tu conexión e intentalo de nuevo",
      "Red no disponible"
    )
  }

  if (msgBFF?.code === 310) {
    onOk = () => {
      window.location.reload()
    }
  }

  if (error?.response?.status === 404) msgBFF = defaultErrorResponse
  return messageManager(
    msgBFF.type,
    msgBFF.level,
    msgBFF.message,
    msgBFF.title,
    onOk
  )
}

const queryClientOptions = {
  defaultOptions: {
    queries: {
      onError: queryErrorHandler,
      refetchOnWindowFocus: false,
      retry: false,
    },
    mutations: {
      onError: queryErrorHandler,
      refetchOnWindowFocus: false,
      retry: false,
    },
  } as DefaultOptions,
}

const queryClient = new QueryClient(queryClientOptions)
export { ReactQueryDevtools, QueryClientProvider, queryClient }
