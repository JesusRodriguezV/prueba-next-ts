import { setLocale } from "yup"
import i18n from "i18next"

setLocale({
  mixed: {
    default: () => i18n.t("validationMessages.mixed.required"),
    required: () => i18n.t("validationMessages.mixed.required"),
    notType: () => i18n.t("validationMessages.mixed.notType"),
  },
  number: {
    min: ({ min }) => i18n.t("validationMessages.number.min", { min }),
    max: ({ max }) => i18n.t("validationMessages.number.max", { max }),
    lessThan: ({ less }) =>
      i18n.t("validationMessages.number.lessThan", { less }),
    moreThan: ({ more }) =>
      i18n.t("validationMessages.number.moreThan", { more }),
    positive: () => i18n.t("validationMessages.number.positive"),
    negative: () => i18n.t("validationMessages.number.negative"),
    integer: () => i18n.t("validationMessages.number.integer"),
  },
  string: {
    length: ({ length }) =>
      i18n.t("validationMessages.string.length", { length }),
    min: ({ min }) => i18n.t("validationMessages.string.min", { min }),
    max: ({ max }) => i18n.t("validationMessages.string.max", { max }),
    email: () => i18n.t("validationMessages.string.email"),
    url: () => i18n.t("validationMessages.string.url"),
    trim: () => i18n.t("validationMessages.string.trim"),
  },
  date: {
    min: ({ min }) => i18n.t("validationMessages.mixed.min", { min }),
    max: ({ max }) => i18n.t("validationMessages.mixed.max", { max }),
  },
  array: {
    min: ({ min }) => i18n.t("validationMessages.mixed.min", { min }),
    max: ({ max }) => i18n.t("validationMessages.mixed.max", { max }),
    length: ({ length }) =>
      i18n.t("validationMessages.mixed.length", { length }),
  },
})
