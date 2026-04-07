"use client";

import { useState } from "react";
import Reveal from "./Reveal";

// Placeholder images - substituir por imagens reais do Instagram/Google
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80",
    alt: "Ambiente Barbearia SW",
    category: "ambiente",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80",
    alt: "Corte de cabelo masculino",
    category: "trabalho",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80",
    alt: "Barba modelada",
    category: "trabalho",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80",
    alt: "Interior da barbearia",
    category: "ambiente",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80",
    alt: "Produtos premium",
    category: "produtos",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=800&q=80",
    alt: "Atendimento personalizado",
    category: "trabalho",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80",
    alt: "Equipamentos modernos",
    category: "ambiente",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b84?w=800&q=80",
    alt: "Resultado impecável",
    category: "trabalho",
  },
];

const categories = [
  { id: "todos", label: "Todos" },
  { id: "trabalho", label: "Nosso Trabalho" },
  { id: "ambiente", label: "Nosso Espaço" },
  { id: "produtos", label: "Produtos" },
];

export default function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages =
    selectedCategory === "todos"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(201,168,76,0.3) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <Reveal className="text-center mb-12">
          <span
            className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-widest"
            style={{
              background: "rgba(201,168,76,0.1)",
              color: "#c9a84c",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            Galeria
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Veja nosso{" "}
            <span className="gold-gradient-text">trabalho de perto</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Cada detalhe conta. Confira o ambiente, os resultados e a dedicação em cada atendimento.
          </p>
        </Reveal>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className="px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300"
              style={{
                background:
                  selectedCategory === cat.id
                    ? "linear-gradient(135deg, #c9a84c, #e8c97a)"
                    : "rgba(30,30,30,0.8)",
                color: selectedCategory === cat.id ? "#0a0a0a" : "#f5f5f5",
                border: `1px solid ${selectedCategory === cat.id ? "#c9a84c" : "rgba(201,168,76,0.2)"}`,
                boxShadow:
                  selectedCategory === cat.id ? "0 4px 16px rgba(201,168,76,0.3)" : "none",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square"
              style={{
                animation: `fadeIn 0.5s ease ${index * 0.05}s both`,
              }}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(201,168,76,0.9), rgba(232,201,122,0.9))",
                }}
              >
                <svg
                  className="w-12 h-12 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                  />
                </svg>
              </div>
              {/* Border glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 0 2px rgba(201,168,76,0.6)",
                  borderRadius: "1rem",
                }}
              />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <Reveal className="text-center mt-16">
          <a
            href="https://www.instagram.com/barbearia.sw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white transition-all duration-300 group"
            style={{
              background: "linear-gradient(135deg, #E1306C, #C13584, #833AB4, #5851DB)",
              boxShadow: "0 8px 24px rgba(193,53,132,0.4)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(193,53,132,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(193,53,132,0.4)";
            }}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>Veja mais no Instagram @barbearia.sw</span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </Reveal>
      </div>

      {/* Lightbox Modal (simples) */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.95)", backdropFilter: "blur(10px)" }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-4xl hover:text-[#c9a84c] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={filteredImages[selectedImage].src}
            alt={filteredImages[selectedImage].alt}
            className="max-w-full max-h-full rounded-2xl"
            style={{ boxShadow: "0 20px 60px rgba(201,168,76,0.3)" }}
          />
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
