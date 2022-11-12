import { Platform } from "react-native"
export const textCamelcaseSeparation = (name: string) => {
  return name
    .split(/(?=[A-Z])/)
    .join()
    .replace(",", " ")
}

/**
 * Format Currency
 */
export const formatCurrency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
})

const { OS } = Platform

export const ANDROID = OS === "android"
export const IOS = OS === "ios"
