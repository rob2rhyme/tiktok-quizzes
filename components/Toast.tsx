// components/Toast.tsx
import { useEffect } from "react";

type ToastProps = {
  message: string;
  onClose: () => void;
};

export default function Toast({ message, onClose }: ToastProps) {
  useEffect(() => {
    const timeout = setTimeout(onClose, 2500);
    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "4.5rem", // ⬆️ Raised from bottom for visibility
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "#111",
        color: "#fff",
        padding: "0.75rem 1.5rem",
        borderRadius: "0.5rem",
        boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
        fontSize: "0.9rem",
        zIndex: 9999,
        maxWidth: "90%",
        textAlign: "center",
      }}
    >
      {message}
    </div>
  );
}
