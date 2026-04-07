import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Barbearia SW | Cortes de Excelência em São Paulo",
  description:
    "A barbearia premium de São Paulo. Cortes modernos, barba perfeita e atendimento VIP. Agende seu horário agora e transforme seu visual.",
  keywords: "barbearia, corte de cabelo, barba, São Paulo, barbearia premium",
  openGraph: {
    title: "Barbearia SW | Cortes de Excelência",
    description: "Transforme seu visual com os melhores barbeiros de SP. Agende agora!",
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
