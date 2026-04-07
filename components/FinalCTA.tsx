import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section
      className="relative py-28 px-4 sm:px-6 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.15) 0%, transparent 65%), #0a0a0a",
      }}
    >
      {/* Decorative top line */}
      <div className="section-gold-line absolute top-0 left-0 right-0" />

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #c9a84c 0, #c9a84c 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <Reveal>
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border"
            style={{
              background: "rgba(201,168,76,0.1)",
              borderColor: "rgba(201,168,76,0.3)",
              color: "#c9a84c",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
            Últimas vagas desta semana
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 text-white">
            Pronto para a sua{" "}
            <span className="gold-gradient-text block">transformação?</span>
          </h2>

          <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
            Agende agora e saia da barbearia com um visual que transmite
            confiança e estilo. Seus melhores cortes estão a um clique de
            distância.
          </p>
        </Reveal>

        <Reveal delay={150} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#agendamento"
            className="btn-gold pulse-glow rounded-full px-10 py-4 text-base flex items-center gap-2"
          >
            📅 Agendar Meu Horário
          </a>
          <a
            href="https://wa.me/5511999999999?text=Olá!%20Quero%20agendar%20um%20horário%20na%20Barbearia%20SW."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full px-10 py-4 text-base font-bold border border-[#25d366] text-[#25d366] hover:bg-[#25d366]/10 transition-all"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.857L.057 23.7a.5.5 0 0 0 .617.645l5.998-1.462A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.944 9.944 0 0 1-5.133-1.428l-.362-.213-3.745.912.95-3.647-.235-.374A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Chamar no WhatsApp
          </a>
        </Reveal>

        <Reveal delay={250}>
          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-gray-500">
            {[
              "✅ Sem compromisso",
              "⚡ Resposta em minutos",
              "📅 Seg–Sáb: 9h–20h",
              "⭐ 4.9 no Google",
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
