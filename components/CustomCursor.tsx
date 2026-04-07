"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.style.cursor === "pointer";

      setIsPointer(!!isClickable);
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener("mousemove", updateCursorPosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  // Não renderizar em dispositivos móveis/touch
  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      setIsHidden(true);
    }
  }, []);

  if (isHidden) return null;

  return (
    <>
      {/* Cursor principal */}
      <div
        className="custom-cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 0.5 : 1})`,
        }}
      />

      {/* Cursor externo/anel */}
      <div
        className="custom-cursor-ring"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      />

      <style jsx>{`
        .custom-cursor-dot {
          position: fixed;
          width: 8px;
          height: 8px;
          background: linear-gradient(135deg, #c9a84c, #e8c97a);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: transform 0.15s ease, opacity 0.15s ease;
          box-shadow: 0 0 12px rgba(201, 168, 76, 0.6);
        }

        .custom-cursor-ring {
          position: fixed;
          width: 32px;
          height: 32px;
          border: 2px solid rgba(201, 168, 76, 0.4);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        @media (max-width: 768px) {
          .custom-cursor-dot,
          .custom-cursor-ring {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
