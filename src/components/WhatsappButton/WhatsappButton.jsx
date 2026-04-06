import "./WhatsappButton.css";

function WhatsappButton(){
    return(
        <a 
            href="https://wa.me/5217774085481" 
            target="_blank" 
            rel="noopener noreferrer"
            className="whatsapp-btn"
        >
            <div className="waves"></div>
            <img src="/img/whatsapp.png" alt="whatsapp" />
        </a>
    );
}

export default WhatsappButton;
