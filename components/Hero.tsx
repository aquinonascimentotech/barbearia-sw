export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 70% 40%, rgba(201,168,76,0.12) 0%, transparent 60%), #0a0a0a",
      }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #c9a84c 0, #c9a84c 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Floating decorative circles */}
      <div
        className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #c9a84c, transparent)" }}
      />
      <div
        className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-8 blur-2xl"
        style={{ background: "radial-gradient(circle, #c9a84c, transparent)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-32 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border"
            style={{
              background: "rgba(201,168,76,0.1)",
              borderColor: "rgba(201,168,76,0.3)",
              color: "#c9a84c",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
            Vagas limitadas esta semana
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 tracking-tight">
            Sua aparência,{" "}
            <span className="gold-gradient-text block">nossa obsessão.</span>
          </h1>

          <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
            Cortes modernos, barba impecável e ambiente premium. A Barbearia SW
            cuida da sua imagem com excelência e atenção aos detalhes que fazem
            a diferença.
          </p>

          {/* Stats */}
          <div className="flex justify-center lg:justify-start gap-8 mb-10">
            {[
              { value: "5.000+", label: "Clientes Satisfeitos" },
              { value: "8 anos", label: "de Experiência" },
              { value: "4.9★", label: "Avaliação Google" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="text-2xl font-black text-[#c9a84c]">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#agendamento"
              className="btn-gold pulse-glow rounded-full px-8 py-4 text-base flex items-center justify-center gap-2"
            >
              📅 Agendar Meu Horário
            </a>
            <a
              href="https://wa.me/5511999999999?text=Olá!%20Quero%20agendar%20um%20horário."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold border border-[#25d366] text-[#25d366] hover:bg-[#25d366]/10 transition-all"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.857L.057 23.7a.5.5 0 0 0 .617.645l5.998-1.462A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.944 9.944 0 0 1-5.133-1.428l-.362-.213-3.745.912.95-3.647-.235-.374A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="hidden lg:flex justify-center items-center">
          <div className="relative">
            {/* Main card */}
            <div
              className="w-80 h-80 rounded-3xl flex items-center justify-center relative overflow-hidden border border-[#1e1e1e]"
              style={{
                background: "linear-gradient(135deg, #111 0%, #1a1a1a 100%)",
              }}
            >
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, #c9a84c, transparent 60%)",
                }}
              />
              <div className="text-center relative z-10">
                <div className="text-7xl mb-4">✂️</div>
                <div className="gold-gradient-text font-black text-2xl">BARBEARIA SW</div>
                <div className="text-gray-400 text-sm mt-2">Premium Barbershop</div>
              </div>

              {/* Floating badges */}
              <div
                className="absolute -top-3 -right-3 rounded-2xl px-3 py-2 text-xs font-bold text-black"
                style={{ background: "linear-gradient(135deg, #c9a84c, #e8c97a)" }}
              >
                ⭐ 4.9/5
              </div>
              <div
                className="absolute -bottom-3 -left-3 rounded-2xl px-3 py-2 text-xs font-bold text-black"
                style={{ background: "linear-gradient(135deg, #25d366, #128c7e)" }}
              >
                💬 Resposta rápida
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-gray-500">Role para ver mais</span>
        <div className="w-5 h-8 rounded-full border border-gray-600 flex justify-center pt-1.5">
          <div
            className="w-1 h-1.5 rounded-full bg-gray-400"
            style={{ animation: "fadeInUp 1.5s ease infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
