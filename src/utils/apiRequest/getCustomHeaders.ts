import { COOKIE_TERMINAL } from "@constants/common"
import decodeJWT from "@utils/JWT/decodeJWT"
import serviceGetToken from "@services/back/serviceGetToken"
import { getToken } from "next-auth/jwt"
import { cookies, headers } from "next/headers"
import customLogger from "../logger/customLogger"

export const getCustomHeaders = async (): Promise<Record<string, unknown>> => {
  try {
    const headersList = headers()
    const cookiesList = cookies()
    const flow = `${
      headersList.get("flow") || "70bb58b1-c84a-5720-9cdc-cc73dc9fac55"
    }`

    console.log(cookiesList.getAll())

    customLogger.debug(`flow: ${flow}`)

    const responseGetToken = await serviceGetToken()
    if (!responseGetToken) throw "Authentication Error, no token available"

    // const tokenSession = await getToken({ req })
    // if (!tokenSession) throw "Authentication Error, no session available"

    const jwtCookieSession: string = cookiesList.get(flow)?.value || ""
    customLogger.debug(`jwtCookieSession: ${jwtCookieSession}`)
    const cookieSessionData = await decodeJWT(jwtCookieSession)

    customLogger.debug(
      `cookieSessionData: ${JSON.stringify(cookieSessionData)}`
    )

    const jwtCookieTerminal: string =
      cookiesList.get(COOKIE_TERMINAL)?.value || ""
    const cookieTerminalData = await decodeJWT(jwtCookieTerminal)

    const stateData = {
      Authorization: `Bearer ${responseGetToken?.data?.Token}`,
      idJourney: cookieSessionData["idJourney"],
      idUser: cookieSessionData["idUser"],
      idFlow: cookieSessionData["idFlow"],
      fgContingency: cookieSessionData["fgContingency"],
      // cve_vendedor: tokenSession["custom:cve_vendedor"],
      // vn_Descripcion: tokenSession["name"],
      centroSap: cookieTerminalData["centroSap"],
      sucursal: cookieTerminalData["sucursal"],
      caja: cookieTerminalData["caja"],
    }

    return stateData
  } catch (err) {
    customLogger.error(`${err}`)
    return {}
  }
}
