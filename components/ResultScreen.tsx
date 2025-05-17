// components/ResultScreen

import { useEffect, useState } from "react";
import styles from "../styles/Quiz.module.css";
import { saveQuizResult } from "../firebase/saveResult";
import { analytics } from "../firebase/firebase";
import { logEvent } from "firebase/analytics";
import ShareButton from "./ShareButton";
import Disclaimer from "./Disclaimer";
import Shimmer from "./Shimmer";
import { matchAnswers } from "../utils/scoring";

type ResultID =
  | "cozy"
  | "chaos"
  | "chill"
  | "soulful"
  | "hero"
  | "main"
  | "fairy"
  | "meme";

const resultProfiles: Record<
  ResultID,
  {
    type: string;
    celebrity: string;
    suggestion: string;
    image: string;
  }
> = {
  cozy: {
    type: "The Cozy Couch Philosopher",
    celebrity: "Keanu Reeves",
    image: "/images/keanu.png",
    suggestion:
      "Your thoughts run deep. Share them — quiet strength is powerful.",
  },
  chaos: {
    type: "The Chaos Charmer",
    celebrity: "Jack Black",
    image: "/images/jackblack.jpeg",
    suggestion: "You light up rooms. Recharge often, chaos king/queen!",
  },
  chill: {
    type: "The Chill Nerd",
    celebrity: "Emma Watson",
    image: "/images/emmawatson.webp",
    suggestion: "Balance fun with your big brain energy. You're unstoppable.",
  },
  soulful: {
    type: "The Soulful Creator",
    celebrity: "Zendaya",
    image: "/images/zendaya.png",
    suggestion:
      "Quiet elegance and mystery — your art speaks louder than words.",
  },
  hero: {
    type: "The Low-Key Hero",
    celebrity: "Simu Liu",
    image: "/images/simuliu.png",
    suggestion:
      "You do good quietly. Keep being the friend everyone relies on.",
  },
  main: {
    type: "The Main Character Moment",
    celebrity: "Rihanna",
    image: "/images/rihanna.png",
    suggestion: "Bold, brilliant, unforgettable. Keep leading the scene.",
  },
  fairy: {
    type: "The Soft Chaos Fairy",
    celebrity: "Pedro Pascal",
    image: "/images/pedropascal.jpeg",
    suggestion:
      "Lovable and chaotic. You’re the plot twist we didn’t know we needed.",
  },
  meme: {
    type: "The Mindful Meme Lord",
    celebrity: "Tan France",
    image: "/images/tanfrance.png",
    suggestion: "You blend humor and wisdom like nobody else. Legendary.",
  },
};

export default function ResultScreen({ answers }: { answers: string[] }) {
  const [result, setResult] = useState<typeof resultProfiles.cozy | null>(null);

  useEffect(() => {
    const id = matchAnswers(answers);
    const profile = resultProfiles[id];
    setResult(profile);

    // Save to Firestore
    saveQuizResult({
      personalityType: profile.type,
      celebrity: profile.celebrity,
      suggestion: profile.suggestion,
      answers,
    });

    // Log to Analytics
    if (analytics) {
      logEvent(analytics, "quiz_completed", {
        personalityType: profile.type,
        celebrity: profile.celebrity,
      });
    }
  }, [answers]);

  if (!result) return <Shimmer />;

  return (
    <div className={`${styles.container} ${styles.fadeIn}`}>
      <h2>
        🎉 You are: <strong>{result.type}</strong>
      </h2>
      <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
        Your celebrity twin is <strong>{result.celebrity}</strong>.
      </p>
      <img
        src={result.image}
        alt={result.celebrity}
        style={{
          marginTop: "2rem",
          width: "100%",
          maxWidth: "400px",
          borderRadius: "1rem",
          objectFit: "cover",
        }}
        onError={(e) => {
          (e.target as HTMLImageElement).src = "/images/fallback.jpg";
        }}
      />
      <p style={{ marginTop: "1.5rem", fontStyle: "italic" }}>
        {result.suggestion}
      </p>

      <ShareButton
        text={`I'm ${result.type} like ${result.celebrity}! Take the quiz 👉`}
      />
      <Disclaimer />

      {/* <div
        style={{
          marginTop: "3rem",
          backgroundColor: "#f8f8f8",
          padding: "1.5rem",
          borderRadius: "1rem",
          textAlign: "center",
          boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
        }}
      >
        <h3 style={{ marginBottom: "0.75rem" }}>🔁 Discover More Fun</h3>
        <p style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>
          Curious what other vibe you could be? Try another quiz and unlock your
          alternate personality!
        </p>
        <a
          href="/quizzes"
          style={{
            display: "inline-block",
            backgroundColor: "#111",
            color: "#fff",
            padding: "0.75rem 1.25rem",
            borderRadius: "0.5rem",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          🚀 Explore All Quizzes
        </a>
      </div> */}

      <div style={{ marginTop: "3rem", textAlign: "center" }}>
        <h3 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
          🎯 More Fun Awaits
        </h3>
        <p style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>
          Curious what other vibe you could be? Try another quiz and unlock your
          alternate personality!
        </p>
        <a
          href="/quizzes"
          style={{
            backgroundColor: "#111",
            color: "#fff",
            padding: "0.75rem 1.5rem",
            borderRadius: "0.5rem",
            fontWeight: "bold",
            textDecoration: "none",
            display: "inline-block",
            transition: "background 0.3s ease",
          }}
        >
          🚀 Explore All Quizzes
        </a>
      </div>
    </div>
  );
}
