import medicinaIcon from "../../assets/Iconos/Aliados4.png";

import logo18 from "../../assets/images/LogoSanitas.png";
import logo19 from "../../assets/images/LogoSOS.png";
import logo20 from "../../assets/images/LogoEmisanar.png";
import logo21 from "../../assets/images/LogoPolicia.png";
import logo23 from "../../assets/images/LogoMaisfen.png";


const allies = [
  { name: "Entidad Promotora De Salud Sanitas S.A.S", icon: logo18 },
  { name: "Servicio Occidental De Salud S.O.S.", icon: logo19 },
  { name: "Emssanar S.A.S", icon: logo20 },
  { name: "Regional De Aseguramiento En Salud N°4", icon: logo21 },
  { name: "Union Temporal Salud Integral Maisfen", icon: logo23 },

];

function AlliesRegEspcial() {
  return (
    <section className="allies-prepaid" id="regimenEsp">

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
                Régimen Especial y EPS
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

export default AlliesRegEspcial;