import cardioIcon from "../../assets/Iconos/Especialidad1.png";
import consultaIcon from "../../assets/Iconos/Especialidad2.png";
import dopplerIcon from "../../assets/Iconos/Especialidad3.png";
import ecoIcon from "../../assets/Iconos/Especialidad4.png";
import ecIcon from "../../assets/Iconos/Especialidad5.png";

const specialties = [
  { 
    id: 1, 
    title: "Resonancia Magnética", 
    icon: cardioIcon, 
    desc: "Estudios de alta resolución para diagnósticos precisos. Incluye Resonancias Convencionales (simples, contrastadas y bajo sedación) y Estudios Especiales de última generación como Resonancia de Próstata, Glúteos, Enteroresonancia, Uroresonancia, Defecografía, y Angiorresonancias de cerebro y cuello." 
  },
  { 
    id: 2, 
    title: "Tomografía Computada (TAC)", 
    icon: consultaIcon, 
    desc: "Tecnología multicorte y reconstrucción tridimensional para imágenes milimétricas. Ofrecemos Tomografías Convencionales (simples, contrastadas y bajo sedación), así como Angiotomografías especializadas de cerebro, cuello, tórax y abdomen de alta velocidad." 
  },
  { 
    id: 3, 
    title: "Ecografías y Radiología", 
    icon: dopplerIcon, 
    desc: "Evaluación rápida y detallada de estructuras anatómicas. Contamos con el servicio de Radiografías Convencionales y Panorámicas, además de Ecografías Convencionales y estudios vasculares especializados con tecnología Doppler." 
  },
  { 
    id: 4, 
    title: "Cardiología Avanzada (Adultos y Pediátrica)", 
    icon: ecoIcon, 
    desc: "Cuidado integral de la salud cardiovascular para toda la familia. Incluye Consulta de Cardiología Adulto y Pediátrica, Electrocardiograma, Monitoreo de Presión (MAPA), Holter de ritmo cardíaco, Pruebas de Esfuerzo, Ecocardiograma Transtorácico y Ecocardiograma Stress con ejercicio." 
  },
  { 
    id: 5, 
    title: "Laboratorio Clínico de Alta Confianza", 
    icon: ecIcon, 
    desc: "Análisis y procesamiento ágil de pruebas con los más altos estándares de calidad. Servicio completo de toma de muestras de laboratorio clínico para chequeos preventivos, exámenes especializados y control de patologías." 
  },
];

function SpecialtiesGrid() {
  return (
    <section className="specialties" id="especialidad">
      <div className="specialties__container">

        {/* HEADER CON SPAN PARA DEGRADADO BORGOÑA */}
        <div className="specialties__header">
          <h2 className="specialties__title">
            Nuestras <span>Especialidades</span>
          </h2>

          <p className="specialties__description">
            Contamos con servicios médicos especializados y tecnología avanzada para entregar un soporte diagnóstico con la máxima precisión clínica.
          </p>
        </div>

        {/* GRID (Intercalado automático controlado por CSS) */}
        <div className="specialties__grid">
          {specialties.map((item) => (
            <article key={item.id} className="specialty-card">

              <div className="specialty-card__icon">
                <img src={item.icon} alt={item.title} />
              </div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SpecialtiesGrid;