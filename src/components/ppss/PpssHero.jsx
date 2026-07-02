import heroBg from "../../assets/images/PPSS.png";
import controlIcon from "../../assets/Iconos/Vigilar.png";
import comunidadIcon from "../../assets/Iconos/ParticipacionComunitaria.png";
import capacitacionIcon from "../../assets/Iconos/Capacitacion.png";

function PpssHero() {
  return (
    <section
      className="ppss-hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="ppss-hero__overlay"></div>

      <div className="ppss-hero__container">
        <div className="ppss-hero__content">

          <h1 className="ppss-hero__title">
              Política de Participación {" "}
            <span className="text-gradient-blue">
              Social en Salud
            </span>
          </h1>

          <p className="ppss-hero__description">
            Conoce los ejes de nuestra Política Pública de Salud y
            Seguridad Social. Trabajamos para fortalecer la participación
            ciudadana, el control social y la rendición de cuentas en el
            sector salud.
          </p>

          {/* 🔥 STATS */}
          <div className="ppss-hero__stats">

            {/* CARD 1 */}
            <div className="ppss-hero__stat">
              <img src={controlIcon} alt="Control Social" />
              <div className="ppss-hero__text">
                <span className="ppss-hero__label">Control Social</span>
                <span className="ppss-hero__desc">Vigilancia ciudadana</span>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="ppss-hero__stat">
              <img src={comunidadIcon} alt="Participación Comunitaria" />
              <div className="ppss-hero__text">
                <span className="ppss-hero__label">Participación Comunitaria</span>
                <span className="ppss-hero__desc">Espacios de diálogo</span>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="ppss-hero__stat">
              <img src={capacitacionIcon} alt="Capacitación" />
              <div className="ppss-hero__text">
                <span className="ppss-hero__label">Capacitación</span>
                <span className="ppss-hero__desc">Formación continua</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default PpssHero;