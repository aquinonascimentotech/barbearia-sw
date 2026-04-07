"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

const stats: Stat[] = [
  { value: 8, label: "Anos de Tradição", prefix: "+", decimals: 0 },
  { value: 5000, label: "Clientes Atendidos", prefix: "+", decimals: 0 },
  { value: 4.9, label: "Avaliação no Google", suffix: "★", decimals: 1 },
  { value: 98, label: "Satisfação dos Clientes", suffix: "%", decimals: 0 },
];

function useCountUp(end: number, duration: number = 2000, decimals: number = 0) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function (easeOutCubic)
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = easeProgress * end;

      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return { count, ref };
}

function StatCard({ stat }: { stat: Stat }) {
  const { count, ref } = useCountUp(stat.value, 2500, stat.decimals || 0);

  return (
    <div
      ref={ref}
      className="relative group"
      style={{
        background: "linear-gradient(135deg, rgba(17,17,17,0.9) 0%, rgba(26,26,26,0.9) 100%)",
        border: "1px solid rgba(201,168,76,0.1)",
        borderRadius: "1.5rem",
        padding: "2rem 1.5rem",
        backdropFilter: "blur(10px)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)";
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(201,168,76,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(201,168,76,0.1)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Animated border gradient */}
      <div
        className="absolute inset-0 rounded-[1.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(135deg, rgba(201,168,76,0.1), rgba(232,201,122,0.1))",
          padding: "1px",
          zIndex: -1,
        }}
      />

      <div className="text-center">
        <div
          className="text-4xl md:text-5xl font-black mb-3"
          style={{
            background: "linear-gradient(135deg, #c9a84c 0%, #f0d980 50%, #c9a84c 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {stat.prefix || ""}
          {count.toFixed(stat.decimals || 0)}
          {stat.suffix || ""}
        </div>
        <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">
          {stat.label}
        </div>
      </div>

      {/* Decorative element */}
      <div
        className="absolute -top-2 -right-2 w-12 h-12 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"
        style={{
          background: "radial-gradient(circle, #c9a84c, transparent)",
          filter: "blur(12px)",
        }}
      />
    </div>
  );
}

export default function AnimatedStats() {
  return (
    <section className="py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(201,168,76,0.4) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
