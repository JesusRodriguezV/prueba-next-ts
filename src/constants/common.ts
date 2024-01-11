export const SESSION_STATE_TOKEN_KEY = "session_state_token_key"
export const FLOW_MAP_TOKEN_KEY = "flow_map_token_key"
export const COOKIE_TERMINAL = "terminal"

export const URL_LOGOUT_COGNITO_FRONT = {
  GET_LOGOUT_DATA: "/logout",
}

export const URLS_COGNITO = {
  GET_LOGIN: `${process.env.DOMAIN_URL}/login`,
  GET_LOGOUT: `${process.env.COGNITO_DOMAIN}/logout?response_type=code&client_id=${process.env.COGNITO_CLIENT_ID}&logout_uri=${process.env.DOMAIN_URL}/login`,
}

export const flowStatus: Record<number, string> = {
  0: "Cancelada",
  1: "Incompleta",
  3: "Completa",
}
