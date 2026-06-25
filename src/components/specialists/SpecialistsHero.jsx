import especialistasHero from "../../assets/images/EspecialistaHero.png";

function SpecialistsHero() {
  return (
    <section
      className="specialists-hero"
      style={{ backgroundImage: `url(${especialistasHero})` }}
    >
      <div className="specialists-hero__overlay"></div>

      <div className="specialists-hero__container">
        <div className="specialists-hero__content">
          <h1 className="specialists-hero__title">
            Nuestro Equipo de{" "}
            <span className="text-gradient-brand">Especialistas</span>
          </h1>

          <p className="specialists-hero__description">
            Conoce a nuestro equipo multidisciplinario de médicos especialistas. Profesionales de primer nivel en constante actualización, comprometidos con la precisión diagnóstica, la ética profesional y la calidez humana que tú y tu familia necesitan en cada etapa de su atención
          </p>

          <div className="specialists-hero__actions">
            <a href="#equipo" className="btn-base btn-primary-brand">
              Ver Especialistas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialistsHero;