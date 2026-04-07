"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "Preciso agendar com antecedência ou posso chegar sem hora marcada?",
    a: "Recomendamos agendar pelo formulário ou WhatsApp para garantir seu horário. Atendemos por ordem de chegada quando há disponibilidade, mas nos horários de pico (sexta e sábado) a espera pode ser longa.",
  },
  {
    q: "Quanto tempo dura um atendimento?",
    a: "Depende do serviço. Um corte clássico leva em média 40 minutos. O combo Corte + Barba fica em torno de 70 minutos. Para o pacote VIP Premium, reserve cerca de 2 horas para aproveitar tudo com calma.",
  },
  {
    q: "Quais formas de pagamento são aceitas?",
    a: "Aceitamos dinheiro, Pix, cartão de débito e crédito (todas as bandeiras). O pagamento é feito ao final do atendimento.",
  },
  {
    q: "É possível cancelar ou reagendar o horário?",
    a: "Sim. Pedimos apenas que avise com pelo menos 2 horas de antecedência pelo WhatsApp para que possamos oferecer o horário a outro cliente. Cancelamentos com menos aviso podem impactar futuras reservas.",
  },
  {
    q: "Atendem crianças e adolescentes?",
    a: "Atendemos a partir de 10 anos. Para crianças menores, recomendamos entrar em contato pelo WhatsApp antes para avaliar o caso individualmente.",
  },
  {
    q: "Têm estacionamento ou é fácil chegar de transporte público?",
    a: "Há estacionamento rotativo nas redondezas e o local é bem servido por ônibus e metrô. Ao agendar, enviamos o endereço completo e dicas de como chegar.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 sm:px-6" style={{ background: "#0f0f0f" }}>
      <div className="max-w-3xl mx-auto">
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
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Tudo que você precisa{" "}
            <span className="gold-gradient-text">saber</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Tire suas dúvidas antes de agendar. Se não encontrar o que procura,
            fale com a gente pelo WhatsApp.
          </p>
        </Reveal>

        <hr className="section-gold-line mb-12" />

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 60}>
              <div
                className="card-dark rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  borderColor: open === i ? "rgba(201,168,76,0.4)" : undefined,
                }}
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="text-white font-semibold text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                    {faq.q}
                  </span>
                  <span
                    className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 text-black font-black text-sm"
                    style={{
                      background:
                        open === i
                          ? "linear-gradient(135deg, #c9a84c, #e8c97a)"
                          : "rgba(201,168,76,0.15)",
                      color: open === i ? "#0a0a0a" : "#c9a84c",
                      transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>

                <div
                  style={{
                    maxHeight: open === i ? "200px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.35s ease",
                  }}
                >
                  <p className="text-gray-400 text-sm leading-relaxed px-6 pb-5">
                    {faq.a}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* WhatsApp fallback */}
        <Reveal delay={400} className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">
            Ainda tem dúvidas? Fale direto com a gente.
          </p>
          <a
            href="https://wa.me/553432122031?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20os%20serviços."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-bold border border-[#25d366] text-[#25d366] hover:bg-[#25d366]/10 transition-all"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.857L.057 23.7a.5.5 0 0 0 .617.645l5.998-1.462A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.944 9.944 0 0 1-5.133-1.428l-.362-.213-3.745.912.95-3.647-.235-.374A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Tirar dúvida no WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
