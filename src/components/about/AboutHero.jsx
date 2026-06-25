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
            ?
          </p>
        </div>

        {/* STATS */}
        <div className="about-hero__stats">

          {/* Card 1 */}
          <article className="about-hero__statCard">
            <img src={sedesIcon} className="about-hero__statIcon" />

            <div className="about-hero__statText">
              <strong>+5 sedes</strong>
              <span>en Colombia</span>
            </div>
          </article>

          {/* Card 2 */}
          <article className="about-hero__statCard">
            <img src={isoIcon} className="about-hero__statIcon" />

            <div className="about-hero__statText">
              <strong>ISO 9001</strong>
              <span>Certificados</span>
            </div>
          </article>

          {/* Card 3 */}
          <article className="about-hero__statCard">
            <img src={pacientesIcon} className="about-hero__statIcon" />

            <div className="about-hero__statText">
              <strong>+500K</strong>
              <span>Pacientes</span>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}

export default AboutHero;