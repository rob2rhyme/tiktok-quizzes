import Head from "next/head";
import QuizCard from "../components/QuizCard";

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
