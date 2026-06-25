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
      ]
    },
    {
      id: "empresas",
      title: "Convenios Empresas",
      description: "Beneficios exclusivos para empleados y colaboradores de empresas aliadas.",
      allies: [
        { name: "Nestle De Colombia S.A", icon: logo11 },
        { name: "Colmena Riesgos Laborales ARL", icon: logo12 },
        { name: "Previser", icon: logo13 },
        { name: "Grupo Sentir S.A.S.", icon: logo14 },
        { name: "Hemato Oncologos S.A", icon: logo15 },
        { name: "Positiva Salud Integral Tulua S.A.S", icon: logo16 },
        { name: "SISA Soluciones Integrales En Salud SAS", icon: logo17 },
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
        { name: "Caja De Sueldos De Retiro De La Policia Nacional", icon: logo22 },
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