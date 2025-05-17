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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Take the TikTok Personality Quiz to find your celebrity twin. Fun, fast, and for everyone!"
        />
        <meta property="og:title" content="TikTok Personality Quiz" />
        <meta
          property="og:description"
          content="Which celebrity vibe matches you? Take this viral TikTok quiz!"
        />
        <meta
          property="og:image"
          content="https://tiktok-quizzes.vercel.app/images/quiz-preview.jpg"
        />
        <meta property="og:url" content="https://tiktok-quizzes.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
