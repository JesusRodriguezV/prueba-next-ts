import { AppProps } from "next/app"

const ErrorComponent = ({ Component, ...pageProps }: AppProps) => {
  try {
    return <Component {...pageProps} />
  } catch (error) {
    return <div>{JSON.stringify(error)}</div>
  }
}

export default ErrorComponent
