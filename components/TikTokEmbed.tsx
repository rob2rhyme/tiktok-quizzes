import { useEffect } from "react";

export default function TikTokEmbed({
  videoId,
  username,
}: {
  videoId: string;
  username: string;
}) {
  useEffect(() => {
    const scriptId = "tiktok-embed-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <blockquote
      className="tiktok-embed"
      cite={`https://www.tiktok.com/@${username}/video/${videoId}`}
      data-video-id={videoId}
      style={{ marginTop: "2rem", maxWidth: "400px", marginInline: "auto" }}
    >
      <section>Loading TikTok…</section>
    </blockquote>
  );
}
