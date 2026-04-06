import "./Navbar.css";
import logo from "../img/logo_duck.png";
import { useState } from "react";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="encabezado">
        <img src={logo} alt="Logo" className="logo" />

        <button 
          className="menu-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className={`menu_opciones ${menuOpen ? "active" : ""}`}>
            <a href="#" onClick={() => setMenuOpen(false)}>Inicio</a>
            <a href="#proyectos" onClick={() => setMenuOpen(false)}>Sobre Nosotros</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contacto</a>
        </nav>

        <a className="Contacto" href="https://wa.me/5217774085481">
          Empieza ya
        </a>
    </div>
  );
}

export default Navbar;
