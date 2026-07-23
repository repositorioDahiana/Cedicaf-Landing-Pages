import medicinaIcon from "../../assets/Iconos/Aliados2.png";

import logo6 from "../../assets/images/LogoSura.png";
import logo7 from "../../assets/images/LogoSeguroBol.png";
import logo8 from "../../assets/images/LogoAxaColpatria.png";
import logo9 from "../../assets/images/LogoAllianz.png";
import logo10 from "../../assets/images/LogoPositiva.png";
import logo12 from "../../assets/images/LogoColmena.png";
import logo25 from "../../assets/images/LogoAsegSolCol.png";
import logo26 from "../../assets/images/LogoBMI.png";
import logo27 from "../../assets/images/LogoAurora.png";
import logo28 from "../../assets/images/LogoSeguros.png";
import logo29 from "../../assets/images/LogoEquidadSeguros.png";
import logo30 from "../../assets/images/LogoHDI.png";
import logo31 from "../../assets/images/LogoMapfre.png";
import logo32 from "../../assets/images/LogoPanAmerican.png";

const allies = [
  { name: "Seguros De Vida Suramericana S.A", icon: logo6 },
  { name: "Seguros Bolivar S.A.", icon: logo7 },
  { name: "Axa Colpatria Seguros De Vida S.A", icon: logo8 },
  { name: "Allianz Seguros De Vida S.A", icon: logo9 },
  { name: "Positiva Compañía De Seguros", icon: logo10 },
  { name: "Colmena Riesgos Laborales ARL", icon: logo12 },
  { name: "Aseguradora Solidaria De Colombia", icon: logo25 },
  { name: "Bmi Colombia Compañia De Seguros De Vida S.A.", icon: logo26 },
  { name: "Compañía De Seguros Aurora", icon: logo27 },
  { name: "Compañia Mundial de Seguros (polizas)", icon: logo28 },
  { name: "La Equidad Seguros De Vida", icon: logo29 },
  { name: "HDI Seguros Colombia (antes Liberty)", icon: logo30 },
  { name: "Mapfre Colombia Vida Seguros (Arl-Polizas De Salud Y Estudiantil)", icon: logo31 },
  { name: "Pan American Life De Colombia", icon: logo32 },
];

function AlliesPols() {
  return (
    <section className="allies-prepaid" id="polizas">

      <div className="allies-prepaid__container">

        {/* HEADER */}
        <div className="allies-prepaid__header">

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