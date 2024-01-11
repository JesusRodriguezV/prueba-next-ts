import { URL_TERMINAL } from "@constants/requestPaths"
import { TerminalCookie } from "@interfaces/terminalCookie"
import { feRequest } from "@utils/apiRequest/feRequest"

const serviceGetTerminal = async () => {
  const { data } = await feRequest<TerminalCookie>(
    URL_TERMINAL.GET_TERMINAL,
    "POST"
  )
  return data
}

export default serviceGetTerminal
