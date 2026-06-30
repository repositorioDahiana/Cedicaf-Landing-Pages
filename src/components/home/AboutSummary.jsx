import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import experienciaIcon from "../../assets/Iconos/Tiempo.png";
import sedesIcon from "../../assets/Iconos/Ubicacion.png";
import pacientesIcon from "../../assets/Iconos/paciente.png";
import especialidadesIcon from "../../assets/Iconos/ResonanciaPaciente.png";

function Counter({ start = 0, end, suffix = "", duration = 2000, infinite = false }) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (infinite) {
      const timer = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount >= end) {
            return start; 
          }
          return prevCount + 1; 
        });
      }, 1000); 

      return () => clearInterval(timer);
    } else {
      let currentStart = start;
      const totalRange = end - start;
      const increment = totalRange / (duration / 16);

      const timer = setInterval(() => {
        currentStart += increment;

        if (currentStart >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(currentStart));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [start, end, duration, infinite]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function AboutSummary() {
  const currentYear = new Date().getFullYear();
  const calculatedYears = currentYear - 1994;

  const stats = [
    {
      id: 1,
      icon: experienciaIcon,
      start: 0,
      end: calculatedYears,
      suffix: "+",
      label: "Años de Experiencia",
      iconClass: "about-summary__icon-box--blue",
      infinite: false,
    },
    {
      id: 2,
      icon: sedesIcon,
      start: 0,
      end: 5,
      suffix: "+",
      label: "Sedes en Colombia",
      iconClass: "about-summary__icon-box--blue",
      infinite: false,
    },
    {
      id: 3,
      icon: pacientesIcon,
      start: 350, 
      end: 401,  
      suffix: "K+",
      label: "Pacientes Atendidos",
      iconClass: "about-summary__icon-box--blue",
      infinite: true, 
    },
    {
      id: 4,
      icon: especialidadesIcon,
      start: 0,
      end: 4,
      suffix: "+",
      label: "Especialidades Médicas",
      iconClass: "about-summary__icon-box--blue",
      infinite: false,
    },
  ];

  return (
    <section className="about-summary">
      <div className="about-summary__container">
        <div className="about-summary__header">
          <h2 className="about-summary__title">
            ¿Por Qué <span>Elegirnos?</span>
          </h2>

          <p className="about-summary__description">
            Con más de {calculatedYears} años de experiencia, somos el centro líder en diagnósticos de alta 
            complejidad en la región, garantizando la precisión que tú y tu médico necesitan.
          </p>

          <div className="about-summary__line"></div>
        </div>

        <div className="about-summary__grid">
          {stats.map((item) => (
            <article key={item.id} className="about-summary__card">
              <div className={`about-summary__icon-box ${item.iconClass}`}>
                <img
                  src={item.icon}
                  alt={item.label}
                  className="about-summary__icon"
                />
              </div>

              <div className="about-summary__card-content">
                <h3 className="about-summary__number">
                  <Counter 
                    start={item.start} 
                    end={item.end} 
                    suffix={item.suffix} 
                    infinite={item.infinite}
                  />
                </h3>
                <p className="about-summary__label">{item.label}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="about-summary__highlight">
          <span className="about-summary__dot"></span>
          <p>
            Más de <strong>400,000 pacientes</strong> han confiado en nosotros
            para su diagnóstico médico.
          </p>
        </div>

        <div className="about-summary__actions">
          <Link to="/about" className="about-summary__button">
            Conoce más de nosotros
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutSummary;