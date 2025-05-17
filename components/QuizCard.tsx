import { useState } from "react";
import styles from "../styles/Quiz.module.css";
import { useRouter } from "next/router";

const questions = [
  {
    question: "What’s your go-to mood on a lazy Sunday?",
    options: [
      "Netflix & snack attack",
      "Planning global domination (or laundry)",
      "Taking nature selfies",
      "Rewriting your existential crisis playlist",
    ],
  },
  {
    question:
      "Your phone is at 1% and you’re nowhere near a charger. What do you do?",
    options: [
      "Panic like it’s the season finale",
      "Calmly accept your fate",
      "Hunt for a power outlet like Indiana Jones",
      "Text your mom “I love you” just in case",
    ],
  },
  {
    question: "What’s your dream superpower?",
    options: [
      "Invisibility (no more awkward convos!)",
      "Reading minds (👀 tea everywhere)",
      "Teleportation (Goodbye, traffic)",
      "Speaking every language (including cat)",
    ],
  },
  {
    question: "Your friend just showed up with a surprise. You say:",
    options: [
      "“Is it food?”",
      "“I KNEW something was coming!”",
      "“You shouldn’t have… but I’m glad you did.”",
      "“What are we running from?”",
    ],
  },
  {
    question: "How do you handle drama?",
    options: [
      "Mute, block, repeat",
      "Grab popcorn",
      "Talk it out calmly",
      "Accidentally become the therapist",
    ],
  },
  {
    question: "Pick your dream vacation:",
    options: [
      "Cabin in the woods with zero WiFi",
      "Solo trip to Tokyo with 5 cameras",
      "Luxury island with 3 besties",
      "Backpacking Europe with strangers",
    ],
  },
  {
    question: "Which quote speaks to your soul?",
    options: [
      "“I’m not lazy, I’m on energy-saving mode.”",
      "“Don’t be eye candy, be soul food.”",
      "“If not now, when?”",
      "“Dance like the WiFi’s gone.”",
    ],
  },
  {
    question: "Your life is a movie. The genre is:",
    options: [
      "Comedy of errors",
      "Indie coming-of-age",
      "Heist thriller",
      "Fantasy epic",
    ],
  },
  {
    question: "What’s your reply when someone asks, “What’s your plan?”",
    options: [
      "“Survive the day.”",
      "“Take over the world, duh.”",
      "“Going with the flow.”",
      "“I’m not even sure where my shoes are.”",
    ],
  },
  {
    question: "How do you want to be remembered?",
    options: [
      "The kind one",
      "The bold trailblazer",
      "The quiet genius",
      "The chaos with a heart",
    ],
  },
];

export default function QuizCard() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const router = useRouter();

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      // Pass answers to result page
      router.push({
        pathname: "/result",
        query: { answers: JSON.stringify(newAnswers) },
      });
    }
  };

  const q = questions[current];

  return (
    <div className={styles.container}>
      <h2>{q.question}</h2>
      {q.options.map((option, idx) => (
        <button
          key={idx}
          className={styles.button}
          onClick={() => handleAnswer(option)}
        >
          {option}
        </button>
      ))}

      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{ width: `${((current + 1) / questions.length) * 100}%` }}
        ></div>
      </div>
      <p style={{ textAlign: "right", fontSize: "0.8rem", color: "#666" }}>
        Question {current + 1} of {questions.length}
      </p>
    </div>
  );
}
