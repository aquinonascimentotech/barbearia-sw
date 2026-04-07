import Reveal from "./Reveal";

const team = [
  {
    name: "Fabrício Borges",
    role: "Barbeiro Sênior & Fundador",
    photo: "/images/team-fabricio.png",
    bio: "Mais de 3 anos dedicado à arte da barbearia. Especialista em cortes modernos e técnicas tradicionais. Cada cliente sai transformado.",
  },
  {
    name: "Samuel Wesley",
    role: "Especialista em Barba",
    photo: "/images/team-samuel.jpg",
    bio: "Precisão e cuidado em cada detalhe. Referência em pigmentação, modelagem e acabamento de barba em Uberlândia.",
  },
  {
    name: "Danyel Araújo",
    role: "Barbeiro & Especialista Capilar",
    photo: "/images/team-danyel.png",
    bio: "Domina técnicas de hidratação, progressiva e tintura. Transforma o visual com técnica apurada e atenção ao cliente.",
  },
];

export default function Team() {
  return (
    <section
      className="py-24 px-4 sm:px-6"
      style={{ background: "linear-gradient(180deg, #0f0f0f 0%, #0a0a0a 100%)" }}
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
            Nossa Equipe
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Profissionais{" "}
            <span className="gold-gradient-text">experientes</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Cada barbeiro é especialista na sua área. Você está em boas mãos —
            seja qual for o serviço que escolher.
          </p>
        </Reveal>

        <hr className="section-gold-line mb-16" />

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 100}>
              <div className="card-dark rounded-3xl p-8 text-center hover:border-[#c9a84c]/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col items-center">
                {/* Avatar */}
                <div className="w-24 h-24 rounded-full mb-5 ring-2 ring-[#c9a84c]/30 overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-white font-bold text-lg mb-1">{member.name}</h3>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full mb-4"
                  style={{
                    background: "rgba(201,168,76,0.1)",
                    color: "#c9a84c",
                    border: "1px solid rgba(201,168,76,0.2)",
                  }}
                >
                  {member.role}
                </span>
                <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal className="text-center mt-14" delay={150}>
          <a
            href="#agendamento"
            className="btn-gold inline-flex items-center gap-2 rounded-full px-10 py-4 text-base"
          >
            📅 Escolha seu profissional e agende
          </a>
        </Reveal>
      </div>
    </section>
  );
}
