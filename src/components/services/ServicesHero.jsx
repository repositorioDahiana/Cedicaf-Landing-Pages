import { useState, useEffect } from "react";

import img1 from "../../assets/images/Servicio1.png";
import img2 from "../../assets/images/Servicio2.png";
import img3 from "../../assets/images/Servicio3.png";

const slides = [
  {
    title: (
      <>
        El más alto estándar en <span>ayuda diagnóstica integral</span>
      </>
    ),
    description:
      "Descubre un portafolio de servicios médicos diseñado para darte respuestas exactas cuando más las necesitas. Con equipos de última generación en Resonancia Magnética, Medicina Nuclear, Tomografía y un laboratorio clínico de alta confianza, respaldamos tu bienestar con la precisión que los profesionales de la salud exigen.",
    image: img1,
  },
  {
    title: (
      <>
        Equipamiento de vanguardia para <span>resultados impecables</span>
      </>
    ),
    description:
      "Tu salud no da esperas. En Cedicaf integramos en un solo lugar tecnología médica avanzada en imágenes, Medicina Nuclear, Cardiología y Laboratorio Clínico. Vivirás una experiencia de atención ágil y segura, respaldada por especialistas comprometidos en transformar la tecnología en bienestar para tu vida.",
    image: img2,
  },
  {
    title: (
      <>
        Todo el soporte médico avanzado <span>en un solo lugar</span>
      </>
    ),
    description:
      "Desde una rutina de Laboratorio Clínico y monitoreo de Cardiología, hasta estudios de alta complejidad en Resonancia Magnética y Medicina Nuclear. En Cedicaf combinamos infraestructura digital de punta con la calidez humana que mereces, garantizando el camino más claro hacia tu recuperación.",
    image: img3,
  },
];

function ServicesHero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section
      className="services-hero"
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      <div className="services-hero__overlay"></div>

      <div className="services-hero__container">
        <div className="services-hero__content">
          <h1 className="services-hero__title">
            {slide.title}
          </h1>

          <p className="services-hero__description">
            {slide.description}
          </p>

          <div className="services-hero__actions">
            <a href="#servicios" className="btn-base btn-primary-brand">
              Ver más servicios
            </a>
          </div>

        </div>
      </div>

      {/* Flechas */}
      <button className="nav-arrow left" onClick={prevSlide}>
        ‹
      </button>

      <button className="nav-arrow right" onClick={nextSlide}>
        ›
      </button>
    </section>
  );
}

export default ServicesHero;