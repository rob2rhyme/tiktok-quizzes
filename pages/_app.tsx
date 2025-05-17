// pages/_app.tsx
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css"; // <-- If you have global styles

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>TikTok Personality Quiz</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Google Fonts link (optional) */}
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
