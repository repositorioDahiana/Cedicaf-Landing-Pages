import historiaBg from "../../assets/images/QuienesSomos.png";

import sedesIcon from "../../assets/Iconos/ubicacion.png";
import isoIcon from "../../assets/Iconos/icontec.png";
import pacientesIcon from "../../assets/Iconos/ResonanciaPaciente.png";

function AboutHero() {
  return (
    <section
      className="about-hero"
      style={{ backgroundImage: `url(${historiaBg})` }}
    >
      <div className="about-hero__overlay"></div>

      <div className="about-hero__container">
        
        {/* CONTENIDO */}
        <div className="about-hero__content">
          <span className="about-hero__badge">
            Desde 1997 al servicio de la salud
          </span>

          <h1 className="about-hero__title">
            Quiénes <span className="text-gradient-blue">Somos</span>
          </h1>

          <p className="about-hero__description">
            CEDICAF centro de alta tecnología diagnóstica comprometido 
            con brindar estudios de imagenología precisos, oportunos y confiables. 
            Contamos con un equipo humano especializado y tecnología de vanguardia 
            para la realización de resonancia magnética, ecografía, radiología  y estudios 
            especializados, contribuyendo al diagnóstico temprano y a la toma de decisiones 
            médicas acertadas. Nuestra prioridad es ofrecer una experiencia cálida, segura y centrada en el paciente.
          </p>
        </div>        
      </div>
    </section>
  );
}

export default AboutHero;