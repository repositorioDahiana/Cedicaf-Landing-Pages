import logo from "../../assets/Iconos/logo-cedicaf.png";
import icontec from "../../assets/Iconos/icontec.png";
import iqnet from "../../assets/Iconos/iqnet.png";
import supersalud from "../../assets/Iconos/supersalud.png";
import telefono from "../../assets/Iconos/telefono.png";
import email from "../../assets/Iconos/email.png";
import ubicacion from "../../assets/Iconos/Ubicacion.png";
import google from "../../assets/Iconos/google.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo + descripción */}
        <div className="footer-col">
          <img
            src={logo}
            className="footer-logo"
            alt="Logo Radiologos Asociados"
          />

          <a
            href="https://www.google.com/search?q=cedicaf+pereira&sca_esv=88d66a416da09828&biw=1536&bih=730&sxsrf=APpeQns0utqVunZEAfmMERvrWdyH2h-nTg%3A1782239573932&ei=VdE6apKrOOiLwbkPo-62yA4&gs_ssp=eJzj4tZP1zcsSY4vNkwxM2C0UjWosEg1trAwN04zNUtLNk82MLYyqLAwMTMwNDWytEizsLBIskjx4k9OTclMTkxTKEgtSs0sSgQAknET4g&oq=cedicaf+pereira&gs_lp=Egxnd3Mtd2l6LXNlcnAiD2NlZGljYWYgcGVyZWlyYSoCCAAyCxAuGK8BGMcBGIAEMgUQABiABDIKEAAYgAQYigUYQzIFEAAYgAQyBRAAGIAEMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIaEC4YrwEYxwEYgAQYlwUY3AQY3gQY4ATYAQFIiBhQAFjjEXAAeAGQAQCYAcoEoAGzG6oBCzAuOS4yLjIuMS4xuAEDyAEA-AEBmAIPoAKWHMICChAjGMkCGPAFGCfCAgoQIxiABBiKBRgnwgIQEC4YgAQYigUYQxjHARivAcICExAuGIAEGIoFGEMYxwEYrwEYjgXCAhAQLhiABBiKBRhDGMcBGNEDwgINEAAYgAQYigUYQxixA8ICEBAjGMkCGPAFGIAEGIoFGCfCAhAQLhhDGK8BGMcBGIAEGIoFwgIKECMY8AUYyQIYJ8ICExAuGEMYrwEYxwEYsQMYgAQYigXCAggQABiABBixA8ICCxAAGIAEGLEDGIMBwgILEC4YgAQYxwEYrwHCAh8QLhhDGK8BGMcBGIAEGIoFGJcFGNwEGN4EGOAE2AEBmAMAugYGCAEQARgUkgcJMC45LjIuMi4yoAeUzAGyBwkwLjkuMi4yLjK4B5YcwgcGMi0xNC4xyAdOgAgB&sclient=gws-wiz-serp#lrd=0x8e38873f56fc7c03:0x846015298f888b8d,3,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="google-rating"
          >
            <img
              src={google}
              className="google-mini-logo"
              alt="Google"
            />

            <div className="google-stars">
              ★★★★★
            </div>

            <p className="google-text">
              Califícanos en Google
            </p>
          </a>
        </div>

        {/* Servicios */}
        <div className="footer-col">
          <ul>
            <li><a href="/servicios">Servicios</a></li>
            <li><a href="/conocenos">Conócenos</a></li>
            <li><a href="/profesionales">Nuestros profesionales</a></li>
          </ul>

          <div className="footer-logos">
            {/* <img src={icontec} className="logo-icontec" alt="Icontec" />*/}
     {/*    <img src={iqnet} className="logo-iqnet" alt="IQNET" /> />*/}
            <img src={supersalud} className="logo-supersalud" alt="Supersalud" /> 
          </div>
        </div>

        {/* Pacientes */}
        <div className="footer-col">
          <ul>
            <li><a href="/citas">Pide tu cita</a></li>
            <li><a href="/especialidades">Especialidades</a></li>
            <li>
              <a href="/privacidad" target="_blank" rel="noopener noreferrer">
                Política de datos
              </a>
            </li>
            <li>
              <a href="/pqrs" target="_blank" rel="noopener noreferrer">
                PQRS
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="footer-col">
          <h4>Contacto</h4>

          <ul className="contact-list">
            <li>
              <img src={telefono} alt="Teléfono" />
              <a href="tel:+6063402333">+606 340 23 33</a>
            </li>

            <li>
              <img src={email} alt="Email" />
              <a href="mailto:info@radiologos.co">info@cedicaf.co</a>
            </li>

            <li>
              <img src={ubicacion} alt="Ubicación" />
              <a
                href="https://www.google.com/maps/place/Cedicaf+Pereira/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pereira, Risaralda, Colombia
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* bottom */}
      <div className="footer-bottom">
        <p>© 2026 Cedicaf. Todos los derechos reservados.</p>
      </div>

    </footer>
  );
}

export default Footer;