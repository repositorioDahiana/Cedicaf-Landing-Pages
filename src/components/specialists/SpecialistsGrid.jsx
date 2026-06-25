import doc1 from "../../assets/images/Doctor1.png";
import doc2 from "../../assets/images/Doctor2.png";
import doc3 from "../../assets/images/Doctor3.png";
import doc4 from "../../assets/images/Doctor4.jpeg";
import doc5 from "../../assets/images/Doctor5.jpeg";

const specialists = [
  {
    id: 1,
    name: "Dra. Margarita Maria Patiño Arenas",
    specialty: "Médico Radiólogo",
    experience: "Radiología",
    image: doc1
  },
  {
    id: 2,
    name: "Dra. Ingrid Vivas",
    specialty: "Médico Radiólogo / Especialista en mamas",
    experience: "Especialista en Mamas",
    image: doc2,
  },
  {
    id: 3,
    name: "Dr. Juan Pablo Ovalle",
    specialty: "Médico Neurorradiólogo Diagnóstico / Neurorradiólogo",
    experience: "Neurorradiología",
    image: doc3
  },
  {
    id: 4,
    name: "Dr. Jairo Leon Acevedo",
    specialty: "Médico Internista / Especialista en Cardiología / Subespecialista en diagnóstico no invasivo",
    experience: "Cardiología",
    image: doc4,
  },
  {
    id: 5,
    name: "Dr. Alonso Gómez García",
    specialty: "Médico Especialista en Pediatría y en Hemodinamia en Cardiopatías Congénitas",
    experience: "Pediatría / Hemodinamia",
    image: doc5,
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