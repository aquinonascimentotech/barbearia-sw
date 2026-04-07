"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const transformations = [
  {
    id: 1,
    before: {
      bg: "from-gray-700 to-gray-800",
      label: "Antes",
      description: "Cabelo crescido, barba por fazer",
    },
    after: {
      bg: "from-[#c9a84c]/30 to-[#1a1a1a]",
      label: "Depois",
      description: "Corte fade + barba degradê",
    },
    style: "Fade + Barba",
  },
  {
    id: 2,
    before: {
      bg: "from-gray-700 to-gray-800",
      label: "Antes",
      description: "Cabelo despenteado, sem forma",
    },
    after: {
      bg: "from-[#c9a84c]/30 to-[#1a1a1a]",
      label: "Depois",
      description: "Undercut moderno",
    },
    style: "Undercut Clássico",
  },
  {
    id: 3,
    before: {
      bg: "from-gray-700 to-gray-800",
      label: "Antes",
      description: "Barba irregular e sem definição",
    },
    after: {
      bg: "from-[#c9a84c]/30 to-[#1a1a1a]",
      label: "Depois",
      description: "Barba modelada e hidratada",
    },
    style: "Barba Premium",
  },
];

export default function BeforeAfter() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="transformacoes"
      className="py-24 px-4 sm:px-6"
      style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #0f0f0f 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Reveal className="text-center mb-16">
          <span
            className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-widest"
            style={{
              background: "rgba(201,168,76,0.1)",
              color: "#c9a84c",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            Transformações Reais
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Veja a diferença que{" "}
            <span className="gold-gradient-text">fazemos</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Resultados reais de clientes reais. Antes e depois que falam por si
            mesmos.
          </p>
        </Reveal>

        <hr className="section-gold-line mb-16" />

        {/* Style tabs */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {transformations.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                active === i
                  ? "text-black"
                  : "border border-[#1e1e1e] text-gray-400 hover:border-[#c9a84c]/40 hover:text-[#c9a84c]"
              }`}
              style={
                active === i
                  ? { background: "linear-gradient(135deg, #c9a84c, #e8c97a)" }
                  : {}
              }
            >
              {t.style}
            </button>
          ))}
        </div>

        {/* Before / After display */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Before */}
          <div className="relative rounded-2xl overflow-hidden border border-[#1e1e1e]">
            <div
              className={`w-full h-72 bg-gradient-to-br ${transformations[active].before.bg} flex items-center justify-center`}
            >
              <div className="text-center">
                <div className="text-6xl mb-3 opacity-50">👤</div>
                <div className="text-gray-400 text-sm px-6 text-center">
                  {transformations[active].before.description}
                </div>
              </div>
            </div>
            <div className="absolute top-4 left-4 bg-red-500/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white">
              ANTES
            </div>
          </div>

          {/* After */}
          <div className="relative rounded-2xl overflow-hidden border border-[#c9a84c]/30">
            <div
              className={`w-full h-72 bg-gradient-to-br ${transformations[active].after.bg} flex items-center justify-center`}
            >
              <div className="text-center">
                <div className="text-6xl mb-3">✂️</div>
                <div className="text-[#c9a84c] font-semibold text-sm px-6 text-center">
                  {transformations[active].after.description}
                </div>
              </div>
            </div>
            <div
              className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-black"
              style={{ background: "linear-gradient(135deg, #c9a84c, #e8c97a)" }}
            >
              DEPOIS
            </div>
          </div>
        </div>

        {/* Note about real photos */}
        <p className="text-center text-gray-600 text-xs mt-6">
          * Fotos reais disponíveis no Instagram{" "}
          <a
            href="https://instagram.com/barbearia.sw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c9a84c] hover:underline"
          >
            @barbearia.sw
          </a>
        </p>

        {/* CTA */}
        <Reveal className="text-center mt-10" delay={100}>
          <a
            href="#agendamento"
            className="btn-gold inline-flex items-center gap-2 rounded-full px-10 py-4 text-base"
          >
            Quero minha transformação →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
