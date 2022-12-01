import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { Providers } from "../providers";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
      <Script
        src="https://widget.cloudinary.com/v2.0/global/all.js"
        type="text/javascript"
      />
      <ToastContainer position="top-center" />
    </Providers>
  );
}
