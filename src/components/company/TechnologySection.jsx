import techImg from "../../assets/images/Tecnologia.png";

import equipoIcon from "../../assets/Iconos/ResonanciaPaciente.png";
import especialistasIcon from "../../assets/Iconos/Especialidad5.png";
import resultadosIcon from "../../assets/Iconos/Reporte.png";

function TechnologySection() {
  return (
    <section className="technology">

      <div className="technology__container">

        {/* HEADER */}
        <div className="technology__header">
          <h2 className="technology__title">
            Tecnología de vanguardia <span className="text-gradient-blue">para tu diagnóstico</span>
          </h2>

          <p className="technology__description">
            En CEDICAF contamos con equipos médicos de última generación que garantizan imágenes 
            de alta definición en menor tiempo, asegurando resultados precisos, confiables y cómodos para tu bienestar.
          </p>
        </div>

        {/* CONTENT */}
        <div className="technology__content">

          {/* IZQUIERDA - CARDS */}
          <div className="technology__list">

            <div className="tech-card">
              <div className="tech-card__icon">
                <img src={equipoIcon} alt="Equipos" />
              </div>
              <div>
                <h3>Equipos de Última Generación</h3>
                <p>Tecnología médica de punta para diagnósticos precisos</p>
              </div>
            </div>

            <div className="tech-card">
              <div className="tech-card__icon">
                <img src={especialistasIcon} alt="Especialistas" />
              </div>
              <div>
                <h3>Especialistas Certificados</h3>
                <p>Equipo médico altamente capacitado y experimentado</p>
              </div>
            </div>

            <div className="tech-card">
              <div className="tech-card__icon">
                <img src={resultadosIcon} alt="Resultados" />
              </div>
              <div>
                <h3>Resultados Rápidos</h3>
                <p>Entrega ágil de resultados a través de nuestro portal</p>
              </div>
            </div>

          </div>

          {/* DERECHA - IMAGEN */}
          <div className="technology__image">
            <img src={techImg} alt="Tecnología Médica" />
          </div>

        </div>

      </div>
    </section>
  );
}

export default TechnologySection;