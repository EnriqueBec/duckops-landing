import "./About.css";

function About(){
    return(
        <section className="about">
            <div className="about-container">

                <div className="about-text" data-aos="fade-right" data-aos-delay="100">
                    <h2>Sobre Nosotros</h2>
                    <p>
                        En <strong>DuckOPS</strong> creamos soluciones digitales enfocadas en resultados reales.
                        No solo diseñamos páginas, construimos herramientas que ayudan a crecer negocios.
                    </p>

                    <p>
                        Combinamos desarrollo web, automatización y marketing digital para ofrecer
                        soluciones completas y escalables.
                    </p>

                    <button>Trabajemos juntos</button>
                </div>

                <div className="about-img" data-aos="fade-left" data-aos-delay="300">
                    <div className="circle">
                        <img src="/img/metaverso.png" alt="about" />
                    </div>
                </div>


            </div>
        </section>
    );
}

export default About;
