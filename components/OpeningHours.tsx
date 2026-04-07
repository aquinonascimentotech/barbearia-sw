"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const schedule = [
  { day: "Segunda-feira", hours: "08:30 - 19:00", isOpen: true },
  { day: "Terça-feira", hours: "08:30 - 19:00", isOpen: true },
  { day: "Quarta-feira", hours: "08:30 - 19:00", isOpen: true },
  { day: "Quinta-feira", hours: "08:30 - 19:00", isOpen: true },
  { day: "Sexta-feira", hours: "08:30 - 19:00", isOpen: true },
  { day: "Sábado", hours: "09:00 - 16:30", isOpen: true },
  { day: "Domingo", hours: "Fechado", isOpen: false },
];

function getCurrentDayIndex() {
  const today = new Date().getDay();
  // Ajustar: domingo = 0, segunda = 1... transformar para nosso array (segunda = 0)
  return today === 0 ? 6 : today - 1;
}

function isCurrentlyOpen() {
  const now = new Date();
  const dayIndex = getCurrentDayIndex();
  const currentDay = schedule[dayIndex];

  if (!currentDay.isOpen || currentDay.hours === "Fechado") return false;

  const [start, end] = currentDay.hours.split(" - ").map((time) => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  });

  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  return currentMinutes >= start && currentMinutes <= end;
}

export default function OpeningHours() {
  const [currentDay] = useState(getCurrentDayIndex());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(isCurrentlyOpen());
    // Atualizar a cada minuto
    const interval = setInterval(() => {
      setIsOpen(isCurrentlyOpen());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #c9a84c, transparent)",
          filter: "blur(100px)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Info */}
          <Reveal>
            <span
              className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-widest"
              style={{
                background: "rgba(201,168,76,0.1)",
                color: "#c9a84c",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              Horário de Funcionamento
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
              Estamos prontos para{" "}
              <span className="gold-gradient-text">cuidar de você</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Atendemos de segunda a sábado com horários flexíveis para você não perder o seu momento de cuidado pessoal.
            </p>

            {/* Status Badge */}
            <div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8"
              style={{
                background: isOpen
                  ? "linear-gradient(135deg, rgba(34,197,94,0.2), rgba(22,163,74,0.2))"
                  : "linear-gradient(135deg, rgba(239,68,68,0.2), rgba(220,38,38,0.2))",
                border: `1px solid ${isOpen ? "rgba(34,197,94,0.4)" : "rgba(239,68,68,0.4)"}`,
              }}
            >
              <span
                className={`w-3 h-3 rounded-full ${isOpen ? "animate-pulse" : ""}`}
                style={{
                  background: isOpen ? "#22c55e" : "#ef4444",
                  boxShadow: isOpen
                    ? "0 0 12px rgba(34,197,94,0.8)"
                    : "0 0 12px rgba(239,68,68,0.8)",
                }}
              />
              <span className="font-bold text-white">
                {isOpen ? "Aberto agora" : "Fechado no momento"}
              </span>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://agendamento.avec.beauty/?slug=atitudebarbeariaaparecida#/app/widget/atitudebarbeariaaparecida"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold rounded-full px-8 py-3.5 text-base flex items-center gap-2"
              >
                📅 Agendar Online
              </a>
              <a
                href="https://wa.me/553432122031"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-bold border border-[#25d366] text-[#25d366] hover:bg-[#25d366]/10 transition-all"
              >
                💬 Falar no WhatsApp
              </a>
            </div>
          </Reveal>

          {/* Right - Schedule Cards */}
          <Reveal delay={0.2}>
            <div className="space-y-3">
              {schedule.map((item, index) => {
                const isToday = index === currentDay;
                return (
                  <div
                    key={item.day}
                    className="flex items-center justify-between p-4 rounded-xl transition-all duration-300"
                    style={{
                      background: isToday
                        ? "linear-gradient(135deg, rgba(201,168,76,0.15), rgba(232,201,122,0.15))"
                        : "rgba(17,17,17,0.5)",
                      border: isToday
                        ? "1px solid rgba(201,168,76,0.4)"
                        : "1px solid rgba(30,30,30,0.8)",
                      transform: isToday ? "scale(1.02)" : "scale(1)",
                      boxShadow: isToday ? "0 8px 24px rgba(201,168,76,0.15)" : "none",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{
                            background: "#c9a84c",
                            boxShadow: "0 0 8px rgba(201,168,76,0.8)",
                          }}
                        />
                      )}
                      <span
                        className={`font-bold ${isToday ? "text-[#c9a84c]" : "text-gray-300"}`}
                      >
                        {item.day}
                      </span>
                    </div>
                    <span
                      className={`font-mono text-sm ${
                        item.isOpen ? "text-gray-400" : "text-red-400"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Extra Info */}
            <div
              className="mt-6 p-4 rounded-xl text-center text-sm text-gray-400"
              style={{
                background: "rgba(17,17,17,0.5)",
                border: "1px solid rgba(201,168,76,0.1)",
              }}
            >
              ⚠️ Recomendamos agendar com antecedência para garantir seu horário preferido.
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
