import Reveal from "./Reveal";

const services = [
  {
    icon: "✂️",
    name: "Corte",
    description: "Tesoura, máquina ou degradê. Acabamento impecável com navalha e técnica apurada.",
    price: "Consulte",
    duration: "40 min",
    popular: false,
  },
  {
    icon: "🪒",
    name: "Barba",
    description: "Modelagem completa com navalha quente, toalha e produtos premium. A barba que você merece.",
    price: "Consulte",
    duration: "35 min",
    popular: true,
  },
  {
    icon: "💆",
    name: "Hidratação",
    description: "Tratamento intensivo para cabelos ressecados ou danificados. Resultado visível na primeira sessão.",
    price: "Consulte",
    duration: "30 min",
    popular: false,
  },
  {
    icon: "🎯",
    name: "Pigmentação para Barba",
    description: "Cobertura de falhas e uniformização da barba. Resultado natural e duradouro.",
    price: "Consulte",
    duration: "45 min",
    popular: false,
  },
  {
    icon: "💇",
    name: "Progressiva",
    description: "Alinhamento e definição dos fios com técnica profissional. Cabelo mais leve e fácil de pentear.",
    price: "Consulte",
    duration: "60 min",
    popular: false,
  },
  {
    icon: "✨",
    name: "Sobrancelha",
    description: "Design e modelagem de sobrancelha masculina para um visual mais definido e harmonioso.",
    price: "Consulte",
    duration: "20 min",
    popular: false,
  },
  {
    icon: "🎨",
    name: "Tintura para Cabelo",
    description: "Coloração profissional com produtos de qualidade. Cobertura de grisalhos ou mudança de visual.",
    price: "Consulte",
    duration: "50 min",
    popular: false,
  },
  {
    icon: "🌿",
    name: "Limpeza de Pele com Argila",
    description: "Tratamento facial com argila para limpeza profunda, poros menos visíveis e pele renovada.",
    price: "Consulte",
    duration: "40 min",
    popular: false,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 px-4 sm:px-6">
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
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Cada serviço, um{" "}
            <span className="gold-gradient-text">detalhe de perfeição</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Usamos apenas produtos premium e técnicas modernas para garantir o
            melhor resultado para você.
          </p>
        </Reveal>

        <hr className="section-gold-line mb-16" />

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Reveal key={service.name} delay={i * 80}>
            <div
              className={`relative card-dark rounded-2xl p-6 transition-all duration-300 hover:border-[#c9a84c]/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#c9a84c]/10 h-full ${
                service.popular ? "border-[#c9a84c]/50" : ""
              }`}
            >
              {service.popular && (
                <div
                  className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-black text-black"
                  style={{ background: "linear-gradient(135deg, #c9a84c, #e8c97a)" }}
                >
                  ⭐ Mais Pedido
                </div>
              )}

              <div className="text-4xl mb-4">{service.icon}</div>

              <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-black text-[#c9a84c]">{service.price}</span>
                  <span className="text-gray-500 text-xs ml-2">/ {service.duration}</span>
                </div>
                <a
                  href="#agendamento"
                  className="btn-gold rounded-full px-4 py-2 text-xs"
                >
                  Agendar
                </a>
              </div>
            </div>
            </Reveal>
          ))}
        </div>

        {/* CTA bottom */}
        <Reveal className="text-center mt-12" delay={100}>
          <a
            href="#agendamento"
            className="btn-gold inline-flex items-center gap-2 rounded-full px-10 py-4 text-base"
          >
            📅 Ver todos os horários disponíveis
          </a>
        </Reveal>
      </div>
    </section>
  );
}
