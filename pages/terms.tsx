//pages/terms.tsx

import { useRouter } from "next/router";

export default function TermsOfService() {
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

            <h1>Terms of Service</h1>
            <p><strong>Effective Date:</strong> May 17, 2025</p>

            <h2>1. Acceptance of Terms</h2>
            <p>
                By accessing or using the Quizzes App platform, you agree to be bound by these Terms of Service and
                our Privacy Policy.
            </p>

            <h2>2. Description of Service</h2>
            <p>
                Quizzes App offers web-based interactive experiences, including personality quizzes, learning tools,
                and engagement content.
            </p>

            <h2>3. User Conduct</h2>
            <ul>
                <li>You may not use the service for any unlawful or harmful purpose.</li>
                <li>Do not attempt to disrupt the functionality of the app or misuse its data.</li>
                <li>You may not impersonate others or falsely represent affiliation with any person or entity.</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
                All quizzes, branding, and content are owned by Quizzes App unless otherwise credited.
                You may not duplicate or redistribute any content without permission.
            </p>

            <h2>5. Disclaimer</h2>
            <p>
                All quiz results are for entertainment or educational purposes only. They do not reflect psychological,
                medical, or professional evaluations.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
                We are not liable for any damages arising from your use of this service. Use it at your own discretion.
            </p>

            <h2>7. Modifications to Terms</h2>
            <p>
                We may revise these terms from time to time. Continued use of the platform implies acceptance of updates.
            </p>

            <h2>8. Contact</h2>
            <p>
                Questions? Contact us at:
                <br />
                📧 <strong style={{ color: "#ff2d55" }}>nncpae@gmail.com</strong>
            </p>
        </main>
    );
}
