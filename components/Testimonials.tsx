import Reveal from "./Reveal";

const testimonials = [
  {
    name: "Rodrigo Mendes",
    role: "Empresário",
    stars: 5,
    text: "Melhor barbearia que já fui. O atendimento é impecável e o corte ficou exatamente como eu queria. Já sou cliente há 3 anos e não troco por nada.",
    avatar: "RM",
  },
  {
    name: "Caio Ferreira",
    role: "Analista de TI",
    stars: 5,
    text: "Vim pela primeira vez por indicação e fiquei fã. A barba que fiz aqui durou mais de 2 semanas com o formato. Ambiente ótimo, Wi-Fi, café… voltei semana seguinte.",
    avatar: "CF",
  },
  {
    name: "Lucas Oliveira",
    role: "Professor",
    stars: 5,
    text: "Profissionalismo de outro nível. Cheguei sem ideia do que queria e o barbeiro foi incrível em me orientar. O resultado superou minhas expectativas.",
    avatar: "LO",
  },
  {
    name: "Felipe Santos",
    role: "Designer",
    stars: 5,
    text: "A experiência VIP vale cada centavo. Saio de lá me sentindo outra pessoa. Recomendo para todo mundo que se preocupa com a própria imagem.",
    avatar: "FS",
  },
  {
    name: "André Costa",
    role: "Médico",
    stars: 5,
    text: "Pontualidade e qualidade. Sem esperar nem 5 minutos. Barbearia organizada, cheirosa e com barbeiros que realmente entendem do ofício.",
    avatar: "AC",
  },
  {
    name: "Bruno Lima",
    role: "Arquiteto",
    stars: 5,
    text: "Fui por indicação e me tornei cliente fixo. O corte que faço aqui combina perfeitamente com meu estilo. Vocês sabem o que fazem!",
    avatar: "BL",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 px-4 sm:px-6 overflow-hidden">
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
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            O que nossos clientes{" "}
            <span className="gold-gradient-text">falam de nós</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Mais de 5.000 clientes satisfeitos. Veja por que somos a barbearia
            favorita da região.
          </p>

          {/* Google rating */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-[#c9a84c] text-xl">
                  ★
                </span>
              ))}
            </div>
            <span className="text-white font-bold">4.9</span>
            <span className="text-gray-500 text-sm">(320+ avaliações no Google)</span>
          </div>
        </Reveal>

        <hr className="section-gold-line mb-16" />

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 80}>
            <div
              className="card-dark rounded-2xl p-6 flex flex-col gap-4 hover:border-[#c9a84c]/30 transition-all duration-300 hover:-translate-y-1 h-full"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <span key={s} className="text-[#c9a84c] text-sm">
                    ★
                  </span>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-[#1e1e1e]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-black shrink-0"
                  style={{ background: "linear-gradient(135deg, #c9a84c, #e8c97a)" }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                </div>
                <div className="ml-auto">
                  <span className="text-xs text-gray-600">Google</span>
                </div>
              </div>
            </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal className="text-center mt-12" delay={100}>
          <a
            href="#agendamento"
            className="btn-gold inline-flex items-center gap-2 rounded-full px-10 py-4 text-base"
          >
            Quero ser o próximo ⭐
          </a>
        </Reveal>
      </div>
    </section>
  );
}
