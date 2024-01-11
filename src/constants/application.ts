export enum MIN_MAX {
  minNum = 10,
  maxNum = 999999999999999,
}
export enum MIN_MAX_STN {
  minNum = 2,
  maxNum = 15,
  minFolio = 3,
  maxFolio = 20,
  minCharacters = 2,
  maxCurp = 18,
  maxRfc = 10,
  maxInputs = 20,
  maxPhone = 10,
}

export const MIN_WEEK = 1
export const MAX_WEEK = 53

export enum wareTypes {
  CEDIS = "CEDIS",
  CENTRO = "CENTRO",
}

export enum stockTypes {
  EQ = "EQ",
  BT = "BT",
}

export const USER_STATUS = {
  AUTHENTICATED: "authenticated",
  UNAUTHENTICATED: "unauthenticated",
} as const

export enum TIMEOUT {
  DEBOUNCE_TIME = 1000,
}
