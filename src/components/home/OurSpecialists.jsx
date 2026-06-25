import { useEffect, useRef } from "react";

// Recuerda importar tus imágenes de los especialistas de Cedicaf aquí
import doc1 from "../../assets/images/Doctor1.png";
import doc2 from "../../assets/images/Doctor2.png";
import doc3 from "../../assets/images/Doctor3.png";
import doc4 from "../../assets/images/Doctor4.jpeg";
import doc5 from "../../assets/images/Doctor5.jpeg";
import doc6 from "../../assets/images/Doctor6.png";

function OurSpecialists() {
  const specialistCarouselRef = useRef(null);
  const isScrollingRef = useRef(false);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const container = specialistCarouselRef.current;
    let animationFrameId;

    const autoScroll = () => {
      if (container && !isScrollingRef.current && !isHoveredRef.current) {
        container.scrollLeft += 1;
        
        const jumpDistance = container.scrollWidth / 2;

        if (container.scrollLeft >= jumpDistance) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);
  
  const specialists = [
    {
      id: 1,
      name: "Dra. Margarita Maria Patiño Arenas",
      specialty: "Médico Radiólogo",
      experience: "Radiólogo",
      image: doc1
    },
    {
      id: 2,
      name: "Dra. Ingrid Vivas",
      specialty: "Médico Radiólogo / Especialista en mamas",
      experience: "Radiólogo",
      image: doc2,
    },
    {
      id: 3,
      name: "Dr. Juan Pablo Ovalle",
      specialty: "Médico Neurorradiólogo Diagnostico / Neurorradiólogo",
      experience: "Neurorradiólogo",
      image: doc3
    },
    {
      id: 4,
      name: "Dr. Jairo Leon Acevedo",
      specialty: "Médico Internista / Especialista en Cardióloga / Subespecialista en diagnostico no invasivo",
      experience: "Cardiólogo",
      image: doc4,
    },
    {
      id: 5,
      name: "Dr. Alonso Gómez García",
      specialty: "Médico Especialista en Pediátria y en Hemodinamia en Cardiopatías Congénita",
      experience: "Cardiólogo Pediátria",
      image: doc5,
    },
    {
      id: 6,
      name: "Dr. Luis Fernando Grisales",
      specialty: "Médico Radiólogo / Director Científico Fellow Resonancia de Prostata",
      experience: "Radiólogo",
      image: doc6,
    },
  ];

  const duplicatedSpecialists = [...specialists, ...specialists];

  const handleScroll = (direction) => {
    const container = specialistCarouselRef.current;
    if (container) {
      isScrollingRef.current = true;
      
      const jumpDistance = container.scrollWidth / 2;
      const scrollAmount = 340; // Ancho de tarjeta + gap

      if (direction === "left") {
        if (container.scrollLeft <= 10) {
          container.scrollLeft = jumpDistance;
        }
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        if (container.scrollLeft >= jumpDistance - scrollAmount) {
          container.scrollLeft = container.scrollLeft - jumpDistance;
        }
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
      
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 600);
    }
  };

  return (
    <section className="specialists">
      <div className="specialists__container">

        {/* HEADER DE CEDICAF */}
        <div className="specialists__header">
          <h2 className="specialists__title">
            Nuestros <span>Especialistas</span>
          </h2>
          <p className="specialists__description">
            Contamos con un equipo médico de primer nivel, altamente calificado y comprometido con brindarte un diagnóstico preciso y una atención con calidez humana.
          </p>
          <div className="specialists__line"></div>
        </div>

        {/* CONTENEDOR INTERMEDIO DEL CARRUSEL */}
        <div 
          className="specialists__carousel-container"
          onMouseEnter={() => { isHoveredRef.current = true; }}
          onMouseLeave={() => { isHoveredRef.current = false; }}
        >
          
          <button 
            className="specialist-nav-btn specialist-nav-btn--left" 
            onClick={() => handleScroll("left")}
            aria-label="Anterior"
          >
            ‹
          </button>

          <div className="specialists__carousel-wrapper" ref={specialistCarouselRef}>
            <div className="specialists__carousel">
              {duplicatedSpecialists.map((doctor, index) => (
                <article 
                  key={`${doctor.id}-${index}`} 
                  className="specialists__card"
                >
                  <div className="specialists__image-box">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name} 
                      className="specialists__img" 
                    />
                    <div className="specialists__badge">
                      {doctor.experience}
                    </div>
                  </div>

                  <div className="specialists__card-body">
                    <h3 className="specialists__card-name">{doctor.name}</h3>
                    <div className="specialists__card-divider"></div>
                    <p className="specialists__card-specialty">{doctor.specialty}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button 
            className="specialist-nav-btn specialist-nav-btn--right" 
            onClick={() => handleScroll("right")}
            aria-label="Siguiente"
          >
            ›
          </button>

        </div>

      </div>
    </section>
  );
}

export default OurSpecialists;