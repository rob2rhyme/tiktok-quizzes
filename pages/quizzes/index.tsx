//pages/quizzes/index.tsx

import Head from "next/head";
import Link from "next/link";

export default function QuizHub() {
  return (
    <>
      <Head>
        <title>All Quizzes | Quiz Hub</title>
      </Head>
      <main style={{ maxWidth: "600px", margin: "2rem auto", padding: "1rem" }}>
        <h1 style={{ textAlign: "center" }}>🧠 Explore Our Quizzes</h1>
        <p style={{ textAlign: "center", marginBottom: "2rem" }}>
          More personality quizzes coming soon. For now, try our first:
        </p>

        <div
          style={{
            background: "#f5f5f5",
            borderRadius: "1rem",
            padding: "1.5rem",
            textAlign: "center",
          }}
        >
          <Link href="/" passHref>
            <img
              src="/images/quiz-preview.jpg"
              alt="TikTok Personality Quiz"
              style={{
                width: "100%",
                borderRadius: "0.75rem",
                marginBottom: "1rem",
              }}
            />
          </Link>
          <h2>TikTok Personality Quiz</h2>
          <p>Which celebrity vibe matches yours? Find out in 90 seconds!</p>
          <Link
            href="/"
            style={{
              marginTop: "1rem",
              display: "inline-block",
              backgroundColor: "#000",
              color: "#fff",
              padding: "0.5rem 1.25rem",
              borderRadius: "0.5rem",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            🎯 Take the Quiz
          </Link>
        </div>
      </main>
    </>
  );
}
