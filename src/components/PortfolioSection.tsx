import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp } from "lucide-react";
import portfolioImage from "@/assets/before-after-portfolio.jpg";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      title: "Salão Beleza & Estilo",
      category: "Salão de Beleza",
      description:
        "Transformação digital completa com site, Instagram e Google Meu Negócio",
      results: "+150% agendamentos online",
      image: portfolioImage,
      tags: ["Site", "Redes Sociais", "Google Maps"],
    },
    {
      title: "Clínica Dr. Santos",
      category: "Clínica Médica",
      description:
        "Presença digital profissional com foco em agendamentos e credibilidade",
      results: "+200% consultas mensais",
      image: portfolioImage,
      tags: ["Site", "Marketing Digital", "WhatsApp Business"],
    },
    {
      title: "Loja da Vila",
      category: "Loja de Bairro",
      description: "E-commerce local com delivery e presença nas redes sociais",
      results: "+300% vendas online",
      image: portfolioImage,
      tags: ["E-commerce", "Delivery", "Redes Sociais"],
    },
    {
      title: "Academia Corpo & Mente",
      category: "Academia",
      description:
        "Marketing digital com foco em conversão e retenção de alunos",
      results: "+100 novos alunos",
      image: portfolioImage,
      tags: ["Campanhas", "Site", "Instagram"],
    },
    {
      title: "Restaurante Sabor Mineiro",
      category: "Restaurante",
      description: "Presença digital completa com cardápio online e delivery",
      results: "+250% pedidos delivery",
      image: portfolioImage,
      tags: ["Cardápio Digital", "Delivery", "Google Maps"],
    },
    {
      title: "Loja TechMobile",
      category: "Loja de Eletrônicos",
      description:
        "E-commerce moderno com integração WhatsApp e campanhas direcionadas",
      results: "+180% vendas online",
      image: portfolioImage,
      tags: ["E-commerce", "Campanhas", "WhatsApp"],
    },
  ];

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20 lg:mb-28">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 lg:mb-10">
            <span className="text-foreground">Nossos cases de</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Sucesso
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
            Veja como ajudamos negócios locais de Belo Horizonte a crescerem na
            internet. Cada projeto é uma história de sucesso real.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {portfolioItems.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-card transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={`Projeto ${item.title}`}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge
                    variant="secondary"
                    className="mb-2 bg-accent text-accent-foreground"
                  >
                    {item.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {item.description}
                </p>

                {/* Results */}
                <div className="flex items-center space-x-2 mb-4 p-3 bg-primary/5 rounded-lg">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">
                    {item.results}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* CTA */}
                <button className="flex items-center space-x-2 text-primary hover:text-primary-glow transition-colors group">
                  <span className="text-sm font-medium">Ver detalhes</span>
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Seu negócio pode ser o próximo sucesso!
            </h3>
            <p className="text-muted-foreground mb-6">
              Quer ver seu negócio crescer como estes? Vamos conversar sobre seu
              projeto.
            </p>
            <button
              className="bg-gradient-accent hover:shadow-glow transition-all duration-300 px-8 py-3 rounded-lg font-semibold text-accent-foreground"
              onClick={() =>
                window.open(
                  "https://wa.me/5531999999999?text=Olá! Vi o portfólio de vocês e gostaria de saber como podem me ajudar!",
                  "_blank"
                )
              }
            >
              Começar meu projeto agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
