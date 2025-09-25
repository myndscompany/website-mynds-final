import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Target } from "lucide-react";
import teamImage from "@/assets/team-working.jpg";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Paixão por BH",
      description:
        "Somos apaixonados por nossa cidade e acreditamos no potencial dos negócios locais.",
    },
    {
      icon: Users,
      title: "Parceria Real",
      description:
        "Não somos apenas uma agência, somos parceiros no seu crescimento.",
    },
    {
      icon: Target,
      title: "Resultados Reais",
      description:
        "Focamos em métricas que importam: mais clientes, mais vendas, mais sucesso.",
    },
  ];

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20 lg:mb-28">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 lg:mb-10">
            <span className="text-foreground">Quem</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Somos
            </span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20 lg:mb-28">
            {/* Text Content */}
            <div className="space-y-8 lg:space-y-10">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                Três amigos que decidiram transformar negócios em Belo Horizonte
              </h3>

              <div className="space-y-6 lg:space-y-8 text-muted-foreground">
                <p className="text-lg lg:text-xl leading-relaxed">
                  A Mynds Company nasceu da nossa paixão por tecnologia e pelo
                  empreendedorismo local. Somos três sócios que se conheceram na
                  faculdade e perceberam uma oportunidade: muitos negócios
                  incríveis de BH estavam ficando para trás no mundo digital.
                </p>

                <p className="text-lg lg:text-xl leading-relaxed">
                  Em 2021, decidimos unir nossos conhecimentos em marketing
                  digital, desenvolvimento web e gestão de projetos para criar
                  uma agência que realmente entende as necessidades dos
                  empreendedores locais.
                </p>

                <p className="text-lg lg:text-xl leading-relaxed">
                  Hoje, já transformamos mais de 50 negócios, desde salões e
                  clínicas até lojas e restaurantes. Nossa missão é simples:
                  cuidar da presença digital para que nossos clientes possam
                  focar no que fazem de melhor.
                </p>
              </div>

              <div className="bg-primary/5 rounded-xl p-8 lg:p-10 border-l-4 border-primary">
                <p className="text-primary font-semibold italic text-lg">
                  "Acreditamos que todo negócio merece uma chance de brilhar na
                  internet, independente do tamanho ou orçamento."
                </p>
                <p className="text-muted-foreground mt-2">
                  — Equipe Mynds Company
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src={teamImage}
                  alt="Equipe Mynds Company trabalhando"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-6 shadow-card   border">
                <div className="text-3xl font-bold text-primary mb-1">
                  3 anos
                </div>
                <div className="text-sm text-muted-foreground">
                  aumentando faturamentos dos nossos clientes
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-background rounded-xl p-6 shadow-card border">
                <div className="text-3xl font-bold text-accent mb-1">50+</div>
                <div className="text-sm text-muted-foreground">
                  negócios atendidos
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-card transition-all duration-300 hover:scale-105"
              >
                <CardContent className="pt-10 pb-10 px-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-2xl flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-foreground">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Team CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-hero rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
                Pronto para conhecer nossa equipe?
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Vamos tomar um café e conversar sobre como podemos ajudar seu
                negócio a crescer.
              </p>
              <button
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
                onClick={() =>
                  window.open(
                    "https://wa.me/5531999999999?text=Olá! Gostaria de conhecer melhor a equipe da Mynds Company!",
                    "_blank"
                  )
                }
              >
                Agendar um papo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
