import "./Services.css";

function Services(){
    return(
        <section className="services">
            <h2 data-aos="zoom-in" data-aos-delay="100">Servicios</h2>

            <div className="services-grid">

                <div className="card" data-aos="zoom-in-up" data-aos-delay="100">
                    <h3>Desarrollo Web</h3>
                    <p>Webs modernas, rápidas y optimizadas para conversión.</p>
                </div>

                <div className="card" data-aos="zoom-in-up" data-aos-delay="200">
                    <h3>Automatización</h3>
                    <p>Procesos inteligentes que ahorran tiempo y dinero.</p>
                </div>

                <div className="card" data-aos="zoom-in-up" data-aos-delay="300">
                    <h3>Marketing Digital</h3>
                    <p>Estrategias para crecer tu negocio online.</p>
                </div>

            </div>
        </section>
    );
}

export default Services;
