import "./Contact.css";
import { useState } from "react";

function Contact(){

    const [enviado, setEnviado] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;

        const data = new FormData(form);

        await fetch("/", {
            method: "POST",
            body: data
        });

        setEnviado(true);
        form.reset();

        setTimeout(() => {
            setEnviado(false);
        }, 4000);
    };

    return(
        <section className="contact" id="contact">
            <h2 data-aos="zoom-in">Contacto</h2>

            <form 
                name="contact"
                method="POST"
                data-netlify="true"
                className="form"
                onSubmit={handleSubmit}
            >
                <input type="hidden" name="form-name" value="contact" />

                <input name="nombre" type="text" placeholder="Nombre" required />
                <input name="correo" type="email" placeholder="Correo" required />
                <textarea name="mensaje" placeholder="Tu mensaje" required></textarea>

                <button type="submit">
                    Enviar mensaje
                </button>
            </form>

            {enviado && (
                <div className="toast">
                    ✅ Mensaje enviado correctamente 🚀
                </div>
            )}

        </section>
    );
}

export default Contact;
