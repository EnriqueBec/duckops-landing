import LogoLoop from "../LogoLoop/LogoLoop.jsx.jsx";
import "./Proyects.css";

function Proyects() {

  const logos = [
    { src: "/img/react.png", alt: "React" },
    { src: "/img/js.png", alt: "JavaScript" },
  ];

  return (
    <section className="proyects">

      <h2>Tecnologías que usamos</h2>

      <LogoLoop 
        logos={logos}
        speed={80}
        gap={40}
        logoHeight={40}
        scaleOnHover
        fadeOut
      />

    </section>
  );
}

export default Proyects;
