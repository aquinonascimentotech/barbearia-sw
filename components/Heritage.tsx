"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const milestones = [
  {
    year: "2016",
    title: "Fundação da Barbearia SW",
    description: "Nascemos com a missão de cuidar da imagem masculina com excelência e dedicação.",
    icon: "🏪",
  },
  {
    year: "2018",
    title: "Expansão da Equipe",
    description: "Crescemos com profissionais especializados e comprometidos com a qualidade.",
    icon: "👥",
  },
  {
    year: "2020",
    title: "Modernização Completa",
    description: "Investimento em equipamentos de última geração e produtos premium.",
    icon: "✨",
  },
  {
    year: "2024",
    title: "Referência em Uberlândia",
    description: "Reconhecidos como uma das melhores barbearias da região, com +5000 clientes atendidos.",
    icon: "🏆",
  },
];

function TimelineItem({ milestone, index }: { milestone: typeof milestones[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 200);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [index]);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-center gap-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
    >
      {/* Content Card */}
      <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"} text-left`}>
        <div
          className="relative p-6 rounded-2xl group cursor-pointer"
          style={{
            background: "linear-gradient(135deg, rgba(17,17,17,0.95) 0%, rgba(26,26,26,0.95) 100%)",
            border: "1px solid rgba(201,168,76,0.2)",
            backdropFilter: "blur(10px)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(201,168,76,0.6)";
            e.currentTarget.style.transform = "scale(1.03)";
            e.currentTarget.style.boxShadow = "0 12px 40px rgba(201,168,76,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)";
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <div className="text-3xl mb-3">{milestone.icon}</div>
          <h3
            className="text-xl font-bold mb-2"
            style={{
              background: "linear-gradient(135deg, #c9a84c 0%, #f0d980 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {milestone.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">{milestone.description}</p>
        </div>
      </div>

      {/* Year Badge */}
      <div className="relative z-10 flex-shrink-0">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center font-black text-base relative"
          style={{
            background: "linear-gradient(135deg, #c9a84c 0%, #e8c97a 100%)",
            color: "#0a0a0a",
            boxShadow: "0 8px 24px rgba(201,168,76,0.4), inset 0 2px 8px rgba(255,255,255,0.2)",
          }}
        >
          {milestone.year}
          {/* Glow effect */}
          <div
            className="absolute inset-0 rounded-full animate-pulse"
            style={{
              background: "radial-gradient(circle, rgba(201,168,76,0.6), transparent)",
              filter: "blur(8px)",
              zIndex: -1,
            }}
          />
        </div>
      </div>

      {/* Empty space for layout */}
      <div className="flex-1 hidden md:block" />
    </div>
  );
}

export default function Heritage() {
  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute top-1/4 left-0 w-96 h-96 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #c9a84c, transparent)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #e8c97a, transparent)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <Reveal className="text-center mb-20">
          <span
            className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-widest"
            style={{
              background: "rgba(201,168,76,0.1)",
              color: "#c9a84c",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            Nossa História
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            Desde{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #c9a84c 0%, #f0d980 50%, #c9a84c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              2016
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Uma jornada de dedicação, evolução e compromisso com a excelência no cuidado masculino.
          </p>
        </Reveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 hidden md:block"
            style={{
              background: "linear-gradient(180deg, transparent, rgba(201,168,76,0.5) 20%, rgba(201,168,76,0.5) 80%, transparent)",
              transform: "translateX(-50%)",
            }}
          />

          {/* Timeline Items */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <TimelineItem key={index} milestone={milestone} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
