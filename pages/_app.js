import '../styles/globals.css'
import '../styles/applications.scss'

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700;900&display=swap" rel="stylesheet" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
      </>
  );
}
export default MyApp;