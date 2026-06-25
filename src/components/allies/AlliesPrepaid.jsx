import heroBg from "../../assets/images/Aliados1.png";
import medicinaIcon from "../../assets/Iconos/Aliados1.png";

// ICONOS CARDS
import logo1 from "../../assets/images/LogoCoomeva.png";
import logo2 from "../../assets/images/LogoColsanitas.png";
import logo3 from "../../assets/images/LogoColmedica.png";
import logo4 from "../../assets/images/LogoMedisanitas.png";
import logo5 from "../../assets/images/LogoMedPlus.png";



const allies = [
  { name: "Coomeva", icon: logo1 },
  { name: "Colsanitas S.A.", icon: logo2 },
  { name: "Colmedica S.A.", icon: logo3 },
  { name: "Medisanitas", icon: logo4 },
  { name: "Medplus S.A", icon: logo5 },

];

function AlliesPrepaid() {
  return (
    <section className="allies-prepaid" id="medicinaprepagada">

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
                Medicina Prepagada
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

export default AlliesPrepaid;