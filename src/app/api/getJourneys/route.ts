import serviceGetDataJourneys from "@services/back/serviceGetDataJourneys"
import middleware from "@src/middlewares"

const { GET, POST } = middleware(async (req: Request) => {
  const params = await req.json()

  const { findDataByValue } = await serviceGetDataJourneys(req, params)

  return findDataByValue
})

export { GET, POST }
