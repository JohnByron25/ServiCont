import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María González",
      position: "Directora Ejecutiva",
      company: "Innovación S.A.S.",
      content: "ServiCont ha sido fundamental en el crecimiento de nuestra empresa. Su profesionalismo y atención al detalle nos han permitido mantener nuestras finanzas en orden mientras nos enfocamos en nuestro negocio principal.",
      rating: 5
    },
    {
      name: "Carlos Rodríguez",
      position: "Gerente General",
      company: "TechSolutions Ltda.",
      content: "El equipo de ServiCont nos ayudó a optimizar nuestra estructura tributaria, generando ahorros significativos. Su asesoría estratégica es invaluable para cualquier empresa que busque crecer de manera sostenible.",
      rating: 5
    },
    {
      name: "Ana Patricia Herrera",
      position: "Fundadora",
      company: "Comercial del Norte",
      content: "La tranquilidad que nos brinda saber que nuestros temas contables están en manos expertas no tiene precio. Siempre están disponibles para resolver dudas y su servicio es impecable.",
      rating: 5
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            La confianza de nuestros clientes es nuestro mayor logro. Conoce sus experiencias 
            trabajando con nuestro equipo profesional.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-elevated p-8 hover-lift relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4 pt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-warning fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                <p className="text-sm text-primary font-medium">{testimonial.position}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white border border-border rounded-2xl p-8 max-w-2xl mx-auto shadow-[var(--shadow-card)]">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿Quieres ser parte de nuestros clientes satisfechos?
            </h3>
            <p className="text-muted-foreground mb-6">
              Únete a más de 500 empresas que confían en nuestros servicios profesionales 
              para el manejo de sus finanzas y obligaciones tributarias.
            </p>
            <button 
              onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-corporate btn-primary px-8 py-3 font-semibold"
            >
              Empezar Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;