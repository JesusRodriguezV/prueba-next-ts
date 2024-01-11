/**
 * Clase para retornar un error con atributos utilizables para el manejado de errores
 *
 * @export
 * @class CustomError
 * @extends {Error}
 */
export default class CustomError extends Error {
  public statusCode: string

  constructor(error: Error, statusCode: string) {
    super(error.message)
    this.name = error.name
    this.statusCode = statusCode
    this.message = error.message
    Error.captureStackTrace(this)
  }
}
