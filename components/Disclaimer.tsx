// components/Disclaimer.tsx

import Link from "next/link";

export default function Disclaimer() {
  return (
    <p
      style={{
        fontSize: "0.8rem",
        textAlign: "center",
        color: "#888",
        marginTop: "2rem",
      }}
    >
      ⚠️ This quiz is for <strong>entertainment purposes only</strong> and does
      not reflect real-life personality types. Take it light-heartedly and share
      the fun! Read our{" "}
      <Link href="/privacy" style={{ textDecoration: "underline", color: "#888" }}>
        Privacy Policy
      </Link>{" "}
      and{" "}
      <Link href="/terms" style={{ textDecoration: "underline", color: "#888" }}>
        Terms of Service
      </Link>
      .
    </p>
  );
}
