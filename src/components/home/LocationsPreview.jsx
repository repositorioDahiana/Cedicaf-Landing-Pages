import { useMemo, useState } from "react";

import losRosalesImg from "../../assets/images/Fondo.jpg";
import comfamiliarImg from "../../assets/images/Fondo.jpg";
import sanRafaelImg from "../../assets/images/Fondo.jpg";
import centroMedicoImg from "../../assets/images/Fondo.jpg";
import pinaresImg from "../../assets/images/Fondo.jpg";
import ubicacionIcon from "../../assets/Iconos/Ubicacion.png";
import relojIcon from "../../assets/Iconos/Tiempo.png";

function LocationsPreview() {
  const [activeCity, setActiveCity] = useState("Pereira");

  const headquarters = [
    {
      id: 1,
      city: "Pereira",
      image: losRosalesImg,
      title: "Cedicaf Sede Pereira",
      address: "Cra. 15 No 13-28 Barrio Los Alpes",
      schedule1: "L-V: 7:00 a.m. – 6:00 p.m.",
      schedule2: "S: 7:00 a.m. – 12:00 p.m.",
      featured: false,
    },
    {
      id: 2,
      city: "Armenia",
      image: comfamiliarImg,
      title: "Cedicaf Sede Armenia Resonancia",
      address: "Cl 2 N 12-32 Alcázar",
      schedule1: "L-V: 8:00 a.m. – 6:00 p.m.",
      schedule2: "S: 8:00 a.m. – 11:00 p.m.",
      featured: false,
    },
    {
      id: 3,
      city: "Armenia",
      image: sanRafaelImg,
      title: "Cedicaf Sede Armenia Tomografía",
      address: "Carrera 19 No. 12-32 Primer piso",
      schedule1: "Ambulatorios (L-S): 7:00 a.m. – 6:00 p.m.",
      schedule2: "S: 8:00 a.m. – 11:00 p.m.",
      featured: true,
    },
    {
      id: 4,
      city: "Ibague",
      image: centroMedicoImg,
      title: "Cedicaf Sede Ibagué Resonancia",
      address: "Calle 18 No 7-102 Barrio Interlaken",
      schedule1: "L-V: 6:00 a.m. – 4:00 p.m.",
      schedule2: "S: 7:00 a.m. – 12:00 p.m.",
      featured: false,
    },
    {
      id: 5,
      city: "Ibague",
      image: pinaresImg,
      title: "Cedicaf Sede Ibagué Medicina Nuclear",
      address: "Calle 18 N 7-88 Barrio Interlaken",
      schedule1: "L-V: 7:00 a.m. – 6:00 p.m.",
      schedule2: "S: 7:00 a.m. – 12:00 p.m.",
      featured: false,
    },

    {
      id: 6,
      city: "Tulua",
      image: losRosalesImg,
      title: "Cedicaf Sede Tuluá",
      address: "Carrera 34 No 27-33",
      schedule1: "L-V: 7:00 a.m. – 5:00 p.m.",
      schedule2: "S: 7:00 a.m. – 12:00 p.m.",
      featured: false,
    },
  ];

  const cities = ["Pereira", "Armenia", "Tulua", "Ibague"];

  const filteredHeadquarters = useMemo(() => {
    return headquarters.filter((item) => item.city === activeCity);
  }, [activeCity]);

  return (
    <section className="locations-preview" id="ubicacion">
      <div className="locations-preview__container">
        <div className="locations-preview__header">
          <h2 className="locations-preview__title">
            Nuestras <span>Ubicaciones</span>
          </h2>

          <div className="locations-preview__line"></div>

          <p className="locations-preview__description">
            Encuentra nuestra clínica más cercana y conoce nuestros horarios de
            atención.
          </p>

          <div className="locations-preview__tabs">
            {cities.map((city) => (
              <button
                key={city}
                type="button"
                className={`locations-preview__tab ${
                  activeCity === city ? "locations-preview__tab--active" : ""
                }`}
                onClick={() => setActiveCity(city)}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        <div className="locations-preview__grid">
          {filteredHeadquarters.map((item) => (
            <article
              key={item.id}
              className={`locations-preview__card ${
                item.featured ? "locations-preview__card--featured" : ""
              }`}
            >
              <div className="locations-preview__image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="locations-preview__image"
                />
              </div>

              <div className="locations-preview__content">
                <h3 className="locations-preview__card-title">{item.title}</h3>

                <div className="locations-preview__address">
                  <img
                    src={ubicacionIcon}
                    alt="Ubicación"
                    className="locations-preview__meta-icon"
                  />
                  <span>{item.address}</span>
                </div>

                <div className="locations-preview__schedule-box">
                  <div className="locations-preview__schedule-title">
                    <img
                      src={relojIcon}
                      alt="Horarios"
                      className="locations-preview__meta-icon"
                    />
                    <span>HORARIOS</span>
                  </div>

                  <p>{item.schedule1}</p>
                  <p>{item.schedule2}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LocationsPreview;