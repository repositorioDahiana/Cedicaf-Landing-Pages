import peticionIcon from "../../assets/Iconos/Derecho2.png";
import quejaIcon from "../../assets/Iconos/Queja.png";
import reclamoIcon from "../../assets/Iconos/Reclamo.png";
import sugerenciaIcon from "../../assets/Iconos/Sugerencia.png";
import felicitacionIcon from "../../assets/Iconos/Felicidades.png";
import { useState } from "react";

function PQRSForm() {

  const [selectedType, setSelectedType] = useState("Petición");

  const [formData, setFormData] = useState({
    lugarAtencion: "",
    procedimiento: "",
  });

  const estudiosPorSede = {
    "pereira": [
      "Resonancias convencionales (simples, contrastadas y bajo sedación)",
      "Resonancias Especiales (Próstata, glúteos, Enteroresonancia, Uroresonancia y defecografía)",
      "Angiorresonancias de cerebro y cuello",
      "Resonancia con protocolo de Recto",
      "Resonancia de Corazón"
    ],
    "armenia": [
      "Resonancias convencionales (simples, contrastadas y bajo sedación)",
      "Resonancias Especiales (Próstata, glúteos, Enteroresonancia, Uroresonancia, defecografía y angiorresonancias de cerebro y cuello)",
      "Tomografías convencionales (simples, contrastadas y bajo sedación)",
      "Angiotomografías de cerebro, cuello, tórax y abdomen (Multicorte y tridimensional)"
    ],
    "ibague-resonancia": [
      "Resonancias convencionales (simples, contrastadas y bajo sedación)",
      "Resonancias Especiales (Próstata, glúteos, Enteroresonancia, Uroresonancia, defecografía y angiorresonancias de cerebro y cuello)"
    ],
    "ibague-medicina-nuclear": [
      "Resonancias convencionales (simples, contrastadas y bajo sedación)",
      "Resonancias Especiales (Próstata, glúteos, Enteroresonancia, Uroresonancia, defecografía y angiorresonancias de cerebro y cuello)",
      "Medicina Nuclear: Gammagrafías (corporal, tiroides, pulmonar), Perfusión miocárdica, Renograma y Captación Tiroidea 4-24 Horas"
    ],
    "tulua": [
      "Resonancias convencionales (simples, contrastadas y bajo sedación)",
      "Resonancias Especiales (Próstata, glúteos, Enteroresonancia, Uroresonancia, defecografía y angiorresonancias de cerebro y cuello)",
      "Tomografías convencionales (simples, contrastadas y bajo sedación)",
      "Angiotomografías de cerebro, cuello, tórax y abdomen (Multicorte y tridimensional)",
      "Radiografías convencionales y Panorámicas",
      "Ecografías convencionales y Doppler",
      "Consulta de Cardiología Adulto y Pediátrica",
      "Monitoreo de presión arterial (MAPA)",
      "Holter",
      "Electrocardiograma",
      "Pruebas de Esfuerzo",
      "Ecocardiograma Transtorácico",
      "Ecocardiograma Stress con Ejercicio",
      "Tomas de muestras de Laboratorio"
    ]
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="pqrs-form">

      <div className="pqrs-form__container">

        {/* HEADER */}
        <div className="pqrs-form__header">

          <h2 className="pqrs-form__title">
            Cuéntanos tu <span className="text-gradient-blue">experiencia</span>
          </h2>

          <p className="pqrs-form__description">
            Completa el siguiente formulario con los datos de tu solicitud.
            Todos los campos marcados con * son obligatorios.
          </p>

        </div>

        {/* CARD */}
        <div className="pqrs-form__card">

          {/* TIPOS */}
          <div className="pqrs-form__section">

            <label className="pqrs-form__label">
              Tipo de solicitud *
            </label>

            <div className="pqrs-form__types">

              <button
                className={`pqrs-form__type ${selectedType === "Petición" ? "active" : ""
                  }`}
                onClick={() => setSelectedType("Petición")}
                type="button"
              >
                <img src={peticionIcon} alt="Petición" />
                <span>Petición</span>
              </button>

              <button
                className={`pqrs-form__type ${selectedType === "Queja" ? "active" : ""
                  }`}
                onClick={() => setSelectedType("Queja")}
                type="button"
              >
                <img src={quejaIcon} alt="Queja" />
                <span>Queja</span>
              </button>

              <button
                className={`pqrs-form__type ${selectedType === "Reclamo" ? "active" : ""
                  }`}
                onClick={() => setSelectedType("Reclamo")}
                type="button"
              >
                <img src={reclamoIcon} alt="Reclamo" />
                <span>Reclamo</span>
              </button>

              <button
                className={`pqrs-form__type ${selectedType === "Sugerencia" ? "active" : ""
                  }`}
                onClick={() => setSelectedType("Sugerencia")}
                type="button"
              >
                <img src={sugerenciaIcon} alt="Sugerencia" />
                <span>Sugerencia</span>
              </button>

              <button
                className={`pqrs-form__type ${selectedType === "Felicitaciones" ? "active" : ""
                  }`}
                onClick={() => setSelectedType("Felicitaciones")}
                type="button"
              >
                <img src={felicitacionIcon} alt="Felicitaciones" />
                <span>Felicitaciones</span>
              </button>

            </div>

          </div>

          {/* FORM */}
          <div className="pqrs-form__grid">

            {/* LUGAR DE ATENCIÓN */}
            <div className="pqrs-form__group">
              <label>
                Lugar de atención <span>*</span>
              </label>

              <select
                name="lugarAtencion"
                value={formData.lugarAtencion}
                onChange={handleChange}
                required
              >
                <option value="">
                  Selecciona una sede
                </option>

                <option value="pereira">
                  Cedicaf Sede Pereira — Cra. 15 No 13-28 Barrio Los Alpes
                </option>

                <option value="armenia">
                  Cedicaf Sede Armenia — Cl 2 N 12-32 Alcázar
                </option>

                <option value="ibague-resonancia">
                  Cedicaf Sede Ibagué Resonancia — Calle 18 No 7-102 Barrio Interlaken
                </option>

                <option value="ibague-medicina-nuclear">
                  Cedicaf Sede Ibagué Medicina Nuclear — Calle 18 N 7-88 Barrio Interlaken
                </option>

                <option value="tulua">
                  Cedicaf Sede Tuluá — Carrera 34 No 27-33
                </option>

              </select>
            </div>

            <div className="pqrs-form__group">
              <label>Procedimiento realizado *</label>

              <select
                name="procedimiento"
                value={formData.procedimiento}
                onChange={handleChange}
                required
                disabled={!formData.lugarAtencion}
              >
                <option value="">
                  {formData.lugarAtencion ? "Selecciona un procedimiento" : "Primero selecciona una sede"}
                </option>
                {formData.lugarAtencion && estudiosPorSede[formData.lugarAtencion]?.map((estudio, index) => (
                  <option key={index} value={estudio}>
                    {estudio}
                  </option>
                ))}
              </select>
            </div>

            <div className="pqrs-form__group">
              <label>Quien interpone la petición *</label>

              <select>
                <option> Selecciona una opción </option>
                <option>Acompañante</option>
                <option>EPS</option>
                <option>Usuario</option>
                <option>Super Salud</option>
              </select>
            </div>

            <div className="pqrs-form__group">
              <label>Fecha del evento *</label>

              <input type="date" />
            </div>

            <div className="pqrs-form__group">
              <label>Nombre *</label>

              <input
                type="text"
                placeholder="Ingresa tu nombre"
              />
            </div>

            <div className="pqrs-form__group">
              <label>Apellido *</label>

              <input
                type="text"
                placeholder="Ingresa tu apellido"
              />
            </div>

            <div className="pqrs-form__group">
              <label>Documento de Identificación</label>

              <input
                type="text"
                placeholder="Número de cédula"
              />
            </div>

            <div className="pqrs-form__group">
              <label>Dirección de residencia</label>

              <input
                type="text"
                placeholder="Dirección completa"
              />
            </div>

            <div className="pqrs-form__group">
              <label>Correo electrónico *</label>

              <input
                type="email"
                placeholder="tu@email.com"
              />
            </div>

            <div className="pqrs-form__group">
              <label>Teléfono fijo</label>

              <input
                type="text"
                placeholder="(606) XXX XXXX"
              />
            </div>

            <div className="pqrs-form__group">
              <label>Teléfono celular *</label>

              <input
                type="text"
                placeholder="3XX XXX XXXX"
              />
            </div>

            <div className="pqrs-form__group">
              <label>Entidad *</label>
              <select>
                <option> Selecciona una opción </option>
                <option>EPS</option>
                <option>Medicina Prepagada</option>
                <option>Régimen especial</option>
                <option>SOAT</option>
              </select>
            </div>

            <div className="pqrs-form__group full">
              <label>Nombre del Funcionario</label>

              <input
                type="text"
                placeholder="Ej: Andres Ramirez"
              />
            </div>

            <div className="pqrs-form__group full">
              <label>
                Escribe aquí tu petición, queja, reclamo,
                sugerencia o felicitación *
              </label>

              <textarea
                rows="6"
                maxLength="500"
                placeholder="Describe con detalle tu solicitud..."
              ></textarea>

              <span className="pqrs-form__helper">
                Máximo 500 caracteres
              </span>
            </div>

          </div>

          {/* CHECK */}
          <div className="pqrs-form__check">

            <input type="checkbox" id="datos" />

            <label htmlFor="datos">
              Acepto la política y tratamiento de datos personales
            </label>

          </div>

          {/* BUTTONS */}
          <div className="pqrs-form__actions">

            <button className="btn-base btn-primary-brand">
              Enviar PQRS
            </button>

            <button className="btn-base pqrs-form__secondary">
              Limpiar formulario
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default PQRSForm;