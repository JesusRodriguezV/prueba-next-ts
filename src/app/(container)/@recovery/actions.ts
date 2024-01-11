"use server"

import serviceGetDataJourneys from "@src/services/back/serviceGetDataJourneys"
import { revalidatePath } from "next/cache"

let filter = ""

export const setFilter = async (
  previousState: { message: string },
  payload: FormData
) => {
  filter = (payload.get("search") as string) || ""
  revalidatePath("/")
  return { message: "ok" }
}

export const getJourneys = async () => {
  try {
    const { findDataByValue } = await serviceGetDataJourneys({ name: filter })
    return findDataByValue.data
  } catch (error) {
    return []
  }
}
