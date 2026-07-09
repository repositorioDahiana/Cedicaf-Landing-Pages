import medicinaIcon from "../../assets/Iconos/Aliados3.png";

import logo11 from "../../assets/images/LogoNestle.png";
import logo13 from "../../assets/images/LogoPreviser.png";
import logo14 from "../../assets/images/LogoSentir.png";
import logo15 from "../../assets/images/LogoHemato.png";
import logo16 from "../../assets/images/LogoOpositiva.png";
import logo17 from "../../assets/images/LogoSisa.png";
import logo22 from "../../assets/images/LogoCasur.png";

const allies = [
  { name: "Nestle De Colombia S.A", icon: logo11 },
  { name: "Previser", icon: logo13 },
  { name: "Grupo Sentir S.A.S.", icon: logo14 },
  { name: "Hemato Oncologos S.A", icon: logo15 },
  { name: "Positiva Salud Integral Tulua S.A.S", icon: logo16 },
  { name: "SISA Soluciones Integrales En Salud SAS", icon: logo17 },
  { name: "Caja De Sueldos De Retiro De La Policia Nacional", icon: logo22 },
];

function AlliesConEmp() {
  return (
    <section className="allies-prepaid" id="convenioempre">

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
                Convenio Empresas
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

export default AlliesConEmp;