import medicinaIcon from "../../assets/Iconos/Aliados3.png";

import logo11 from "../../assets/images/LogoNestle.png";
import logo13 from "../../assets/images/LogoPreviser.png";
import logo14 from "../../assets/images/LogoSentir.png";
import logo15 from "../../assets/images/LogoHemato.png";
import logo16 from "../../assets/images/LogoOpositiva.png";
import logo17 from "../../assets/images/LogoSisa.png";
import logo22 from "../../assets/images/LogoCasur.png";
import logo34 from "../../assets/images/LogoFoncaficentro.png";
import logo35 from "../../assets/images/LogoParqueCafe.png";
import logo36 from "../../assets/images/LogoCardiomet.png";
import logo37 from "../../assets/images/LogoFondoEmpleadoQ.png";
import logo38 from "../../assets/images/LogoSecretaruaTolima.png";
import logo39 from "../../assets/images/LogoSanAngel.png";
import logo40 from "../../assets/images/LogoCMD.jpg";
import logo41 from "../../assets/images/LogoUniser.png";
import logo42 from "../../assets/images/LogoUnisalud.png";
import logo43 from "../../assets/images/LogoBenefiser.png";
import logo44 from "../../assets/images/LogoRenaser.png";
import logo45 from "../../assets/images/LogoProgresar.png";
import logo46 from "../../assets/images/LogoServifamiliar.png";
import logo47 from "../../assets/images/LogoConexion.png";
import logo48 from "../../assets/images/LogoContactoMed.png";
import logo49 from "../../assets/images/LogoQuindio.png";
import logo50 from "../../assets/images/LogoMedescuento.png";
import logo51 from "../../assets/images/LogoMedicalH.png";
import logo52 from "../../assets/images/LogoCentroRodrigo.png";
import logo53 from "../../assets/images/LogoClinimagenes.png";
import logo54 from "../../assets/images/LogoJohan.png";
import logo55 from "../../assets/images/LogoFisoMarsan.png";
import logo56 from "../../assets/images/LogoGranred.jpg";
import logo57 from "../../assets/images/LogoServimano.png";
import logo58 from "../../assets/images/LogoEmi.webp";
import logo59 from "../../assets/images/LogoFeser.png";
import logo60 from "../../assets/images/LogoBive.png";
import logo61 from "../../assets/images/LogoMedicenfer.png";
import logo62 from "../../assets/images/LogoVital.png";
import logo63 from "../../assets/images/LogoHuman.png";
import logo64 from "../../assets/images/LogoRisaralda.png";
import logo65 from "../../assets/images/LogoComfenalco.png";
import logo66 from "../../assets/images/LogoAmbiente.png";


const allies = [
  { name: "Nestle De Colombia S.A", icon: logo11 },
  { name: "Previser", icon: logo13 },
  { name: "Grupo Sentir S.A.S.", icon: logo14 },
  { name: "Hemato Oncologos S.A", icon: logo15 },
  { name: "Positiva Salud Integral Tulua S.A.S", icon: logo16 },
  { name: "SISA Soluciones Integrales En Salud SAS", icon: logo17 },
  { name: "Caja De Sueldos De Retiro De La Policia Nacional", icon: logo22 },
  { name: "Foncaficentro", icon: logo34 },
        { name: "Fundacion Parque De La Cultura Cafetera", icon: logo35 },
        { name: "Fundacion Cardiomet CEQUIN", icon: logo36 },
        { name: "Fondo de empleados de la universidad del quindio", icon: logo37 },
        { name: "Secretaria De Salud Tolima", icon: logo38 },
        { name: "Sanar San Angel", icon: logo39 },
        { name: "Clínica Medicina Deportiva", icon: logo40 },
        { name: "Uniser", icon: logo41 },
        { name: "Unisalud", icon: logo42 },
        { name: "Benefiser Maria Del Rosario Angulo Godoy", icon: logo43 },
        { name: "Maria Zoraida Zambrano Renaser", icon: logo44 },
        { name: "Progresar Oscar Eduardo Ricardo Marin", icon: logo45 },
        { name: "Servifamiliar (Nohora Alicia Muñoz)", icon: logo46 },
        { name: "Conexiones Y Salud", icon: logo47 },
        { name: "Contacto Medico", icon: logo48 },
        { name: "Deportes Quindio S.A", icon: logo49 },
        { name: "Med-Descuento", icon: logo50 },
        { name: "Medical Health", icon: logo51 },
        { name: "Melva Martinez Martinez-Centro Medico Rodrigo Arango", icon: logo52 },
        { name: "Clinimagenes", icon: logo53 },
        { name: "Dr. Johan F. Valderrama", icon: logo54 },
        { name: "Marsan Fisioterapia", icon: logo55 },
        { name: "Aliados Promotora De Servicios S.A.S (Granred)", icon: logo56 },
        { name: "Angela Agadir Cardona Rojas (Servimano)", icon: logo57 },
        { name: "Emi", icon: logo58 },
        { name: "Feser", icon: logo59 },
        { name: "Fundación Vive Con Bienestar", icon: logo60 },
        { name: "Medic-Enfer (Mauricio Marin)", icon: logo61 },
        { name: "Red Medica Vital", icon: logo62 },
        { name: "Hwcc Human Wellness Center Colombia S.A.S.", icon: logo63 },
        { name: "Caja de compensación Familiar de Risaralda", icon: logo64 },
        { name: "Comfenalco Quindio", icon: logo65 },
        { name: "Corporación Integral de Vivienda de Impacto Ambiental", icon: logo66 },
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