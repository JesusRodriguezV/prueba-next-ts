export const JWT_ENCRYPTION_SECRET_KEY =
  process.env.JWT_ENCRYPTION_SECRET_KEY || "THIS_IS_MY_SECRET_KEY"

export const DOMAIN_URL = process.env.DOMAIN_URL || ""

export const API_URL_GET_JOURNEY =
  process.env.API_URL_GET_JOURNEY || "not-found"

export const TOKEN = process.env.TOKEN || ""

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ""
export const NUMBER_OF_INPUTS = process.env.NEXT_PUBLIC_NUMBER_OF_INPUTS
export const URL_REDIRECT_MENU = process.env.NEXT_PUBLIC_REDIRECT_MENU
export const REDIRECT_LOGIN = process.env.NEXT_PUBLIC_URL_REDIRECT_LOGIN
export const TIME_COOKIE_SESSION = process.env.TIME_COOKIE_SESSION

// API para consultar los permisos del usuario
export const API_USER = {
  PERMISSIONS: process.env.API_USER_PERMISSIONS,
}

export const NEXT_PUBLIC_URL_CHATBOT = process.env.NEXT_PUBLIC_URL_CHATBOT
