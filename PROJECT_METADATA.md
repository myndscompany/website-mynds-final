# Mynds Company - Metadados do Projeto

## 📋 Informações Gerais

**Nome do Projeto:** Mynds Company - Agência Digital  
**Descrição:** Website institucional para agência digital especializada em transformar negócios locais em Belo Horizonte  
**Versão:** 1.0.0  
**Data de Criação:** 2025  
**Tipo:** Website Institucional / Landing Page  

## 🎨 Design System

### Paleta de Cores
```css
/* Modo Escuro (Padrão) */
--primary: 259 69% 51%         /* #673ab7 - Purple principal */
--primary-dark: 259 69% 35%    /* #512da8 - Purple escuro */
--primary-light: 259 60% 85%   /* #d1c4e9 - Purple claro */
--accent: 0 0% 62%             /* #9e9e9e - Cinza accent */
--foreground: 0 0% 100%        /* #FFFFFF - Texto/Ícones */
--muted-foreground: 0 0% 46%   /* #757575 - Texto secundário */
--border: 0 0% 74%             /* #BDBDBD - Divisores */

/* Modo Claro */
--primary: 259 69% 51%         /* #673ab7 */
--foreground: 0 0% 13%         /* #212121 - Texto primário */
```

### Tipografia
- **Font Family:** Sistema (system-ui, sans-serif)
- **Escalas:** text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl, text-5xl
- **Pesos:** font-normal, font-medium, font-semibold, font-bold

### Espaçamentos
- **Container:** max-w-7xl com padding responsivo
- **Seções:** py-16 sm:py-20 lg:py-24 xl:py-32
- **Elementos:** Usando escala Tailwind (4, 6, 8, 12, 16, 20, 24, 32)

### Responsividade
- **Mobile First:** sm: (640px+), md: (768px+), lg: (1024px+), xl: (1280px+), 2xl: (1536px+)
- **Grid System:** Grid responsivo com 1-4 colunas dependendo do dispositivo
- **Typography:** Escalas tipográficas responsivas

## 🛠️ Stack Tecnológico

### Frontend Framework
- **React 18.3.1** - Biblioteca principal para UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server

### Styling & UI
- **Tailwind CSS** - Framework CSS utility-first
- **tailwindcss-animate** - Animações CSS
- **Radix UI** - Componentes acessíveis headless
- **Shadcn/UI** - Sistema de componentes baseado em Radix
- **Lucide React** - Biblioteca de ícones

### State Management & Routing
- **React Router DOM 6.30.1** - Roteamento SPA
- **TanStack Query 5.83.0** - Gerenciamento de estado servidor
- **Next Themes** - Gerenciamento de tema claro/escuro

### Utilities
- **clsx** - Utilitário para classes condicionais
- **tailwind-merge** - Merge de classes Tailwind
- **class-variance-authority** - Variantes de componentes

### Forms & Validation
- **React Hook Form 7.61.1** - Gerenciamento de formulários
- **Zod 3.25.76** - Validação de esquemas
- **@hookform/resolvers** - Integração Zod + RHF

### Development Tools
- **ESLint** - Linting JavaScript/TypeScript
- **TypeScript ESLint** - Regras específicas TS
- **React Hooks ESLint** - Regras para hooks

## 📁 Estrutura de Arquivos

```
src/
├── components/           # Componentes React
│   ├── ui/              # Componentes base (Shadcn)
│   ├── Header.tsx       # Cabeçalho com navegação
│   ├── HeroSection.tsx  # Seção principal
│   ├── ServicesSection.tsx
│   ├── PortfolioSection.tsx
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── pages/               # Páginas da aplicação
│   ├── Index.tsx        # Página principal
│   └── NotFound.tsx     # Página 404
├── hooks/               # Custom hooks
├── lib/                 # Utilitários
│   └── utils.ts         # Funções auxiliares
├── assets/              # Imagens e recursos
├── App.tsx              # Componente raiz
├── main.tsx            # Ponto de entrada
└── index.css           # Estilos globais e tokens CSS
```

## 🎯 Boas Práticas Implementadas

