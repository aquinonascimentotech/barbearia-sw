# Barbearia SW — Landing Page

**🔗 [Ver site em produção →](https://barbearia-sw.vercel.app/)**

Landing page de alta conversão desenvolvida para a **Barbearia SW**, negócio local em Uberlândia/MG. O projeto foi construído com foco em captar agendamentos via WhatsApp e formulário, com design premium e performance otimizada.

---

## Seções da página

- **Hero** — CTA principal com estatísticas e link direto para WhatsApp
- **Serviços** — Cards com preços, duração e botão de agendamento
- **Transformações** — Antes e depois interativo por estilo de corte
- **Depoimentos** — Avaliações reais com nota 4.9 no Google
- **Agendamento** — Formulário que abre o WhatsApp com os dados preenchidos
- **Localização** — Endereço, horários e mapa
- **FAQ** — Dúvidas frequentes em accordion
- **CTA Final** — Seção de fechamento com urgência e duplo CTA

---

## Stack

- [Next.js 15](https://nextjs.org/) — App Router, Server Components
- [React 19](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- Deploy na [Vercel](https://vercel.com/)

---

## Rodando localmente

> **Requisito:** Node.js 20 ou superior

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

---

## Deploy

O projeto está configurado para deploy automático na Vercel. Qualquer push na branch principal dispara um novo deploy.

```bash
# Deploy de produção via CLI
npx vercel --prod
```

---

## Personalização

Os dados da barbearia (telefone, endereço, serviços, preços) estão centralizados nos próprios componentes dentro de `components/`. Basta editar os arrays e objetos no topo de cada arquivo.

| Arquivo | O que customizar |
|---|---|
| `components/Hero.tsx` | Estatísticas, CTAs, número do WhatsApp |
| `components/Services.tsx` | Lista de serviços e preços |
| `components/BookingForm.tsx` | Horários disponíveis, número do WhatsApp |
| `components/Location.tsx` | Endereço, horários, embed do Maps |
| `components/FAQ.tsx` | Perguntas e respostas |

---

## Estrutura do projeto

```
barbearia-sw/
├── app/
│   ├── layout.tsx       # Metadados SEO, fonte, globals
│   ├── page.tsx         # Composição das seções
│   └── globals.css      # Tokens de design (cores, animações)
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── BeforeAfter.tsx
│   ├── Testimonials.tsx
│   ├── BookingForm.tsx
│   ├── Location.tsx
│   ├── FAQ.tsx
│   ├── FinalCTA.tsx
│   ├── Footer.tsx
│   ├── WhatsAppButton.tsx
│   └── Reveal.tsx       # Animações de scroll (IntersectionObserver)
└── public/
```

---

Desenvolvido por [Aquino Nascimento Tech](https://github.com/felipeaquinonascimento)
