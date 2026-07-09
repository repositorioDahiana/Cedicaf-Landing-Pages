import doc1 from "../../assets/images/Doctor1.png";
import doc2 from "../../assets/images/Doctor2.png";
import doc3 from "../../assets/images/Doctor3.png";
import doc4 from "../../assets/images/Doctor4.jpeg";
import doc5 from "../../assets/images/Doctor5.jpeg";
import doc6 from "../../assets/images/Doctor6.png";

const specialists = [
      {
        id: 1,
        name: "Dra. Margarita Maria Patiño Arenas",
        specialty: "Médica Especialista en Radiología",
        experience: "Radiólogo",
        image: doc1
      },
      {
        id: 2,
        name: "Dra. Ingrid Vivas",
        specialty: "Médica Especialista en Radiología , Especialista en Imágenes de la mama",
        experience: "Radiólogo / Especialista en Imágenes de la mama",
        image: doc2,
      },
      {
        id: 3,
        name: "Dr. Juan Pablo Ovalle",
        specialty: "Médico Especialista en Radiología Fellow en Neurorradiología",
        experience: "Neurorradiólogo",
        image: doc3
      },
      {
        id: 4,
        name: "Dr. Jairo Leon Acevedo",
        specialty: "Médico Internista / Especialista en Cardióloga / Subespecialista en diagnostico no invasivo",
        experience: "Cardiólogo",
        image: doc4,
      },
      {
        id: 5,
        name: "Dr. Alonso Gómez García",
        specialty: "Médico Especialista en Pediatría, subespecialista en Cardiología pediátrica hemodinamia en cardiopatías congénitas",
        experience: "Cardiólogo Pediátria",
        image: doc5,
      },
      {
        id: 6,
        name: "Dr. Luis Fernando Grisales",
        specialty: "Director Científico Médico Especialista en radiología , Fellow en Próstata",
        experience: "Radiólogo",
        image: doc6,
      },
];

function SpecialistsGrid() {
  return (
    <section className="specialists-grid" id="equipo">
      <div className="specialists-grid__container">

        {/* HEADER CON TU FORMATO DE GRADIENTE SPAN DE CEDICAF */}
        <div className="specialists-grid__header">
          <h2 className="specialists-grid__title">
            Conoce a Nuestros <span>Especialistas</span>
          </h2>

          <p className="specialists-grid__description">
            La experiencia y el conocimiento médico al servicio de tu salud. Nuestro equipo combina años de trayectoria clínica con la máxima vocación humana.
          </p>
        </div>

        {/* GRID */}
        <div className="specialists-grid__content">
          {specialists.map((doc) => (
            <article key={doc.id} className="specialist-card">

              {/* IMAGE */}
              <div className="specialist-card__image">
                <img src={doc.image} alt={doc.name} />
              </div>

              {/* INFO LIMPIA Y CONTROLADA */}
              <div className="specialist-card__info">
                <h3 className="specialist-card__name">{doc.name}</h3>

                <span className="specialist-card__specialty">
                  {doc.specialty}
                </span>
                
                {/* TAG / ATRIBUTO DE EXPERIENCIA AL PIE DE LA TARJETA */}
                <div className="specialist-card__tags">
                  <span>{doc.experience}</span>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SpecialistsGrid;