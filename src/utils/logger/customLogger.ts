const appName = process.env.APP_LOGS_NAME
const logsLevel = process.env.LOGS_LEVEL
const silentLogs = process.env.SILENT_LOGS === "true"

enum Level {
  error,
  warn,
  info,
  http,
  verbose,
  debug,
  silly,
}

const consoleFormat = (level: string, message: string[]) => {
  try {
    return `${appName} [${new Date().toISOString()}] [${level.toUpperCase()}]: ${message.reduce(
      (acc, curr) => `${acc} ${curr}`,
      ""
    )}`
  } catch (error) {
    return message
  }
}

const log = (level: Level, message: string[]) => {
  if (level <= Level[logsLevel as keyof typeof Level] && !silentLogs) {
    console.log(consoleFormat(Level[level], message))
  }
}

/**
 * logger para su uso en middlewares donde no funciona el logger de winston
 */

const customLogger = {
  error: (...message: string[]) => log(Level.error, message),
  warn: (...message: string[]) => log(Level.warn, message),
  info: (...message: string[]) => log(Level.info, message),
  http: (...message: string[]) => log(Level.http, message),
  verbose: (...message: string[]) => log(Level.verbose, message),
  debug: (...message: string[]) => log(Level.debug, message),
  silly: (...message: string[]) => log(Level.silly, message),
}

export default customLogger
