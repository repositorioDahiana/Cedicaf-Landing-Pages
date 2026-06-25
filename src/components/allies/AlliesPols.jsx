import heroBg from "../../assets/images/Aliados2.png";
import medicinaIcon from "../../assets/Iconos/Aliados2.png";

import logo6 from "../../assets/images/LogoSura.png";
import logo7 from "../../assets/images/LogoSeguroBol.png";
import logo8 from "../../assets/images/LogoAxaColpatria.png";
import logo9 from "../../assets/images/LogoAllianz.png";
import logo10 from "../../assets/images/LogoPositiva.png";


const allies = [
  { name: "Seguros De Vida Suramericana S.A", icon: logo6 },
  { name: "Seguros Bolivar S.A.", icon: logo7 },
  { name: "Axa Colpatria Seguros De Vida S.A", icon: logo8 },
  { name: "Allianz Seguros De Vida S.A", icon: logo9 },
  { name: "Positiva Compañía De Seguros", icon: logo10 },
];

function AlliesPols() {
  return (
    <section className="allies-prepaid" id="polizas">

      <div className="allies-prepaid__container">

        {/* HEADER */}
        <div
          className="allies-prepaid__header"
          style={{ backgroundImage: `url(${heroBg})` }}
        >

          <div className="allies-prepaid__overlay"></div>

          <div className="allies-prepaid__content">

            <div className="allies-prepaid__icon">

              <img
                src={medicinaIcon}
                alt="Medicina Prepagada"
              />

            </div>

            <div>

              <h2 className="allies-prepaid__title">
                Pólizas de Salud
              </h2>

              <p className="allies-prepaid__subtitle">
                5 entidades aliadas
              </p>

            </div>

          </div>

        </div>

        {/* GRID */}
        <div className="allies-prepaid__grid">

          {allies.map((item, index) => (
            <div className="allies-prepaid__card" key={index}>

              <div className="allies-prepaid__card-icon">

                <img
                  src={item.icon}
                  alt={item.name}
                />

              </div>

              <h3 className="allies-prepaid__card-title">
                {item.name}
              </h3>

              <span className="allies-prepaid__status">
                Convenio activo
              </span>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default AlliesPols;