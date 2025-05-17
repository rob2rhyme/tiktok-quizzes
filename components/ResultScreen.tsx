// components/ResultScreen

import { useEffect, useState, useRef } from "react";
import html2canvas from "html2canvas";
import styles from "../styles/Quiz.module.css";
import { saveQuizResult } from "../firebase/saveResult";
import { analytics } from "../firebase/firebase";
import { logEvent } from "firebase/analytics";
import ShareButton from "./ShareButton";
import Disclaimer from "./Disclaimer";
import Shimmer from "./Shimmer";
import { matchAnswers } from "../utils/scoring";
import Toast from "./Toast"; // ✅ New toast component

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
  const [toast, setToast] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const isIOS =
    typeof window !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  useEffect(() => {
    const id = matchAnswers(answers);
    const profile = resultProfiles[id];
    setResult(profile);

    saveQuizResult({
      personalityType: profile.type,
      celebrity: profile.celebrity,
      suggestion: profile.suggestion,
      answers,
    });

    if (analytics) {
      logEvent(analytics, "quiz_completed", {
        personalityType: profile.type,
        celebrity: profile.celebrity,
      });
    }
  }, [answers]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        `I got "${result?.type}" like ${result?.celebrity}! 😎 Try it 👉 https://tiktok-quizzes.vercel.app`
      );
      setToast("📋 Result copied to clipboard!");
    } catch (err) {
      console.error("Copy failed", err);
      setToast("⚠️ Failed to copy.");
    }
  };

  const handleDownload = async () => {
    if (!cardRef.current) return;

    try {
      const canvas = await html2canvas(cardRef.current);
      const image = canvas.toDataURL("image/png");

      if (isIOS) {
        const win = window.open();
        if (win) {
          win.document.write(`<img src="${image}" style="width:100%;" />`);
          setToast("🧠 Tap and hold the image to save.");
        } else {
          setToast("⚠️ Please allow popups to view the image.");
        }
      } else {
        const link = document.createElement("a");
        link.download = "quiz-result.png";
        link.href = image;
        link.click();
        setToast("✅ Image downloaded!");
      }
    } catch (err) {
      console.error("Download failed", err);
      setToast("⚠️ Download failed.");
    }
  };

  if (!result) return <Shimmer />;

  return (
    <div className={`${styles.container} ${styles.fadeIn}`}>
      <div
        ref={cardRef}
        style={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "1.5rem",
          borderRadius: "1rem",
          maxWidth: "420px",
          margin: "0 auto",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        }}
      >
        <h2>
          🎉 You are:{" "}
          <strong style={{ color: "#ff0050" }}>{result.type}</strong>
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
      </div>

      <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
        <button
          onClick={handleCopy}
          style={{
            backgroundColor: "#ff0050",
            color: "#fff",
            padding: "0.75rem 1.25rem",
            borderRadius: "0.5rem",
            fontWeight: "bold",
            cursor: "pointer",
            border: "none",
            marginRight: "1rem",
          }}
        >
          📋 Copy Result
        </button>

        <button
          onClick={handleDownload}
          style={{
            backgroundColor: "#00f2ea",
            color: "#000",
            padding: "0.75rem 1.25rem",
            borderRadius: "0.5rem",
            fontWeight: "bold",
            cursor: "pointer",
            border: "none",
          }}
        >
          ⬇️ Download Image
        </button>
      </div>

      <ShareButton
        text={`I got "${result.type}" like ${result.celebrity} 😎 Try it 👉 https://tiktok-quizzes.vercel.app`}
      />

      <Disclaimer />

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

      {/* ✅ Toast Message */}
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  );
}
