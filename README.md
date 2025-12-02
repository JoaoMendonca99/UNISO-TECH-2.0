# UNISO Tech - Plataforma de Colaboração Universitária

Uma plataforma moderna e intuitiva para conectar estudantes da UNISO, compartilhar ideias e colaborar em projetos inovadores.

## 🚀 Características

- **Design System Moderno**: Interface limpa com gradientes azuis e elementos glassmorphism
- **Dark Mode**: Suporte completo a tema escuro com persistência
- **Animações Suaves**: Transições baseadas em rolagem com Framer Motion e Lenis
- **Responsivo**: Otimizado para desktop, tablet e mobile
- **Acessibilidade**: Navegação por teclado, contraste adequado e suporte a leitores de tela
- **Performance**: Otimizado para Lighthouse Score 90+
- **SEO**: Meta tags, Open Graph, sitemap e structured data

## 🛠️ Tecnologias

- **Framework**: Next.js 14 com App Router
- **Styling**: Tailwind CSS + shadcn/ui
- **Animações**: Framer Motion + Lenis (smooth scroll)
- **Ícones**: Lucide React
- **TypeScript**: Tipagem completa
- **Deployment**: Vercel

## 📱 Páginas

### Home (`/`)
- Seção Hero com animação 3D
- Ideias em Destaque
- Como Funciona (3 passos)
- CTA Final com estatísticas

### Explorar (`/explorar`)
- Sistema de busca e filtros
- Grid responsivo de projetos
- Ordenação por relevância/votos/comentários
- Paginação infinita

### Nova Ideia (`/nova-ideia`)
- Formulário completo com validação
- Preview em tempo real
- Sistema de tags dinâmico
- Necessidades da equipe

## 🎨 Design System

### Cores
- **Primária**: Gradiente azul (#3B82F6 → #1E40AF)
- **Secundária**: Amarelo (#FCD34D)
- **Neutros**: Escala de cinzas para textos e fundos
- **Dark Mode**: Fundos escuros com textos claros

### Tipografia
- **Font**: Inter (variável)
- **Hierarquia**: H1 (48px), H2 (36px), H3 (24px), Body (16px)

### Componentes
- Cards com bordas gradientes
- Botões com estados hover/focus
- Inputs com validação visual
- Badges para categorias e tags

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build


## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 14)
│   ├── explorar/          # Página Explorar
│   ├── nova-ideia/        # Página Nova Ideia
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página Home
├── components/
│   └── ui/                # Componentes reutilizáveis
│       ├── header.tsx     # Cabeçalho
│       ├── hero-section.tsx
│       ├── featured-ideas.tsx
│       ├── how-it-works.tsx
│       ├── cta-section.tsx
│       └── scroll-section.tsx
└── hooks/
    └── use-smooth-scroll.ts
```

## ✅ Critérios de Aceite Atendidos

### Funcionalidades Core
- [x] Publicação de ideias/projetos
- [x] Sistema de busca e filtros
- [x] Navegação intuitiva
- [x] Responsividade completa

### Design & UX
- [x] Design system consistente
- [x] Animações suaves
- [x] Dark mode funcional
- [x] Glassmorphism e gradientes

### Performance & SEO
- [x] Lighthouse Score 90+
- [x] Meta tags otimizadas
- [x] Sitemap e robots.txt
- [x] Structured data (JSON-LD)

### Acessibilidade
- [x] Navegação por teclado
- [x] Contraste adequado (WCAG AA)
- [x] ARIA labels
- [x] Suporte a leitores de tela

## 🔧 Configurações

### Variáveis de Ambiente
Não são necessárias para a versão atual.

### Deploy
O projeto está configurado para deploy automático na Vercel.


## 🤝 Contribuição

- João Gustavo Mendonça | Desemvolvedor
- Kauã França Ferreira | Desemvolvedor
- Arthur Raposo de Castro | Desemvolvedor
- Erick Souto Godoi | Desemvolvedor
- Pedro Henrique Bianco | Desemvolvedor

## 📄 Licença

Projeto acadêmico - UNISO Tech Platform
