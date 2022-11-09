import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import type { AppProps } from "next/app";
import Dashboard from "../layouts/Dashboard";
import { SSRProvider } from "react-bootstrap";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Dashboard>
        <Component {...pageProps} />
      </Dashboard>
    </SSRProvider>
  );
}

export default MyApp;
