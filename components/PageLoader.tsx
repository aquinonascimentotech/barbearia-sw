"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simular progresso de carregamento
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 20;
      });
    }, 150);

    // Esconder loader após animação completa
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
        animation: loading && progress >= 100 ? "fadeOut 0.5s ease forwards" : "none",
      }}
    >
      {/* Logo/Icon Animated */}
      <div className="relative mb-12">
        <div
          className="w-32 h-32 rounded-full flex items-center justify-center p-6 relative"
          style={{
            background: "linear-gradient(135deg, #c9a84c, #e8c97a)",
            boxShadow: "0 20px 60px rgba(201,168,76,0.4)",
            animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }}
        >
          <img
            src="/images/logo.png"
            alt="Barbearia SW"
            className="w-full h-full object-contain"
          />
          {/* Rotating border */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              border: "3px solid transparent",
              borderTopColor: "#c9a84c",
              borderRightColor: "#e8c97a",
              animation: "spin 1.5s linear infinite",
            }}
          />
        </div>

        {/* Glow effect */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(201,168,76,0.4), transparent)",
            filter: "blur(30px)",
            animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }}
        />
      </div>

      {/* Brand Name */}
      <h1
        className="text-3xl font-black mb-8 tracking-wider"
        style={{
          background: "linear-gradient(135deg, #c9a84c 0%, #f0d980 50%, #c9a84c 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          animation: "fadeInUp 0.8s ease forwards",
        }}
      >
        BARBEARIA SW
      </h1>

      {/* Progress Bar */}
      <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden relative">
        <div
          className="h-full rounded-full transition-all duration-300 ease-out"
          style={{
            width: `${Math.min(progress, 100)}%`,
            background: "linear-gradient(90deg, #c9a84c, #e8c97a, #c9a84c)",
            boxShadow: "0 0 12px rgba(201,168,76,0.6)",
          }}
        />
        {/* Shimmer effect */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
            animation: "shimmer 2s infinite",
          }}
        />
      </div>

      {/* Loading Text */}
      <p className="mt-6 text-sm text-gray-500 font-medium tracking-widest uppercase">
        Carregando experiência...
      </p>

      <style jsx>{`
        @keyframes fadeOut {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
