import * as winston from "winston"

const appName = process.env.APP_LOGS_NAME
const { combine, timestamp, label, printf } = winston.format

const consoleFormat = printf(
  ({ level, message, label: _label, timestamp: _timestamp }) => {
    return `${_label} [${_timestamp}] [${level.toUpperCase()}]: ${message}`
  }
)

const logsLevel = process.env.LOGS_LEVEL as string
const silentLogs = process.env.SILENT_LOGS === "true"

const logger = winston.createLogger({
  level: logsLevel,
  format: combine(
    label({ label: appName }),
    timestamp(),
    winston.format.splat(),
    consoleFormat
  ),
  silent: silentLogs,
  transports: [new winston.transports.Console()],
})

export default logger
