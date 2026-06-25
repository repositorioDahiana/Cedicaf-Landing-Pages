import { useMemo, useState } from "react";

import ubi1 from "../../assets/images/Ubicacion1.png";
import ubi2 from "../../assets/images/Ubicacion2.jpg";
import ubi3 from "../../assets/images/Ubicacion3.png";
import ubi4 from "../../assets/images/Ubicacion4.jpg";
import ubi5 from "../../assets/images/Ubicacion5.png";

import ubicacionIcon from "../../assets/Iconos/Ubicacion.png";
import relojIcon from "../../assets/Iconos/Tiempo.png";

function LocationsPreview() {
  const [activeCity, setActiveCity] = useState("Pereira");

  const headquarters = [
    {
      id: 1,
      city: "Pereira",
      image: ubi1,
      title: "Cedicaf Sede Pereira",
      address: "Cra. 15 No 13-28 Barrio Los Alpes",
      schedule1: "L-V: 6:00 a.m. – 10:00 p.m.",
      schedule2: "S: 6:00 a.m. – 10:00 p.m.",
      featured: false,
      mapsUrl: "https://maps.google.com/?q=Cedicaf+Pereira+Los+Alpes",
    },
    {
      id: 2,
      city: "Armenia",
      image: ubi2,
      title: "Cedicaf Sede Armenia",
      address: "Cl 2 N 12-32 Alcázar",
      schedule1: "L-V: 24/7.",
      schedule2: "S: 6:00 a.m. – 12:00 p.m.",
      featured: false,
      mapsUrl: "https://maps.google.com/?q=Cedicaf+Armenia",
    },
    {
      id: 4,
      city: "Ibague",
      image: ubi4,
      title: "Cedicaf Sede Ibagué Resonancia",
      address: "Calle 18 No 7-102 Barrio Interlaken",
      schedule1: "L-V: 8:00 a.m. – 7:00 p.m.",
      schedule2: "S: 7:00 a.m. – 1:00 p.m.",
      featured: false,
      mapsUrl: "https://maps.google.com/?q=Cedicaf+Resonancia+Ibagué",
    },
    {
      id: 5,
      city: "Ibague",
      image: ubi4,
      title: "Cedicaf Sede Ibagué Medicina Nuclear",
      address: "Calle 18 N 7-88 Barrio Interlaken",
      schedule1: "L-V: 8:00 a.m. – 7:00 p.m.",
      schedule2: "S: 7:00 a.m. – 1:00 p.m.",
      featured: false,
      mapsUrl: "https://maps.google.com/?q=Cedicaf+Medicina+Nuclear+Ibagué",
    },
    {
      id: 6,
      city: "Tulua",
      image: ubi3,
      title: "Cedicaf Sede Tuluá",
      address: "Carrera 34 No 27-33",
      schedule1: "L-V: 6:00 a.m. – 10:00 p.m.",
      schedule2: "S: 6:00 a.m. – 10:00 p.m.",
      featured: false,
      mapsUrl: "https://maps.google.com/?q=Cedicaf+Tuluá",
    },
  ];

  const cities = ["Pereira", "Armenia", "Tulua", "Ibague"];

  const filteredHeadquarters = useMemo(() => {
    return headquarters.filter((item) => item.city === activeCity);
  }, [activeCity, headquarters]);

  // Redirección segura a Google Maps en nueva pestaña
  const handleCardClick = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="locations-preview" id="ubicacion">
      <div className="locations-preview__container">
        <div className="locations-preview__header">
          <h2 className="locations-preview__title">
            Nuestras <span>Ubicaciones</span>
          </h2>

          <div className="locations-preview__line"></div>

          <p className="locations-preview__description">
            Encuentra nuestra clínica más cercana y conoce nuestros horarios de atención.
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
              onClick={() => handleCardClick(item.mapsUrl)} // 🌟 Clic en toda la tarjeta activo
              style={{ cursor: "pointer" }}
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