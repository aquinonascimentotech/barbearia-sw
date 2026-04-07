import Reveal from "./Reveal";

export default function Location() {
  return (
    <section
      id="localizacao"
      className="py-24 px-4 sm:px-6"
      style={{ background: "#0f0f0f" }}
    >
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <span
            className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-widest"
            style={{
              background: "rgba(201,168,76,0.1)",
              color: "#c9a84c",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            Onde nos encontrar
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Venha nos <span className="gold-gradient-text">visitar</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Localização central, fácil acesso e estacionamento próximo.
          </p>
        </Reveal>

        <hr className="section-gold-line mb-16" />

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Google Maps Embed */}
          <Reveal direction="left">
            <div
              className="rounded-3xl overflow-hidden border border-[#1e1e1e] relative"
              style={{ height: "380px" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3759.4676598447634!2d-48.28196492396896!3d-18.943333982237687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a445d02d3b3f2f%3A0x5f4b3f3e3e3e3e3e!2sAv.%20Floriano%20Peixoto%2C%202593%20-%20Nossa%20Sra.%20Aparecida%2C%20Uberl%C3%A2ndia%20-%20MG%2C%2038400-702!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Barbearia SW"
              />
            </div>
          </Reveal>

          {/* Info */}
          <Reveal direction="right">
            <div className="space-y-6">
              {[
                {
                  icon: "📍",
                  title: "Endereço",
                  lines: ["Av. Floriano Peixoto, 2593", "Nossa Senhora Aparecida — Uberlândia/MG", "CEP 38400-702"],
                },
                {
                  icon: "🕐",
                  title: "Horários de Funcionamento",
                  lines: [
                    "Segunda a Sexta: 08:30 às 19:00",
                    "Sábado: 09:00 às 16:30",
                    "Domingo: Fechado",
                  ],
                },
                {
                  icon: "📞",
                  title: "Contato",
                  lines: ["(34) 3212-2031 (WhatsApp)", "@barbearia.sw"],
                },
              ].map((block) => (
                <div
                  key={block.title}
                  className="card-dark rounded-2xl p-5 flex gap-4"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0"
                    style={{
                      background: "rgba(201,168,76,0.1)",
                      border: "1px solid rgba(201,168,76,0.2)",
                    }}
                  >
                    {block.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 text-sm">{block.title}</h3>
                    {block.lines.map((line, i) => (
                      <p key={i} className="text-gray-400 text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              <a
                href="#agendamento"
                className="btn-gold flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-base w-full"
              >
                📅 Agendar meu horário agora
              </a>

              <a
                href="https://maps.app.goo.gl/YZLhYCFh6ZWAN1dGA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-base w-full font-bold border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-all"
              >
                🗺️ Ver rotas no Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
