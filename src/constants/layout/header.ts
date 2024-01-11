import { BASE_PATH } from "@constants/enviroments"
import { ILang } from "@interfaces/layout/header"

export const FLAG_MX = `${BASE_PATH}/mexico-flag-icon.svg`

export const FLAG_USA = `${BASE_PATH}/united-states-flag-icon.svg`

export const ES_VALUES: ILang = {
  src: FLAG_MX,
  alt: "MX",
  text: "ES",
}

export const ENG_VALUES: ILang = {
  src: FLAG_USA,
  alt: "USA",
  text: "ENG",
}
