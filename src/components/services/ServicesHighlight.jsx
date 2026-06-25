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

const services = [
  {
    id: 1,
    title: "Resonancia de Corazón",
    description: "Un mapa perfecto en movimiento para proteger el motor de tu vida. Con esta tecnología avanzada evaluamos la estructura y el funcionamiento exacto de tu corazón en tiempo real, permitiendo detectar a tiempo cualquier alteración oculta. Es la tranquilidad de saber que tu salud cardiovascular está respaldada por la mayor precisión diagnóstica.",
    icon: ferrari1,
    image: img1,
  },
  {
    id: 2,
    title: "Resonancia Multiparamétrica (de Próstata)",
    description: "La detección temprana y precisa es la clave para tu tranquilidad. Este examen de última generación combina múltiples parámetros avanzados para evaluar la próstata con una claridad milimétrica, identificando cualquier anomalía en sus etapas iniciales. Elige la tecnología más confiable para proteger tu bienestar con total certeza.",
    icon: ferrari2,
    image: img2,
  },
  {
    id: 3,
    title: "Resonancia de Glúteos",
    description: "Evaluación especializada y profunda para garantizar la salud de tus tejidos. Ya sea por control de biopolímeros, dolores localizados o seguimiento estético y muscular, este estudio te ofrece imágenes detalladas y nítidas de la zona. Encuentra respuestas claras y el respaldo médico que necesitas para actuar a tiempo.",
    icon: ferrari3,
    image: img3,
  },
  {
    id: 4,
    title: "Resonancia de Mama",
    description: "El cuidado de tu salud evoluciona con la máxima tecnología de diagnóstico mamario. Ideal como complemento especializado, este estudio de alta resolución detecta lesiones ocultas que otros exámenes no logran ver, brindándote un panorama integral y certero. Un paso adelante en prevención para cuidar lo que más importa.",
    icon: ferrari4,
    image: img4,
  },
  {
    id: 5,
    title: "Resonancia Protocolo Epilepsia",
    description: "Respuestas claras e imágenes de máxima resolución para el cuidado del cerebro. Diseñado bajo los estándares científicos más rigurosos, este protocolo mapea a detalle la estructura cerebral para localizar con precisión milimétrica los focos causantes de las crisis. El diagnóstico definitivo que tu especialista necesita para tu bienestar.",
    icon: ferrari5,
    image: img5,
  },
  {
    id: 6,
    title: "Medicina Nuclear",
    description: "Diagnósticos avanzados a nivel molecular para entender cómo funciona tu cuerpo por dentro. A través de tecnología de punta, visualizamos la actividad metabólica de tus órganos en tiempo real, permitiendo detectar enfermedades mucho antes de que alteren la anatomía. Precisión científica para tratamientos más oportunos y efectivos.",
    icon: ferrari6,
    image: img6,
  },
  {
    id: 7,
    title: "Cardiología",
    description: "Cuidamos cada latido con un enfoque médico integral, humano y especializado. Ponemos a tu disposición un equipo de cardiólogos expertos y tecnología diagnóstica avanzada para evaluar, prevenir y tratar la salud de tu corazón. El respaldo que necesitas para disfrutar cada momento con un corazón fuerte y seguro.",
    icon: ferrari7,
    image: img7,
  },
];

function ServicesHighlight() {
  return (
    <section className="services-highlight" id="servicios">
      <div className="services-highlight__container">

        {/* HEADER INTEGRADO CON TU CLASE SPAN */}
        <div className="services-highlight__header">
          <h2 className="services-highlight__title">
            Estudios <span>Especializados</span>
          </h2>

          <p className="services-highlight__description">
            Ofrecemos un portafolio avanzado en diagnósticos de alta complejidad, combinando tecnología de vanguardia y precisión.
          </p>
        </div>

        {/* GRID */}
        <div className="services-highlight__grid">
          {services.map((item, index) => (
            <article
              key={item.id || index}
              className="service-card-flip"
            >
              <div className="service-card-flip__inner">

                {/* FRONT -> Cambiada la clase alterna a un estilo borgoña sutil */}
                <div
                  className={`service-card service-card--front ${index % 2 === 0 ? "service-card--brand-soft" : ""
                    }`}
                >
                  <div className="service-card__icon">
                    <img src={item.icon} alt={item.title} />
                  </div>

                  <div className="service-card__content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>

                {/* BACK */}
                <div className="service-card service-card--back">
                  <img src={item.image} alt={item.title} />
                </div>

              </div>
            </article>
          ))}
        </div>

        <div className="services-highlight__actions">
          <a href="#especialidad" className="btn-base agreements-preview__btn">
            Ver más servicios
          </a>
        </div>

      </div>
    </section>
  );
}

export default ServicesHighlight;