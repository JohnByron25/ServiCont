import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-accounting.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector("#servicios");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Oficina profesional de contadores"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-8">
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">+15 años de experiencia</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Confianza y experiencia en{" "}
            <span className="text-accent">contabilidad</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Servicios contables, tributarios y financieros profesionales para empresas 
            que buscan excelencia y transparencia en su gestión financiera.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={scrollToContact}
              className="btn-corporate bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg font-semibold group"
            >
              Solicitar Asesoría Gratuita
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={scrollToServices}
              className="btn-corporate btn-outline border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold"
            >
              Ver Servicios
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-1">100% Seguro</h3>
              <p className="text-sm text-white/80">Información protegida</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-3">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-1">+500 Clientes</h3>
              <p className="text-sm text-white/80">Empresas satisfechas</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-3">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-1">Certificados</h3>
              <p className="text-sm text-white/80">Contadores públicos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;