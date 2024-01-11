// ---- FE_REQUEST_PATHS_ ----

export const URL_VALIDATE_FLOW = {
  UPDATE_FLOW_MAP_STATE: "/updateFlowMapState",
}

export const URL_HOME = {
  GET_LANDING_DATA: "", //EXAMPLE
}

export const URL_PERSONAL_DATA = {
  SEND_PERSONAL_DATA: "/personalData/getPersonalData",
}

export const URL_CATALOGS = {
  GET_STATES: "/personalData/getStates",
  GET_SCHOLARSHIP: "/personalData/getScholarship",
  GET_MARITAL_STATUS: "/personalData/getMaritalStatus",
  GET_MARITAL_STATUS_SENIORITY: "/personalData/getMaritalStatusSeniority",
  GET_DEPENDENTS_NUMBER: "/personalData/getDependentsNumber",
  GET_OCUPPATION: "/personalData/getOcuppation",
  GET_RESIDENCE_TIME: "/personalData/getResidenceTime",
  GET_HOUSING_TYPE: "/personalData/getHousingType",
  GET_NEXT_PROCESS: "/personalData/getNextProcess",
  GET_ZIP_CODE: "/personalData/getZipCode",
  GET_MATI: "/personalData/getMati",
  GET_CONTINGENCY: "/personalData/getContingency",
  GET_PHONE_CALL: "/personalData/getPhoneCall",
}

export const URL_VALIDATE_PHONE = {
  VALIDATE_PHONE: "/validatePhone/validatePhoneData",
}

export const URL_VALIDATE_SMS_CODE = {
  GET_SMS_CODE: "/validateSms/getSmsCode",
  VALIDATE_SMS_CODE: "/validateSms/validateSmsCode",
}
export const URL_INCODE_DATA = {
  GET_INCODE_VALIDATE: "/incode/getIncodeValidateData",
  GET_PROCESS: "/incode/getProcessCompleteData",
}

export const URL_BLACKLIST = {
  BLACKLIST: "/blackList/blackList",
}

export const URL_TERMINAL = {
  GET_TERMINAL: "/getTerminal",
}

export const URL_COOKIE = {
  GET_COOKIE: "/getCookie",
  SET_COOKIE: "/setCookie",
}

// ---- BE_REQUEST_PATHS_ ----

export const URL_HOME_BACK = {
  GET_INFO: "", //EXAMPLE
}

export const URL_PERSONAL_DATA_BACK = {
  SEND_PERSONAL_DATA: `${process.env.API_SEND_PERSONAL_DATA}`,
  BEARER_TOKEN: `${process.env.API_PERSONAL_DATA_BEARER_TOKEN}`,
  GET_CONTINGENCY: `${process.env.API_GET_CONTINGENCY}`,
  GET_PREVIOUSDATA: process.env.API_GET_PREVIOUSDATA,
  IS_BLACKLISTED: process.env.API_IS_BLACKLISTED,
  IS_REJECTED: process.env.API_IS_REJECTED,
  IS_ACTIVE: process.env.API_IS_ACTIVE,
  IS_WHITELISTED: process.env.API_IS_WHITELISTED,
  IS_BUYBACK: process.env.API_IS_BUYBACK,
  GET_BALANCE_DUE: process.env.API_GET_BALANCE_DUE,
  GET_SCORE_TELCEL: process.env.API_GET_SCORE_TELCEL,
}

export const URL_RETURN_CATALOGS = {
  GET_BACK_CATALOGS: `${process.env.API_PERSONAL_DATA_CATALOGS}`,
  GET_CURP:
    "https://af5v6funo5cclb6ecoep54eq6m.appsync-api.us-east-1.amazonaws.com/graphql",
}

export const URL_INCODE_DATA_BACK = {
  SEND_INCODE_VALIDATE: process.env.API_INCODE_VALIDATE,
}

export const URL_JOURNEY = process.env.API_URL_GET_JOURNEY || ""
export const API_URL_VALIDATE_PHONE = process.env.API_URL_VALIDATE_PHONE || ""
export const API_URL_APPSYNC_SMS = process.env.API_URL_APPSYNC_SMS || ""
export const API_URL_GET_JOURNEY = process.env.API_URL_GET_JOURNEY || ""
export const API_DATA_CONFIG = process.env.API_DATA_CONFIG

export const API_VALIDATE_START = process.env.API_VALIDATE_START

export const API_SURVEY = process.env.API_SURVEY

export const URL_VALIDATE_START = {
  VALIDATE_GET_NEXT_JOURNEY: "/getNextJourney",
  GET_JOURNEY: "/getJourney",
  GET_JOURNEYS: "/getJourneys",
  SEND_CODE: "/sendCode",
  VALIDATE_CODE: "/validateCode",
  FIND_JOURNEY: "/findJourney",
  SEND_SURVEY: "/sendSurvey",
}
