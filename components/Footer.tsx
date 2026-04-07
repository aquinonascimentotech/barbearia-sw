export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-12 px-4 sm:px-6 border-t"
      style={{ borderColor: "#1e1e1e", background: "#0a0a0a" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm text-black"
                style={{ background: "linear-gradient(135deg, #c9a84c, #e8c97a)" }}
              >
                SW
              </div>
              <span className="font-bold text-lg text-white">
                Barbearia <span className="gold-gradient-text">SW</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              A barbearia premium de São Paulo. Transformamos sua aparência com
              técnica, estilo e dedicação.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-5">
              <a
                href="https://instagram.com/barbearia.sw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm transition-all hover:scale-110"
                style={{
                  background: "rgba(201,168,76,0.1)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  color: "#c9a84c",
                }}
                aria-label="Instagram"
              >
                📸
              </a>
              <a
                href="https://wa.me/553432122031"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm transition-all hover:scale-110"
                style={{
                  background: "rgba(37,211,102,0.1)",
                  border: "1px solid rgba(37,211,102,0.2)",
                }}
                aria-label="WhatsApp"
              >
                💬
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Serviços</h4>
            <ul className="space-y-2">
              {[
                "Corte Clássico",
                "Corte + Barba",
                "Barba Completa",
                "Hidratação",
                "VIP Premium",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#servicos"
                    className="text-gray-500 text-sm hover:text-[#c9a84c] transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="flex gap-2">
                <span>📍</span>
                <span>Av. Floriano Peixoto, 2593 — Uberlândia/MG</span>
              </li>
              <li className="flex gap-2">
                <span>📱</span>
                <span>(34) 3212-2031</span>
              </li>
              <li className="flex gap-2">
                <span>🕐</span>
                <span>Seg–Sex: 8h30–19h</span>
              </li>
              <li className="flex gap-2">
                <span>🕐</span>
                <span>Sáb: 9h–16h30</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="section-gold-line mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© {year} Barbearia SW. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{" "}
            <a
              href="https://github.com/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c9a84c] hover:underline"
            >
              Felipe Nascimento
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
