import empresaImg from "../../assets/images/Empresa.png";

function CompanyHero() {
  return (
    <section className="company-hero">

      <div className="company-hero__container">

        {/* IZQUIERDA */}
        <div className="company-hero__content">
          <h1 className="company-hero__title">
            Nuestra <span className="text-gradient-brand">Empresa</span>
          </h1>

          <p className="company-hero__description">
            Somos el centro de diagnóstico elegido por miles de familias y profesionales de la salud. 
            En CEDICAF, cada resonancia, ecografía y estudio especializado se realiza bajo los más estrictos 
            estándares de seguridad y con la calidez humana que mereces, garantizando el diagnóstico temprano que cambia vidas.
          </p>

          {/* Cambiado a la clase del botón borgoña premium */}
          <a href="/contacto" className="btn-base btn-primary-brand">
            Conócenos más
          </a>

        </div>

        {/* DERECHA */}
        <div className="company-hero__image">

          <img src={empresaImg} alt="Nuestra empresa" />

        </div>

      </div>

    </section>
  );
}

export default CompanyHero;