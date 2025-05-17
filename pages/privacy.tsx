//pages/privacy.tsx

import { useRouter } from "next/router";

export default function PrivacyPolicy() {
  const router = useRouter();

  return (
    <main style={{ maxWidth: "600px", margin: "2rem auto", padding: "1rem" }}>
      {/* Back button */}
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
      <p>
        <strong>Last updated:</strong> May 16, 2025
      </p>

      <h2>1. Introduction</h2>
      <p>
        Welcome to the <strong>TikTok Personality Quiz App</strong> ("we",
        "our", or "us"). Your privacy is important to us. This Privacy Policy
        explains how we collect, use, store, and protect your information when
        you use our website and quiz features.
      </p>

      <h2>2. What Information We Collect</h2>
      <ul>
        <li>
          <strong>Quiz responses</strong> (used only to determine your result)
        </li>
        <li>
          <strong>Analytics data</strong> such as device type, browser, time
          spent, and navigation behavior (collected anonymously via Firebase
          Analytics)
        </li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Display your quiz result</li>
        <li>Improve the user experience through anonymous analytics</li>
      </ul>
      <p>
        We do <strong>not</strong> sell, rent, or trade your personal
        information. We do <strong>not</strong> collect your name, email
        address, or other identifiable personal data.
      </p>

      <h2>4. Cookies and Analytics</h2>
      <p>Our app uses:</p>
      <ul>
        <li>
          <strong>Cookies</strong> to improve performance and remember user
          actions
        </li>
        <li>
          <strong>Firebase Analytics</strong> to understand traffic patterns and
          improve content
        </li>
      </ul>

      <h2>5. Data Storage and Security</h2>
      <p>
        We use <strong>Firebase</strong> to store quiz-related data securely.
        All information is protected by modern encryption and access control
        practices.
      </p>

      <h2>6. Children's Privacy</h2>
      <p>
        This quiz is designed for a general audience. We do not knowingly
        collect data from children under 13. If you believe we have
        inadvertently done so, please contact us.
      </p>

      <h2>7. Your Rights</h2>
      <p>
        You may request deletion of any data linked to your session or quiz
        responses by contacting us.
      </p>

      <h2>8. Changes to This Policy</h2>
      <p>
        We may update this policy from time to time. Updates will be posted on
        this page with the date of the latest revision.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        If you have questions about this policy, please reach out to:
        <br />
        📧 <strong>nncpae@gmail.com</strong>
        <br />
        🌐{" "}
        <a
          href="https://tiktok-quizzes.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://tiktok-quizzes.vercel.app
        </a>
      </p>
    </main>
  );
}
