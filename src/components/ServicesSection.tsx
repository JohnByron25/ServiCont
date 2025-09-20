import { Calculator, FileText, TrendingUp, Search, Users, PieChart } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Calculator,
      title: "Contabilidad General",
      description: "Llevamos la contabilidad completa de tu empresa con precisión y cumplimiento normativo. Registros diarios, balances y estados financieros."
    },
    {
      icon: FileText,
      title: "Asesoría Tributaria",
      description: "Te ayudamos a optimizar tu carga fiscal y cumplir con todas las obligaciones tributarias de manera eficiente y oportuna."
    },
    {
      icon: TrendingUp,
      title: "Declaraciones de Impuestos",
      description: "Preparación y presentación de declaraciones de renta, IVA, retenciones y demás obligaciones fiscales."
    },
    {
      icon: Search,
      title: "Auditoría Interna",
      description: "Evaluación independiente de tus procesos financieros para identificar oportunidades de mejora y control de riesgos."
    },
    {
      icon: Users,
      title: "Consultoría Financiera",
      description: "Análisis financiero estratégico, proyecciones, presupuestos y asesoría para la toma de decisiones empresariales."
    },
    {
      icon: PieChart,
      title: "Análisis de Costos",
      description: "Determinación de costos de producción, análisis de rentabilidad y optimización de recursos empresariales."
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ofrecemos un portafolio completo de servicios contables y financieros 
            diseñados para impulsar el crecimiento y éxito de tu empresa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-elevated p-8 hover-lift group cursor-pointer"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-1 bg-gradient-primary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white border border-border rounded-2xl p-8 max-w-2xl mx-auto shadow-[var(--shadow-card)]">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿Necesitas un servicio específico?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contáctanos para una consulta personalizada y descubre cómo podemos 
              ayudar a optimizar la gestión financiera de tu empresa.
            </p>
            <button 
              onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-corporate btn-primary px-8 py-3 font-semibold"
            >
              Solicitar Consulta Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;