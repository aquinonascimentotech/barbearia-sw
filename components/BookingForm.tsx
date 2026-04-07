"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type FormState = {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
};

type Status = "idle" | "loading" | "success" | "error";

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30",
];

const services = [
  "Corte Clássico — R$45",
  "Corte + Barba — R$75",
  "Barba Completa — R$40",
  "Hidratação Capilar — R$50",
  "VIP Premium — R$130",
  "Pigmentação — R$60",
];

export default function BookingForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simula envio (substitua pela sua API real)
    await new Promise((r) => setTimeout(r, 1500));

    // Redirecionar para WhatsApp com os dados preenchidos
    const msg = encodeURIComponent(
      `Olá! Quero agendar um horário na Barbearia SW.\n\n` +
      `*Nome:* ${form.name}\n` +
      `*Telefone:* ${form.phone}\n` +
      `*Serviço:* ${form.service}\n` +
      `*Data:* ${form.date}\n` +
      `*Horário:* ${form.time}\n` +
      (form.notes ? `*Observações:* ${form.notes}` : "")
    );

    setStatus("success");
    window.open(`https://wa.me/553432122031?text=${msg}`, "_blank");
  };

  const isValid =
    form.name && form.phone && form.service && form.date && form.time;

  // Min date = today
  const today = new Date().toISOString().split("T")[0];

  return (
    <section
      id="agendamento"
      className="py-24 px-4 sm:px-6"
      style={{
        background: "linear-gradient(180deg, #0a0a0a 0%, #0d0d0d 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <Reveal direction="left">
            <span
              className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-widest"
              style={{
                background: "rgba(201,168,76,0.1)",
                color: "#c9a84c",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              Agendamento
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Reserve seu{" "}
              <span className="gold-gradient-text">horário agora</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Preencha o formulário e entraremos em contato pelo WhatsApp para
              confirmar. Atendimento de seg a sáb, das 9h às 20h.
            </p>

            {/* Info blocks */}
            <div className="space-y-5">
              {[
                {
                  icon: "📍",
                  title: "Endereço",
                  text: "Av. Floriano Peixoto, 2593 — Uberlândia/MG",
                },
                {
                  icon: "🕐",
                  title: "Horários",
                  text: "Seg–Sex: 8h30–19h | Sáb: 9h–16h30",
                },
                {
                  icon: "📱",
                  title: "WhatsApp",
                  text: "(34) 3212-2031",
                },
                {
                  icon: "📸",
                  title: "Instagram",
                  text: "@barbearia.sw",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                    style={{
                      background: "rgba(201,168,76,0.1)",
                      border: "1px solid rgba(201,168,76,0.2)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{item.title}</div>
                    <div className="text-gray-400 text-sm">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right: Form */}
          <Reveal direction="right">
          <div className="card-dark rounded-3xl p-8">
            {status === "success" ? (
              <div className="text-center py-10">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-black text-white mb-2">
                  Solicitação enviada!
                </h3>
                <p className="text-gray-400 mb-6">
                  Estamos abrindo o WhatsApp com seus dados. Confirmaremos seu
                  horário em breve!
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn-gold rounded-full px-8 py-3 text-sm"
                >
                  Fazer outro agendamento
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-white mb-1">
                  Preencha seus dados
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  Todos os campos marcados com * são obrigatórios.
                </p>

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="João da Silva"
                    required
                    className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 border border-[#1e1e1e] bg-[#0a0a0a] focus:border-[#c9a84c] transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                    required
                    className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 border border-[#1e1e1e] bg-[#0a0a0a] focus:border-[#c9a84c] transition-colors"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Serviço *
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl px-4 py-3 text-sm text-white border border-[#1e1e1e] bg-[#0a0a0a] focus:border-[#c9a84c] transition-colors"
                  >
                    <option value="" disabled>
                      Selecione um serviço
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-[#0a0a0a]">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date + Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                      Data *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      min={today}
                      required
                      className="w-full rounded-xl px-4 py-3 text-sm text-white border border-[#1e1e1e] bg-[#0a0a0a] focus:border-[#c9a84c] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                      Horário *
                    </label>
                    <select
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl px-4 py-3 text-sm text-white border border-[#1e1e1e] bg-[#0a0a0a] focus:border-[#c9a84c] transition-colors"
                    >
                      <option value="" disabled>
                        --:--
                      </option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t} className="bg-[#0a0a0a]">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Observações (opcional)
                  </label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Referência de corte, alguma preferência especial..."
                    className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 border border-[#1e1e1e] bg-[#0a0a0a] focus:border-[#c9a84c] transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!isValid || status === "loading"}
                  className={`w-full rounded-xl py-4 text-base font-black transition-all flex items-center justify-center gap-2 ${
                    isValid
                      ? "btn-gold"
                      : "bg-[#1e1e1e] text-gray-600 cursor-not-allowed"
                  }`}
                >
                  {status === "loading" ? (
                    <>
                      <svg
                        className="animate-spin w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>📅 Confirmar Agendamento via WhatsApp</>
                  )}
                </button>

                <p className="text-center text-gray-600 text-xs">
                  Ao agendar, você será redirecionado para o WhatsApp para
                  confirmação final.
                </p>
              </form>
            )}
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
