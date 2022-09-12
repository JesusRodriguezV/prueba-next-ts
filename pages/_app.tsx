import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import type { AppProps } from "next/app";
import Dashboard from "../layouts/Dashboard";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Dashboard>
      <Component {...pageProps} />
    </Dashboard>
  );
}

export default MyApp;
