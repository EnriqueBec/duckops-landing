import "./Carousel.css";

function Carousel(){

    const images = [
        "/img/proyects/proyect1.jpeg",
        "/img/proyects/proyect7.jpeg",
        "/img/proyects/proyect2.jpeg",
        "/img/proyects/proyect3.jpeg",
        "/img/proyects/proyect6.jpeg",
        "/img/proyects/proyect4.jpeg",
        "/img/proyects/proyect5.jpeg",
    ];

    const allImages = [...images, ...images];

    return(
        <section className="carousel" id="carousel">
            <div className="carousel-track">
                {allImages.map((img, i) => (
                    <img key={i} src={img} alt="proyecto" />
                ))}
            </div>
        </section>
    );
}

export default Carousel;
