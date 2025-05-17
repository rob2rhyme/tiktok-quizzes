//pages/privacy.tsx

import { color } from "html2canvas/dist/types/css/types/color";
import { useRouter } from "next/router";

export default function PrivacyPolicy() {
  const router = useRouter();

  return (
    <main style={{ maxWidth: "600px", margin: "2rem auto", padding: "1rem" }}>
      <button
        onClick={() => router.back()}
        style={{
          marginBottom: "1.5rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#eee",
          border: "1px solid #ccc",
          borderRadius: "0.5rem",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      <h1>Privacy Policy</h1>
      <p><strong>Last updated:</strong> May 17, 2025</p>

      <h2>1. Introduction</h2>
      <p>
        Welcome to <strong>Quizzes App</strong> ("we", "our", or "us"). This Privacy Policy
        explains how we collect, use, store, and protect your information across our platform,
        which may include personality quizzes, educational assessments, and entertainment tools.
      </p>

      <h2>2. What Information We Collect</h2>
      <ul>
        <li><strong>Session data</strong> (e.g., time on site, quiz progress)</li>
        <li><strong>Quiz responses</strong> (used to calculate and display results)</li>
        <li><strong>Anonymous analytics</strong> data collected through Firebase Analytics</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <ul>
        <li>To provide your quiz results or feedback</li>
        <li>To improve site experience and performance</li>
        <li>To understand overall usage trends (via anonymous analytics)</li>
      </ul>
      <p>
        We do <strong>not</strong> collect personally identifiable information (PII) like your name,
        email, or address unless explicitly requested and consented to.
      </p>

      <h2>4. Cookies and Analytics</h2>
      <p>We use cookies and Firebase Analytics to:</p>
      <ul>
        <li>Track quiz completion rates</li>
        <li>Measure how users interact with different quizzes</li>
        <li>Improve quiz design and accessibility</li>
      </ul>

      <h2>5. Data Security</h2>
      <p>
        All data is stored securely using Firebase services with industry-standard encryption.
        We restrict access to data to authorized personnel only.
      </p>

      <h2>6. Children's Privacy</h2>
      <p>
        This platform is designed for general audiences. We do not knowingly collect personal data
        from children under 13 without parental consent. If you are a parent and believe this has occurred,
        please contact us immediately.
      </p>

      <h2>7. Your Rights</h2>
      <p>
        You may request access to or deletion of any quiz-related data by contacting us directly.
      </p>

      <h2>8. Changes to This Policy</h2>
      <p>
        We may update this policy as our platform evolves. Revisions will be posted here with updated dates.
      </p>

      <h2>9. Contact</h2>
      <p>
        Questions or concerns? Reach us at:
        <br />
        📧 <strong style={{ color: "#ff2d55" }}>nncpae@gmail.com</strong>
        <br />
        🌐 <a href="https://tiktok-quizzes.vercel.app" target="_blank" rel="noopener noreferrer">
          https://tiktok-quizzes.vercel.app</a>
      </p>
    </main>
  );
}
