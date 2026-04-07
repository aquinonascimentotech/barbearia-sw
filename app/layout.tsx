import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Barbearia SW | Uberlândia/MG — A sua aparência vende",
  description:
    "Barbearia premium em Uberlândia/MG. Cortes modernos, barba impecável e atendimento personalizado. Seg–Sex 8h30–19h | Sáb 9h–16h30. Agende agora!",
  keywords: "barbearia, corte de cabelo, barba, Uberlândia, MG, barbearia SW, barbearia Uberlândia",
  openGraph: {
    title: "Barbearia SW | Uberlândia/MG",
    description: "A sua aparência vende. Nós cuidamos da sua imagem para que ela fale por você. Agende agora!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable}`}>
      <body className="min-h-screen antialiased" style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5" }}>
        {children}
      </body>
    </html>
  );
}
