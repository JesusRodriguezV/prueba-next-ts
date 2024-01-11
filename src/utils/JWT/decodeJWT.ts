import * as jose from "jose"
import { JWT_ENCRYPTION_SECRET_KEY } from "@constants/enviroments"

const decodeJWT = async (token: string) => {
  try {
    const secret = new TextEncoder().encode(JWT_ENCRYPTION_SECRET_KEY)
    // const { payload, protectedHeader } = await jose.jwtVerify(token, secret, {
    //   issuer: 'urn:example:issuer',
    //   audience: 'urn:example:audience',
    // })
    const { payload } = await jose.jwtVerify(token, secret)
    return payload
  } catch (error) {
    return {}
  }
}

export default decodeJWT
