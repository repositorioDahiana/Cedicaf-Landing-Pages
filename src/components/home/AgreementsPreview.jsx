import { Link } from "react-router-dom";


import logo1 from "../../assets/images/LogoCoomeva.png";
import logo2 from "../../assets/images/LogoColsanitas.png";
import logo3 from "../../assets/images/LogoColmedica.png";
import logo4 from "../../assets/images/LogoMedisanitas.png";
import logo5 from "../../assets/images/LogoMedPlus.png";
import logo6 from "../../assets/images/LogoSura.png";
import logo7 from "../../assets/images/LogoSeguroBol.png";
import logo8 from "../../assets/images/LogoAxaColpatria.png";
import logo9 from "../../assets/images/LogoAllianz.png";
import logo10 from "../../assets/images/LogoPositiva.png";
import logo11 from "../../assets/images/LogoNestle.png";
import logo12 from "../../assets/images/LogoColmena.png";
import logo13 from "../../assets/images/LogoPreviser.png";
import logo14 from "../../assets/images/LogoSentir.png";
import logo15 from "../../assets/images/LogoHemato.png";
import logo16 from "../../assets/images/LogoOpositiva.png";
import logo17 from "../../assets/images/LogoSisa.png";
import logo18 from "../../assets/images/LogoSanitas.png";
import logo19 from "../../assets/images/LogoSOS.png";
import logo20 from "../../assets/images/LogoEmisanar.png";
import logo21 from "../../assets/images/LogoPolicia.png";
import logo22 from "../../assets/images/LogoCasur.png";
import logo23 from "../../assets/images/LogoMaisfen.png";
import logo24 from "../../assets/images/LogoAxaColpatria.png";
import logo25 from "../../assets/images/LogoAsegSolCol.png";
import logo26 from "../../assets/images/LogoBMI.png";
import logo27 from "../../assets/images/LogoAurora.png";
import logo28 from "../../assets/images/LogoSeguros.png";
import logo29 from "../../assets/images/LogoEquidadSeguros.png";
import logo30 from "../../assets/images/LogoHDI.png";
import logo31 from "../../assets/images/LogoMapfre.png";
import logo32 from "../../assets/images/LogoPanAmerican.png";
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

function AgreementsPreview() {
  const categories = [
    {
      id: "medicina-prepagada",
      title: "Medicina Prepagada",
      description: "Atención preferencial y ágil con las mejores entidades de medicina prepagada.",
      allies: [
        { name: "Coomeva", icon: logo1 },
        { name: "Colsanitas S.A.", icon: logo2 },
        { name: "Colmedica S.A.", icon: logo3 },
        { name: "Medisanitas", icon: logo4 },
        { name: "Medplus S.A", icon: logo5 },
        { name: "Axa Colpatria Medicina Prepagada y Polizas", icon: logo24 },
        { name: "Compañía De Seguros Bolívar", icon: logo7 },
      ]
    },
    {
      id: "polizas",
      title: "Pólizas de Salud",
      description: "Cobertura amplia a través de pólizas de salud para tu tranquilidad.",
      allies: [
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
      ]
    },
    {
      id: "empresas",
      title: "Convenios Empresas",
      description: "Beneficios exclusivos para empleados y colaboradores de empresas aliadas.",
      allies: [
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
      ]
    },
    {
      id: "regimen-especial",
      title: "Régimen Especial y EPS",
      description: "Atención especializada para usuarios de regímenes de salud especiales y EPS.",
      allies: [
        { name: "Entidad Promotora De Salud Sanitas S.A.S", icon: logo18 },
        { name: "Servicio Occidental De Salud S.O.S.", icon: logo19 },
        { name: "Emssanar S.A.S", icon: logo20 },
        { name: "Regional De Aseguramiento En Salud N°4", icon: logo21 },
        { name: "Union Temporal Salud Integral Maisfen", icon: logo23 },
      ]
    },
  ];

  return (
    <section className="agreements-preview">
      <div className="agreements-preview__container">
        
        <div className="agreements-preview__header">
          <h2 className="agreements-preview__title">
            Nuestros <span>Convenios</span>
          </h2>
          {/* Se eliminó la clase externa e individualista .section-line-blue */}
          <div className="agreements-preview__line"></div>
          <p className="agreements-preview__description">
            Trabajamos con las principales aseguradoras, entidades y empresas del país para brindarte un servicio accesible y de calidad.
          </p>
        </div>

        <div className="agreements-preview__grid">
          {categories.map((category) => (
            <article key={category.id} className="agreement-card">
              <div className="agreement-card__content">
                <h3 className="agreement-card__title">{category.title}</h3>
                <p className="agreement-card__description">{category.description}</p>
              </div>
              
              <div className="agreement-card__marquee-container">
                <div 
                  className="agreement-card__marquee"
                  style={{ animationDuration: `${category.allies.length * 6}s` }}
                >
                  {/* Duplicado para loop infinito fluido */}
                  {[...category.allies, ...category.allies].map((ally, index) => (
                    <div key={`${category.id}-ally-${index}`} className="agreement-card__ally">
                      <img src={ally.icon} alt={ally.name} className="agreement-card__ally-icon" />
                      <span className="agreement-card__ally-name">{ally.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      <div className="agreements-preview__actions">
        <Link to="/allies" className="btn-base agreements-preview__btn">
          Ver todos los convenios <span style={{ transition: 'transform 0.2s', display: 'inline-block' }}>→</span>
        </Link>
      </div>
      </div>
    </section>
  );
}

export default AgreementsPreview;