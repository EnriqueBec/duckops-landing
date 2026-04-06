import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">
        
        <h1>
          Agencia Digital <span>DuckOPS</span>
        </h1>

        
        <p className="hero-desc">
          <strong>DuckOPS</strong> es una agencia especializada en desarrollo web, 
          automatización y soluciones digitales. Creamos experiencias modernas, 
          funcionales y optimizadas para impulsar tu presencia en línea.
        </p>

        <p className="hero-sub">
          No se trata solo de tener una página. <br />
          Diseñamos soluciones <strong>rápidas, escalables</strong> y enfocadas en 
          generar <strong>resultados reales</strong> para tu negocio.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Trabajemos juntos</button>
          <button className="btn-secondary">Ver trabajos</button>
        </div>

        <span className="hero-note">
          Desarrollo a medida • Soluciones reales • Enfoque profesional
        </span>

      </div>

    </section>
  );
}

export default Hero;
