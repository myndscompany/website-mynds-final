import { MapPin, Phone, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          {/* Logo and Description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold">Mynds Company</span>
            </div>
            <p className="text-secondary-foreground/80 max-w-md">
              Agência digital de Belo Horizonte especializada em transformar negócios locais 
              através da presença digital estratégica.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/myndscompany" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="mailto:contato@myndscompany.com.br"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>
                <a href="#servicos" className="hover:text-secondary-foreground transition-colors">
                  Meu Negócio no Mapa
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-secondary-foreground transition-colors">
                  Presença Digital Completa
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-secondary-foreground transition-colors">
                  Marketing que Vende
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-secondary-foreground transition-colors">
                  Consultoria Gratuita
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-secondary-foreground/80">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">(31) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">contato@myndscompany.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Belo Horizonte, MG<br />
                  Região Metropolitana
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-secondary-foreground/60">
              © {currentYear} Mynds Company. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm text-secondary-foreground/60">
              <a href="#" className="hover:text-secondary-foreground transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-secondary-foreground transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;