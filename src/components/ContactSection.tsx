import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em até 24 horas.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      business: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  const handleWhatsApp = () => {
    const message = `Olá! Meu nome é ${formData.name || "[Nome]"}. ${
      formData.business ? `Tenho um negócio: ${formData.business}. ` : ""
    }${
      formData.message ||
      "Gostaria de saber mais sobre os serviços da Mynds Company."
    }`;
    window.open(
      `https://wa.me/5531999999999?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="contato" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20 lg:mb-28">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 lg:mb-10">
            <span className="text-foreground">Vamos</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Conversar
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
            Pronto para transformar seu negócio? Entre em contato conosco e
            descubra como podemos ajudar você a alcançar seus objetivos
            digitais.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8 lg:space-y-10">
            <Card className="border-primary/20 hover:shadow-card transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  <span>WhatsApp</span>
                </CardTitle>
                <CardDescription>
                  A forma mais rápida de falar conosco
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                  onClick={() =>
                    window.open("https://wa.me/5531999999999", "_blank")
                  }
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  (31) 99999-9999
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-card transition-all duration-300">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">
                    contato@myndscompany.com.br
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">(31) 3333-4444</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Belo Horizonte, MG
                    <br />
                    Atendemos em todo o Brasil
                  </span>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-primary rounded-xl p-6 text-primary-foreground">
              <h3 className="text-lg font-semibold mb-2">
                Horário de Atendimento
              </h3>
              <div className="space-y-1 text-sm">
                <p>Segunda a Sexta: 9h às 18h</p>
                <p>Sábado: 9h às 12h</p>
                <p>WhatsApp: 24h (resposta em até 10 minutos)</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Solicitar Orçamento</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e entraremos em contato em até 24
                  horas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground mb-2 block"
                      >
                        Nome *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground mb-2 block"
                      >
                        E-mail *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium text-foreground mb-2 block"
                      >
                        Telefone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(31) 99999-9999"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="business"
                        className="text-sm font-medium text-foreground mb-2 block"
                      >
                        Nome do Negócio
                      </label>
                      <Input
                        id="business"
                        name="business"
                        value={formData.business}
                        onChange={handleInputChange}
                        placeholder="Ex: Salão Beleza & Estilo"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground mb-2 block"
                    >
                      Mensagem *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Conte um pouco sobre seu negócio e como podemos ajudar..."
                      rows={4}
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-gradient-primary hover:shadow-elegant transition-all duration-300"
                    >
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>

                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleWhatsApp}
                      className="flex-1 border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Enviar no WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
