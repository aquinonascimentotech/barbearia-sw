"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const transformations = [
  {
    id: 1,
    image: "/images/before-after-1.jpeg",
    style: "Transformação Completa",
  },
  {
    id: 2,
    image: "/images/before-after-2.jpeg",
    style: "Corte + Barba Premium",
  },
  {
    id: 3,
    image: "/images/work-1.jpg",
    style: "Resultado Profissional",
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

        {/* Transformation Image Display */}
        <div className="max-w-2xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-[#c9a84c]/30">
            <img
              src={transformations[active].image}
              alt={transformations[active].style}
              className="w-full h-auto object-cover"
            />
            <div
              className="absolute top-4 left-4 px-4 py-2 rounded-full text-sm font-bold text-black backdrop-blur-sm"
              style={{ background: "linear-gradient(135deg, #c9a84c, #e8c97a)" }}
            >
              {transformations[active].style}
            </div>
          </div>
        </div>

        {/* Note about Instagram */}
        <p className="text-center text-gray-500 text-sm mt-8">
          📸 Veja mais transformações no nosso{" "}
          <a
            href="https://instagram.com/barbearia.sw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c9a84c] hover:underline font-semibold"
          >
            Instagram @barbearia.sw
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