### Código
- **Componentes Funcionais:** Uso exclusivo de function components
- **TypeScript Strict:** Tipagem rigorosa em todo o projeto
- **Custom Hooks:** Lógica reutilizável encapsulada
- **Composition Pattern:** Componentes compostos ao invés de props drilling
- **Error Boundaries:** Tratamento de erros em componentes

### Performance
- **Code Splitting:** Componentes carregados sob demanda
- **Tree Shaking:** Apenas código utilizado no bundle
- **Lazy Loading:** Carregamento otimizado de recursos
- **Memoização:** React.memo e useMemo quando necessário

### Acessibilidade
- **Semantic HTML:** Uso correto de tags semânticas
- **ARIA Labels:** Rótulos para leitores de tela
- **Focus Management:** Navegação por teclado
- **Contraste:** Cores com contraste adequado (WCAG)
- **Responsividade:** Design que funciona em todos os dispositivos

### SEO
- **Meta Tags:** Título, descrição e keywords otimizados
- **Open Graph:** Compartilhamento em redes sociais
- **Structured Data:** Marcação semântica para buscadores
- **Canonical URLs:** Prevenção de conteúdo duplicado
- **Performance:** Core Web Vitals otimizados

### Manutenibilidade
- **Design System:** Tokens CSS reutilizáveis
- **Component Library:** Componentes padronizados
- **Naming Conventions:** Nomenclatura consistente
- **File Organization:** Estrutura de pastas lógica
- **Documentation:** Código autodocumentado

## 🎨 Componentes de Design

### Layout
- **Container:** Wrapper responsivo com max-width
- **Grid System:** Sistema de grid flexível
- **Spacing:** Espaçamentos consistentes

### Navigation
- **Header:** Navegação principal com menu mobile
- **Theme Toggle:** Alternador de tema claro/escuro
- **Smooth Scroll:** Navegação suave entre seções

### Content
- **Hero Section:** Seção principal com CTA
- **Service Cards:** Cards de serviços com ícones
- **Portfolio Grid:** Grid de projetos
- **Contact Form:** Formulário de contato validado

### Interactive Elements
- **Buttons:** Variantes primary, secondary, outline
- **Forms:** Componentes de formulário acessíveis
- **Animations:** Transições suaves e micros interações

## 🚀 Scripts Disponíveis

```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build
npm run lint         # Executa linting
```

## 📱 Suporte a Dispositivos

- **Desktop:** 1920px+ (design otimizado)
- **Laptop:** 1024px - 1919px
- **Tablet:** 768px - 1023px
- **Mobile Large:** 640px - 767px
- **Mobile:** 320px - 639px

## 🔧 Configurações

### Tailwind Config
- **Dark Mode:** class-based switching
- **Custom Colors:** Integração com CSS variables
- **Animations:** Configurações personalizadas
- **Responsive:** Breakpoints customizados

### Vite Config
- **Alias:** @ aponta para src/
- **Plugins:** React SWC, component tagger
- **Server:** Configurado para host :: porta 8080

## 📈 Performance Metrics

### Bundle Size
- **Chunk Splitting:** Divisão otimizada do código
- **Tree Shaking:** Remoção de código não utilizado
- **Compression:** Gzip/Brotli habilitado

### Core Web Vitals
- **LCP:** < 2.5s (Largest Contentful Paint)
- **FID:** < 100ms (First Input Delay)
- **CLS:** < 0.1 (Cumulative Layout Shift)

## 🛡️ Segurança

- **XSS Protection:** Sanitização de inputs
- **CSRF Protection:** Tokens em formulários
- **Content Security Policy:** Headers de segurança
- **HTTPS Only:** Redirecionamento forçado

## 🌐 Browser Support

- **Chrome:** 90+
- **Firefox:** 88+
- **Safari:** 14+
- **Edge:** 90+

## 📞 Informações de Contato

**Empresa:** Mynds Company  
**Website:** [Em desenvolvimento]  
**Localização:** Belo Horizonte, MG  
**Especialidade:** Marketing Digital e Desenvolvimento Web

---

*Documentação gerada em: Setembro 2025*  
*Última atualização: [Data atual]*