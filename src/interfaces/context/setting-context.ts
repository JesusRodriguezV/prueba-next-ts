import { Dispatch, SetStateAction } from "react"
import { LANGS } from "@constants/langs"

export interface LanguajeState {
  langState: LANGS
  setLangState: Dispatch<SetStateAction<LANGS>>
}
