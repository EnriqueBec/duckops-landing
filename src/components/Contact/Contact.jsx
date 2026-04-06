import "./Contact.css";

function Contact(){
    return(
        <section className="contact" id="contact">
            <h2 data-aos="zoom-in" data-aos-delay="100">Contacto</h2>

            <form 
                name="contact"
                method="POST"
                data-netlify="true"
                action="/gracias.html"
                className="form"
                data-aos="zoom-in"
                data-aos-delay="100"
            >
                <input type="hidden" name="form-name" value="contact" />

                <input 
                    name="nombre" 
                    type="text" 
                    placeholder="Nombre" 
                    required 
                />

                <input 
                    name="correo" 
                    type="email" 
                    placeholder="Correo" 
                    required 
                />

                <textarea 
                    name="mensaje" 
                    placeholder="Tu mensaje" 
                    required
                ></textarea>

                <button type="submit">
                    Enviar mensaje
                </button>

            </form>

            <p className="contact-note">
                Te responderemos lo antes posible 🚀
            </p>
        </section>
    );
}

export default Contact;
