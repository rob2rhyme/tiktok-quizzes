// components/ShareButton.tsx
import styles from "../styles/Quiz.module.css";

export default function ShareButton({ text }: { text: string }) {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Find your celebrity vibe!",
          text: text,
          url: window.location.href,
        });
      } else {
        alert("Sharing not supported on this device.");
      }
    } catch (error) {
      console.error("Share failed:", error);
    }
  };

  return (
    <button className={styles.button} onClick={handleShare}>
      📤 Share Your Result
    </button>
  );
}
