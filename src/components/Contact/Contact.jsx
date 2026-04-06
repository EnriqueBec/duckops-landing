import "./Contact.css";

function Contact(){

    const handleSubmit = (e) => {
        e.preventDefault();

        const nombre = e.target.nombre.value;
        const correo = e.target.correo.value;
        const mensaje = e.target.mensaje.value;

        const texto = encodeURIComponent(
        `Hola, soy ${nombre}
        📧 Correo: ${correo}
        💬 Mensaje: ${mensaje}`
        );

        window.open(`https://wa.me/5217774085481?text=${texto}`, "_blank");
    };

    return(
        <section className="contact" id="contact">
            <h2 data-aos="zoom-in" data-aos-delay="100">Contacto</h2>

            <form 
                className="form" 
                data-aos="zoom-in" 
                data-aos-delay="100"
                onSubmit={handleSubmit}
            >

                <input name="nombre" type="text" placeholder="Nombre" required />
                <input name="correo" type="email" placeholder="Correo" required />
                <textarea name="mensaje" placeholder="Tu mensaje" required></textarea>

                <button type="submit">Enviar</button>

            </form>
        </section>
    );
}

export default Contact;
