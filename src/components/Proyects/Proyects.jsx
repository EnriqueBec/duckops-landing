import "./Proyects.css";

function Proyects(){
    return(
        <section className="proyects" id="proyectos">
            <h2 data-aos="zoom-in" data-aos-delay="100">Proyectos</h2>

            <div className="proyects-grid">

                <div className="card" data-aos="zoom-in-up" data-aos-delay="100">
                    <h3>E-commerce</h3>
                    <p>Tienda online optimizada para ventas.</p>
                </div>

                <div className="card" data-aos="zoom-in-up" data-aos-delay="200">
                    <h3>Sitio Corporativo</h3>
                    <p>Presencia profesional para empresas.</p>
                </div>

                <div className="card" data-aos="zoom-in-up" data-aos-delay="300">
                    <h3>Automatización</h3>
                    <p>Procesos automatizados con APIs.</p>
                </div>

            </div>
        </section>
    );
}

export default Proyects;
