//pages/index.tsx

import Head from "next/head";
import dynamic from "next/dynamic";

// Dynamically import QuizCard with SSR disabled
const QuizCard = dynamic(() => import("../components/QuizCard"), {
  ssr: false,
  loading: () => (
    <p style={{ textAlign: "center", fontSize: "1rem", padding: "2rem" }}>
      Loading your quiz...
    </p>
  ),
});

export default function Home() {
  return (
    <>
      <Head>
        <title>TikTok Personality Quiz</title>
        <meta
          name="description"
          content="Find your vibe. Discover your celebrity twin. Only on TikTok."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ padding: "2rem" }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "2rem",
            marginBottom: "1.5rem",
          }}
        >
          ✨ What Kind of Vibe Are You? ✨
        </h1>

        <QuizCard />
      </main>
    </>
  );
}
