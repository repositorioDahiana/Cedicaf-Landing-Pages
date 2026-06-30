import logo from "../../assets/Iconos/Logo.png";

function FloatingLogo() {
  return (
    <a
      href="https://appcedira.com/solicitarcita/public/solicitud-examen"
      className="floating-logo"
      aria-label="Agenda tu cita"
    >
      <span className="floating-logo__tooltip show">
        Agenda tu cita
      </span>

      <img
        src={logo}
        alt="Logo1"
        className="floating-logo__image"
      />
    </a>
  );
}

export default FloatingLogo;