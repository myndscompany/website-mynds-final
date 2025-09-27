import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-digital.jpg";

const HeroSection = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5531999999999?text=Olá! Vi o site de vocês e gostaria de saber mais sobre os serviços da Mynds Company.",
      "_blank"
    );
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center bg-gradient-hero relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={heroImage}
          alt="Digital transformation background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 lg:mb-12 animate-fade-in leading-tight">
            <span className="text-foreground">Posicionamos o seu</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              negocio
            </span>

            <span className="text-foreground"> no </span>

            <span className="text-accent">digital</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 lg:mb-16 max-w-4xl mx-auto animate-slide-up leading-relaxed px-4">
            Da estratégia ao resultado: fortalecemos sua presença online com
            performance e criatividade
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 justify-center items-center animate-scale-in px-4">
            <Button
              size="lg"
              className="bg-gradient-accent hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Fale com a gente no WhatsApp
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() =>
                document
                  .getElementById("servicos")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Quero saber mais
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 lg:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 text-center animate-fade-in px-4">
            <div className="py-6">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-3">
                50+
              </div>
              <div className="text-muted-foreground text-lg">
                Negócios transformados
              </div>
            </div>
            <div className="py-6">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-3">
                3 anos
              </div>
              <div className="text-muted-foreground text-lg">
                De experiência em BH
              </div>
            </div>
            <div className="py-6">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-3">
                100%
              </div>
              <div className="text-muted-foreground text-lg">
                Focados em resultados
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
