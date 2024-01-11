/* eslint-disable @typescript-eslint/no-unused-vars */
namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    APP_LOGS_NAME: string
    LOGS_LEVEL: string
    SILENT_LOGS: string
    NEXT_TELEMETRY_DISABLED: number
    NEXTAUTH_SECRET: string
    NEXT_PUBLIC_LANDING_PAGE: string
    NEXT_PUBLIC_TITLE_BAR: string
    TIMEOUT_SESSION_MINUTES: number
    COGNITO_CLIENT_ID: string
    COGNITO_CLIENT_SECRET: string
    COGNITO_ISSUER: string
    NODE_ENV: string
    NEXT_PUBLIC_URL_REDIRECT: string
    NEXT_PUBLIC_BASE_PATH: string
    ID_FLOW_STATE_MACHINE: string
    NEXT_PUBLIC_NUMBER_OF_INPUTS: number
    API_URL_GET_JOURNEY: string
    API_DATA_CONFIG: string
    API_GET_PREVIOUSDATA: string
    API_IS_BLACKLISTED: string
    API_IS_REJECTED: string
    API_IS_ACTIVE: string
    API_IS_WHITELISTED: string
    API_IS_BUYBACK: string
    API_GET_BALANCE_DUE: string
    API_GET_SCORE_TELCEL: string
    API_AUTH_BACK_URL: string
    API_AUTH_BACK_USERNAME_AUTH: string
    API_AUTH_BACK_PASSWORD_AUTH: string
    API_AUTH_BACK_USER: string
    API_AUTH_BACK_SCOPE: string
    API_AUTH_BACK_PASSWORD: string
    URL_REDIRECT_LOGIN: string
    API_VALIDATE_START: string
    NEXT_PUBLIC_REDIRECT_MENU: string
    NEXT_PUBLIC_URL_REDIRECT_LOGIN: string
    NEXT_PUBLIC_LISTA_NEGRA_REDIRECT: string
    API_SURVEY: string
    TIME_COOKIE_SESSION: number
    API_USER_PERMISSIONS: string
    NEXT_PUBLIC_URL_CHATBOT: string
  }
}
