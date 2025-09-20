import { Target, Heart, Handshake, Award } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Precisión",
      description: "Cada número cuenta. Trabajamos con el máximo rigor y atención al detalle."
    },
    {
      icon: Heart,
      title: "Compromiso",
      description: "Tu éxito es nuestro éxito. Nos comprometemos con el crecimiento de tu empresa."
    },
    {
      icon: Handshake,
      title: "Transparencia",
      description: "Comunicación clara y honesta en todos nuestros procesos y servicios."
    },
    {
      icon: Award,
      title: "Excelencia",
      description: "Buscamos la excelencia en cada servicio que brindamos a nuestros clientes."
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sobre Nosotros
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos un equipo de contadores públicos especializados con más de 15 años 
            de experiencia brindando servicios contables y financieros de calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-elevated)]">
              <img 
                src={teamPhoto}
                alt="Equipo profesional de contadores"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-[var(--shadow-elevated)] border border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Años de experiencia</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Experiencia y Confiabilidad
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Desde nuestros inicios, hemos acompañado a empresas de diversos sectores 
                en su crecimiento y consolidación financiera. Nuestro enfoque se basa en 
                construir relaciones duraderas basadas en la confianza mutua y resultados tangibles.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Contamos con un equipo multidisciplinario de contadores públicos, 
                especialistas en tributación y consultores financieros certificados, 
                todos comprometidos con la excelencia y el servicio personalizado.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-secondary rounded-xl">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Clientes satisfechos</div>
              </div>
              <div className="text-center p-4 bg-secondary rounded-xl">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Tasa de retención</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Nuestros Valores
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;