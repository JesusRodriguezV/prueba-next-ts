import _ from "lodash"

const handlerRequest = async <T = unknown>(req: Request): Promise<T> => {
  const base64 = await req.json()
  try {
    const regex =
      /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/

    if (_.isString(base64) && regex.test(base64)) {
      const json = Buffer.from(base64, "base64").toString()
      const data = JSON.parse(json)
      return data
    }

    return base64
  } catch (error) {
    // console.log("error handleResponse convert to base64")
    return base64
  }
}

export default handlerRequest
