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
          {/* Map embed placeholder */}
          <Reveal direction="left">
            <div
              className="rounded-3xl overflow-hidden border border-[#1e1e1e] relative"
              style={{ height: "380px" }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111]">
                <div className="text-5xl mb-4">📍</div>
                <p className="text-gray-400 text-sm mb-4 text-center px-8">
                  Substitua pelo embed do Google Maps real
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold rounded-full px-6 py-2.5 text-sm"
                >
                  Abrir no Google Maps
                </a>
              </div>
              {/* Uncomment below and set real coords for real map:
              <iframe
                src="https://www.google.com/maps/embed?pb=..."
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              */}
            </div>
          </Reveal>

          {/* Info */}
          <Reveal direction="right">
            <div className="space-y-6">
              {[
                {
                  icon: "📍",
                  title: "Endereço",
                  lines: ["Rua Exemplo, 123", "Bairro Centro — São Paulo, SP", "CEP 01310-000"],
                },
                {
                  icon: "🕐",
                  title: "Horários de Funcionamento",
                  lines: [
                    "Segunda a Sexta: 09h às 20h",
                    "Sábado: 09h às 18h",
                    "Domingo: Fechado",
                  ],
                },
                {
                  icon: "📞",
                  title: "Contato",
                  lines: ["(11) 99999-9999 (WhatsApp)", "contato@barbeariasw.com.br"],
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
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
