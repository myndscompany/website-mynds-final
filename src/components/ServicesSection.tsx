import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Smartphone, TrendingUp, CheckCircle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: MapPin,
      title: "Meu Negócio no Mapa",
      description:
        "Coloque seu negócio no Google Maps e apareça quando os clientes procurarem por você na região.",
      features: [
        "Tráfego Pago",
        "Grupo de suporte no WhatsApp",
        "Reuniões quinzenais para alinhamentos",
      ],
      price: "A partir de R$ 597/mês",
      highlight: false,
    },
    {
      icon: Smartphone,
      title: "Presença Digital Completa",
      description:
        "Site profissional + redes sociais para mostrar que seu negócio é moderno e confiável.",
      features: [
        "Tudo do plano básico, mais:",
        "Gestão de redes sociais",
        "Criação de conteúdo: 10 posts por mês (Incluindo vídeos curtos)",
        "Relatórios mensais completos: análise detalhada de performance, métricas e insights",
        "Otimização de anúncios",
      ],
      price: "A partir de R$ 749/mês",
      highlight: true,
    },
    {
      icon: TrendingUp,
      title: "Marketing que Vende",
      description:
        "Campanhas direcionadas para trazer mais clientes e aumentar suas vendas online.",
      features: [
        "Tudo do plano intermediário, mais:",
        "Criação de contenúdo: 20 posts por mês (Incluindo briefings e gravacões)",
        "Criação de landing pages",
        "Reunioes semanais de alinhamento e estratégia",
      ],
      price: "A partir de R$ 1.098/mês",
      highlight: false,
    },
  ];

  const handleWhatsApp = (serviceName: string) => {
    const message = `Olá! Tenho interesse no pacote "${serviceName}". Podem me enviar mais informações?`;
    window.open(
      `https://wa.me/5531999999999?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20 lg:mb-28">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 lg:mb-10">
            <span className="text-foreground">Nossos</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Pacotes
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
            Escolha o plano ideal para levar seu negócio para o próximo nível.
            Todos os pacotes incluem suporte dedicado e resultados garantidos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`relative transition-all duration-300 hover:shadow-card hover:scale-105 ${
                service.highlight
                  ? "border-primary shadow-elegant bg-gradient-to-br from-background to-primary/5"
                  : "hover:border-primary/50"
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-accent px-4 py-1 rounded-full text-sm font-semibold text-accent-foreground">
                    Mais Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
                    service.highlight ? "bg-gradient-primary" : "bg-primary/10"
                  }`}
                >
                  <service.icon
                    className={`h-8 w-8 ${
                      service.highlight
                        ? "text-primary-foreground"
                        : "text-primary"
                    }`}
                  />
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="pt-4 border-t border-border">
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-foreground">
                      {service.price}
                    </span>
                  </div>

                  <Button
                    className={`w-full ${
                      service.highlight
                        ? "bg-gradient-accent hover:shadow-glow"
                        : "bg-gradient-primary hover:shadow-elegant"
                    } transition-all duration-300`}
                    onClick={() => handleWhatsApp(service.title)}
                  >
                    Escolher este plano
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Não tem certeza qual é o melhor para você? Vamos conversar!
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => handleWhatsApp("Consultoria personalizada")}
          >
            Receber uma consultoria gratuita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
