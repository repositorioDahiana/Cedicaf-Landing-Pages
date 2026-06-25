import heroBg from "../../assets/images/Convenios.png";
import aliadosIcon from "../../assets/Iconos/Convenio.png";
import tramitesIcon from "../../assets/Iconos/Agil.png";

function AlliesHero() {
  return (
    <section
      className="allies-hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* OVERLAY */}
      <div className="allies-hero__overlay"></div>

      <div className="allies-hero__container">

        <div className="allies-hero__content">

          <h1 className="allies-hero__title">
            Nuestros
            <span className="text-gradient-blue"> Aliados</span>
          </h1>

          <p className="allies-hero__description">
            En Cedicaf ampliamos nuestras fronteras para facilitarte el acceso a una medicina diagnóstica de alta calidad. Gracias a nuestras alianzas estratégicas con destacadas entidades del sector, cuentas con una amplia cobertura y convenios diseñados para tu comodidad y bienestar.
          </p>

          {/* STATS */}
          <div className="allies-hero__stats">

            {/* CARD 1 */}
            <div className="allies-hero__stat">

              <img
                src={aliadosIcon}
                alt="80 aliados"
              />

              <div className="allies-hero__text">

                <span className="allies-hero__label">
                  50 Aliados
                </span>

                <span className="allies-hero__desc">
                  Entidades nacionales
                </span>

              </div>

            </div>


            {/* CARD 3 */}
            <div className="allies-hero__stat">

              <img
                src={tramitesIcon}
                alt="Trámites ágiles"
              />

              <div className="allies-hero__text">

                <span className="allies-hero__label">
                  Trámites Ágiles
                </span>

                <span className="allies-hero__desc">
                  Gestión directa
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AlliesHero;