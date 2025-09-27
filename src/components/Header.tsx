import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X } from "lucide-react";
import newLogo from "../assets/favicon.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}

          <a href="/" className="flex items-center space-x-3">
            {/* A nova logo de IMAGEM */}
            <img
              src={newLogo}
              alt="Logo da Mynds Company"
              // Classes Tailwind para formato e estilo:
              // w-10 h-10: Tamanho
              // rounded-full: Formato redondo
              // object-cover: Garante que a imagem preencha o espaço sem distorcer
              // border-2 border-[var(--primary)]: Borda seguindo o Design System
              className="w-10 h-10 rounded-full object-cover border-2 border-[var(--primary)] shadow-md"
            />

            <span className="text-xl font-bold text-foreground hidden sm:inline">
              Mynds Company
            </span>
          </a>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            {/* 1. Início */}
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Início
            </button>

            {/* 2. Sobre Nós (Movido) */}
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre Nós
            </button>

            {/* 3. Certificados (Movido para 3ª posição) */}
            {/* Nota: Troquei o ID para "certificados" para ser consistente com o menu mobile. */}
            <button
              onClick={() => scrollToSection("certificados")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Certificados
            </button>

            {/* 4. Portfólio (Movido) */}
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Portfólio
            </button>

            {/* 5. Serviços (Movido) */}
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Serviços
            </button>

            {/* 6. Contato (Movido para última posição) */}
            <button
              onClick={() => scrollToSection("contato")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contato
            </button>
          </nav>
          {/* Theme Toggle, Login Button & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="outline" size="sm" className="hidden sm:flex">
              Login
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-foreground p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 px-4 border-t border-border bg-background">
            <nav className="flex flex-col space-y-6">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Portfólio
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Sobre Nós
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Contato
              </button>
              <div className="flex items-center space-x-2 pt-2">
                <ThemeToggle />
                <Button variant="outline" size="sm" className="w-fit">
                  Login
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
