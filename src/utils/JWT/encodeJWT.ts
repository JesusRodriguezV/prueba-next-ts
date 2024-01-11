import * as jose from "jose"
import { JWT_ENCRYPTION_SECRET_KEY } from "@constants/enviroments"

const encodeToJWT = async (data: object) => {
  const secret = new TextEncoder().encode(JWT_ENCRYPTION_SECRET_KEY)

  const alg = "HS256"

  const jwt = await new jose.SignJWT({ ...data })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    // .setIssuer("urn:example:issuer")
    // .setAudience("urn:example:audience")
    // .setExpirationTime("2h")
    .sign(secret)

  return jwt
}

export default encodeToJWT
