// pages/result.tsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ResultScreen from "../components/ResultScreen";

export default function ResultPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<string[] | null>(null);

  useEffect(() => {
    if (router.query.answers) {
      try {
        const parsed = JSON.parse(router.query.answers as string);
        setAnswers(parsed);
      } catch (err) {
        console.error("Failed to parse answers.");
      }
    }
  }, [router.query]);

  if (!answers) return <p>Loading result...</p>;

  return <ResultScreen answers={answers} />;
}
