import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import ferrari1 from "../../assets/Iconos/Ferrari1.png";
import ferrari2 from "../../assets/Iconos/Ferrari2.png";
import ferrari3 from "../../assets/Iconos/Ferrari3.png";
import ferrari4 from "../../assets/Iconos/Ferrari4.png";
import ferrari5 from "../../assets/Iconos/Ferrari5.png";
import ferrari6 from "../../assets/Iconos/Ferrari6.png";
import ferrari7 from "../../assets/Iconos/Ferrari7.png";

import img1 from "../../assets/images/Ferrari1.png"; 
import img2 from "../../assets/images/Ferrari2.png";
import img3 from "../../assets/images/Ferrari3.png";
import img4 from "../../assets/images/Ferrari4.png";
import img5 from "../../assets/images/Ferrari5.png";
import img6 from "../../assets/images/Ferrari6.png";
import img7 from "../../assets/images/Ferrari7.png";

function ServicesPreview() {
  const navigate = useNavigate();
  const carouselRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const services = [
    {
      id: 1,
      icon: ferrari1,
      bgImage: img1,
      title: "Resonancia de Corazón",
      description:
        "Un mapa perfecto en movimiento para proteger el motor de tu vida. Con esta tecnología avanzada evaluamos la estructura y el funcionamiento exacto de tu corazón en tiempo real, permitiendo detectar a tiempo cualquier alteración oculta. Es la tranquilidad de saber que tu salud cardiovascular está respaldada por la mayor precisión diagnóstica.",
      link: "/services",
    },
    {
      id: 2,
      icon: ferrari2,
      bgImage: img2,
      title: "Resonancia Multiparamétrica (de Próstata)",
      description:
        "La detección temprana y precisa es la clave para tu tranquilidad. Este examen de última generación combina múltiples parámetros avanzados para evaluar la próstata con una claridad milimétrica, identificando cualquier anomalía en sus etapas iniciales. Elige la tecnología más confiable para proteger tu bienestar con total certeza.",
      link: "/services",
    },
    {
      id: 4,
      icon: ferrari3,
      bgImage: img3, 
      title: "Resonancia de Glúteos",
      description:
        "Evaluación especializada y profunda para garantizar la salud de tus tejidos. Ya sea por control de biopolímeros, dolores localizados o seguimiento estético y muscular, este estudio te ofrece imágenes detalladas y nítidas de la zona. Encuentra respuestas claras y el respaldo médico que necesitas para actuar a tiempo.",
      link: "/services",
    },
    {
      id: 5,
      icon: ferrari4,
      bgImage: img4, 
      title: "Resonancia de Mama",
      description:"El cuidado de tu salud evoluciona con la máxima tecnología de diagnóstico mamario. Ideal como complemento especializado, este estudio de alta resolución detecta lesiones ocultas que otros exámenes no logran ver, brindándote un panorama integral y certero. Un paso adelante en prevención para cuidar lo que más importa.",
      link: "/services",
    },
    {
      id: 6,
      icon: ferrari5,
      bgImage: img5, 
      title: "Resonancia Protocolo Epilepsia",
      description:
        "Respuestas claras e imágenes de máxima resolución para el cuidado del cerebro. Diseñado bajo los estándares científicos más rigurosos, este protocolo mapea a detalle la estructura cerebral para localizar con precisión milimétrica los focos causantes de las crisis. El diagnóstico definitivo que tu especialista necesita para tu bienestar.",
      link: "/services",
    },
    {
      id: 7,
      icon: ferrari6,
      bgImage: img6, 
      title: "Medicina Nuclear",
      description:
        "Diagnósticos avanzados a nivel molecular para entender cómo funciona tu cuerpo por dentro. A través de tecnología de punta, visualizamos la actividad metabólica de tus órganos en tiempo real, permitiendo detectar enfermedades mucho antes de que alteren la anatomía. Precisión científica para tratamientos más oportunos y efectivos.",
      link: "/services",
    },
    {
      id: 8,
      icon: ferrari7,
      bgImage: img7, 
      title: "Cardiología",
      description:
        "Cuidamos cada latido con un enfoque médico integral, humano y especializado. Ponemos a tu disposición un equipo de cardiólogos expertos y tecnología diagnóstica avanzada para evaluar, prevenir y tratar la salud de tu corazón. El respaldo que necesitas para disfrutar cada momento con un corazón fuerte y seguro.",
      link: "/services",
    },
  ];

  const duplicatedServices = [...services, ...services];

  useEffect(() => {
    let animationFrameId;

    const scroll = () => {
      if (carouselRef.current && !isHovered) {
        carouselRef.current.scrollLeft += 1;

        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
          carouselRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  const scrollLeftBtn = () => {
    if (carouselRef.current) {
      if (carouselRef.current.scrollLeft < 350) {
        carouselRef.current.scrollLeft += carouselRef.current.scrollWidth / 2;
      }
      carouselRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRightBtn = () => {
    if (carouselRef.current) {
      if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2 - 350) {
        carouselRef.current.scrollLeft -= carouselRef.current.scrollWidth / 2;
      }
      carouselRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <section className="services-preview">
      <div className="services-preview__container">

        {/* HEADER ORIGINAL DE CEDICAF */}
        <div className="services-preview__header">
          <h2 className="services-preview__title">
            Nuestros <span>Servicios</span>
          </h2>

          <p className="services-preview__description">
            Ofrecemos un portafolio avanzado en diagnósticos de alta complejidad, 
            combinando la mejor tecnología médica con la atención oportuna que necesitas.
          </p>

          <div className="services-preview__line"></div>

          <div className="services-preview__top-action">
            <Link to="/services" className="services-preview__all-button">
              Ver todos los servicios
              <span className="services-preview__arrow">→</span>
            </Link>
          </div>
        </div>

        {/* CONTENEDOR DEL CARRUSEL CON FLECHAS MÁDICAS */}
        <div 
          className="services-preview__carousel-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Flecha Izquierda */}
          <button className="services-preview__arrow-btn left" onClick={scrollLeftBtn} aria-label="Anterior">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          <div className="services-preview__carousel-wrapper" ref={carouselRef}>
            <div className="services-preview__carousel">
            
              {duplicatedServices.map((service, index) => (
                <article
                  key={`${service.id}-${index}`}
                  className="services-preview__card"
                >
                  {/* Imagen de fondo del asset clínico */}
                  <div
                    className="services-preview__card-bg"
                    style={{
                      backgroundImage: service.bgImage ? `url(${service.bgImage})` : 'none',
                    }}
                  ></div>

                  {/* Capa oscura protectora de texto */}
                  <div className="services-preview__card-overlay"></div>

                  {/* Contenido arriba de las capas */}
                  <div className="services-preview__card-body">
                    <div className="services-preview__top">
                      <div className={`services-preview__icon-box ${service.id === 3 ? 'services-preview__icon-box--large' : ''}`}>
                        <img
                          src={service.icon}
                          alt={service.title}
                          className={`services-preview__icon ${service.id === 3 ? 'services-preview__icon--large' : ''}`}
                        />
                      </div>

                      <h3 className="services-preview__card-title">
                        {service.title.split("\n").map((line, idx) => (
                          <span key={idx} className="services-preview__card-title-line">
                            {line}
                          </span>
                        ))}
                      </h3>
                    </div>

                    <p className="services-preview__card-description">
                      {service.description}
                    </p>

                    <Link
                      to={service.link}
                      className="services-preview__card-button"
                    >
                      Ver más
                      <span className="services-preview__arrow">→</span>
                    </Link>
                  </div>
                </article>
              ))}

            </div>
          </div>

          {/* Flecha Derecha */}
          <button className="services-preview__arrow-btn right" onClick={scrollRightBtn} aria-label="Siguiente">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>

      </div>
    </section>
  );
}

export default ServicesPreview;